import $ from "jquery";
import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import gjsForms from "grapesjs-plugin-forms";
import gjsTabs from "grapesjs-tabs";
import gjsCssParser from "grapesjs-parser-postcss";
import grapesjsStyleBg from "grapesjs-style-bg";
import gjsImageEditor from "grapesjs-tui-image-editor";
import grapesjsCkEditor from "grapesjs-plugin-ckeditor";
import gjsTable from "grapesjs-blocks-table";

import {
  addEditorCommand,
  deviceManager,
  layerManager,
  panels,
  scripts,
  selectorManager,
  storageSetting,
  styleManager,
  styles,
  traitManager,
  addTemplates,
  uploadAssets,
  customComponents
} from "./geditor_utils";
// import tailwindComponent from "../../plugins/tailwind";
// import swiperComponent from "../../plugins/swiper";
// import chartLibComponent from "../../plugins/charts";
import axios from "axios";
import { API_HOST } from "../../configs/api";

const ckEditorRemoveButtonsString = "NewPage,ExportPdf,PasteFromWord,About,Preview,Print,Templates,Radio,Find,Replace,Form,Checkbox,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Link,Unlink,Anchor,Image,Flash,PageBreak,Iframe,Font,Styles,Format,FontSize,ShowBlocks";

const geditorConfig = async (templates, pageId, editType) => {
  $(".panel__devices").html("");
  $(".panel__basic-actions").html("");
  $(".panel__editor").html("");
  $("#blocks").html("");
  $("#styles-container").html("");
  $("#layers-container").html("");
  $("#trait-container").html("");

  // Content for Preview
  const navbar = $("#navbar");
  const mainContent = $("#main-content");
  const panelTopBar = $("#main-content > .navbar-light");

  const editor = grapesjs.init({
    exportWrapper: true,
    container: "#gjs-editor",
    blockManager: {
      appendTo: "#blocks",
    },
    dragMode: "translate",
    styleManager: styleManager,
    layerManager: layerManager,
    traitManager: traitManager,
    selectorManager: selectorManager,
    panels: panels,
    deviceManager: deviceManager,
    projectData: {
      pages: [
          {
            component: `
              <div class="test">Loading, Please wait</div>
              <style>.test { color: yellow }</style>
            `
          }
      ]
    },
    assetManager: {
      upload: true,
      embedAsBase64: false,
      autoAdd: 1,
      dropzone : 0, // Enable an upload  dropzone on the entire editor (not  document) when dragging files over it
      openAssetsOnDrop : 1, 
      multiUpload: true,
      uploadName: "image",
      uploadFile: (e) => { uploadAssets(e, editor) }
    },
    storageManager: storageSetting(pageId, editType),
    canvas: {
      styles: styles,
      scripts: scripts,
    },
    plugins: [
      gjsBlockBasic,
      gjsForms,
      gjsTabs,
      grapesjsStyleBg,
      grapesjsCkEditor,
      gjsCssParser,
    ],
    pluginsOpts: {
      [gjsBlockBasic]: {flexGrid: true },
      [gjsForms]: {},
      [gjsTabs]: {
        tabsBlock: {
           category: 'Extra'
        }
      },
      [grapesjsStyleBg]: {},
      [grapesjsCkEditor]: {
        options: {
          language: 'en',
          removeButtons: ckEditorRemoveButtonsString
        },
      },
      [gjsCssParser]: {},
      [gjsImageEditor]: {
        script: [
          'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
          'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
          'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
          'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
        ],
        style: [
          'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
          'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css',
        ],
      },
    },
  });

  // closing asset manager on selecting image
  editor.on('asset:open', () => {
    const assetManager = editor.AssetManager;
    $("body").on('click', ".gjs-am-assets .gjs-am-asset", (e) => {
      e.stopImmediatePropagation();
      assetManager.close();
    })
  });

  function obtainButtonNameFromTag(html) {
    html = html.trim();
    let closeBracketPosition = html.indexOf(">", 7) + 1;
    let openBracketPosition = html.lastIndexOf("</button>");
    let text = html.slice(closeBracketPosition, openBracketPosition);
    return text;
  }

  // button component text change code
  editor.on('component:selected', selectedComponent => {
    if (selectedComponent.is('button')) {
      let htmlString = selectedComponent.toHTML();
      let buttonText = obtainButtonNameFromTag(htmlString);
      selectedComponent.on(`change`, (arg) => {
        if (Object.keys(arg.changed).length == 1 && arg.changed.content) {
          buttonText = arg.attributes.content;
        }
        else {
          arg.attributes.content = buttonText;
        }
        selectedComponent.components(buttonText);
      });
    }
  })

  addEditorCommand(editor, pageId);

  addTemplates(templates, editor);

  customComponents(editor);

  editor.on("run:preview", () => {
    // This will be used to hide border
    editor.stopCommand("sw-visibility");
    // This will hide the sidebar view
    navbar.removeClass("sidebar");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");

    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });

  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    editor.runCommand("sw-visibility");
    navbar.addClass("sidebar");
    mainContent.addClass("main-content");
    panelTopBar.removeClass("d-none");
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => { category.set("open", false); });
  }, 1000);

  editor.on("load", async () => {
    if (editType === "templates") return;  //TODO: font options to be enabled for template

    // load content for the package
    const { data } = await axios.get(`${API_HOST}${editType}/${pageId}`);
    if (data) {
      localStorage.setItem("slug", data.slug);
      localStorage.setItem("name", data.name);
      document.getElementById("page-name").innerHTML = data.name;
      let fonts = [];

      // update content to canvas from DB
      const content = data.content;
      if (content) {
        editor.DomComponents.clear();
        editor.setComponents(content["mycustom-html"]);
        editor.CssComposer.clear();
        editor.addComponents("<style>" + content["mycustom-css"] + "</style>");
        const am = editor.AssetManager;
        am.add(content['mycustom-assets']);
        am.render();
      }

      // update fonts
      const prop = editor.StyleManager.getProperty("typography", "font-family");
      data.fonts.map(font => {
        fonts.push({ value: font.split(".")[0], name: font.split(".")[0] });
      });
      prop.set("options", [
        ...prop.attributes.options,
        ...fonts
      ]);
    }
  });

  return editor;
};

export default geditorConfig;
