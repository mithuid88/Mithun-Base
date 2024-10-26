import download from 'downloadjs';
import axios from 'axios';

import { API_HOST } from "../../configs/api";

import { showLoader } from '../utils';

import { modal } from './modal';
import table from "./table/index";
import bootstrap from "./bootstrap/index";

import { createUploadFontModal } from "../customFont";
import { createEditorModal } from '../monacoEditor';

const headingList = [{
    tag: "h1",
    slug: "header_one",
    name: "Header One",
    className: "fa fa-header fa-h1",
    description:'H1 Header',
    num:'1'
  },
  {
    tag: "h2",
    slug: "header_two",
    name: "Header Two",
    className: "fa fa-header",
    description:'H2 Header',
    num:'2'
  },
  {
    tag: "h3",
    slug: "header_three",
    name: "Header three",
    className: "fa fa-header",
    description:'H3 Header',
    num:'3'
  },
  {
    tag: "h4",
    slug: "header_four",
    name: "Header four",
    className: "fa fa-header",
    description:'H4 Header',
    num:'4'
  },
  {
    tag: "h5",
    slug: "header_five",
    name: "Header five",
    className: "fa fa-header",
    description:'H5 Header',
    num:'5'
  },
  {
    tag: "h6",
    slug: "header_six",
    name: "Header six",
    className: "fa fa-header",
    description:'H6 Header',
    num:'6'
  }];

export const styleManager = {
  hideNotStylable: false,
  appendTo: "#styles-container",
  sectors: [
    {
      name: "General",
      buildProps: [
        "float",
        "display",
        "position",
        "top",
        "right",
        "left",
        "bottom",
        "z-index"
      ],
      properties: [
        {
          name: "Alignment[Float]",
          property: "float",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", className: "fa fa-times" },
            { value: "left", className: "fa fa-align-left" },
            { value: "right", className: "fa fa-align-right" },
          ],
        },
        { property: "position", type: "select" },
        {
          type: "slider",
          property: "z-index",
          defaults: 1,
          step: 1,
          max: 100,
          min: -100,
        },
      ],
    },
    {
      name: "Dimension",
      open: false,
      buildProps: [
        "width",
        "max-width",
        "min-width",
        "height",
        "max-height",
        "min-height",
        "margin",
        "padding",
      ],
      properties: [
        {
          id: "flex-width",
          type: "integer",
          name: "Width",
          units: ["px", "%"],
          property: "flex-basis",
          toRequire: 1,
        },
        {
          property: "margin",
          properties: [
            { name: "Top", property: "margin-top" },
            { name: "Right", property: "margin-right" },
            { name: "Bottom", property: "margin-bottom" },
            { name: "Left", property: "margin-left" },
          ],
        },
        {
          property: "padding",
          properties: [
            { name: "Top", property: "padding-top" },
            { name: "Right", property: "padding-right" },
            { name: "Bottom", property: "padding-bottom" },
            { name: "Left", property: "padding-left" },
          ],
        },
      ],
    },
    {
      name: "Typography",
      open: false,
      buildProps: [
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "color",
        "line-height",
        "text-align",
        "text-decoration",
        "text-shadow",
      ],
      properties: [
        { name: "Font", property: "font-family" },
        { name: "Weight", property: "font-weight" },
        { name: "Font color", property: "color" },
        {
          property: "text-align",
          type: "radio",
          defaults: "left",
          list: [
            { value: "left", name: "Left", className: "fa fa-align-left" },
            {
              value: "center",
              name: "Center",
              className: "fa fa-align-center",
            },
            { value: "right", name: "Right", className: "fa fa-align-right" },
            {
              value: "justify",
              name: "Justify",
              className: "fa fa-align-justify",
            },
          ],
        },
        {
          property: "text-decoration",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", name: "None", className: "fa fa-times" },
            {
              value: "underline",
              name: "underline",
              className: "fa fa-underline",
            },
            {
              value: "line-through",
              name: "Line-through",
              className: "fa fa-strikethrough",
            },
          ],
        },
        {
          property: "text-shadow",
          properties: [
            { name: "X position", property: "text-shadow-h" },
            { name: "Y position", property: "text-shadow-v" },
            { name: "Blur", property: "text-shadow-blur" },
            { name: "Color", property: "text-shadow-color" },
          ],
        },
      ],
    },
    {
      name: "Decorations",
      open: false,
      buildProps: [
        "opacity",
        "border-radius",
        "border-color",
        "border-top-width",
        "border-bottom-width",
        "border-left-width",
        "border-right-width",
        "border-style",
        "box-shadow",
        "background-bg",
      ],
      properties: [
        {
          type: "slider",
          property: "opacity",
          defaults: 1,
          step: 0.01,
          max: 1,
          min: 0,
        },
        { name: "Border Top Width", property: "border-top-width", type: "integer", units: ['px'] },
        { name: "Border Bottom Width", property: "border-bottom-width", type: "integer", units: ['px'] },
        { name: "Border Left Width", property: "border-left-width", type: "integer", units: ['px'] },
        { name: "Border Right Width", property: "border-right-width", type: "integer", units: ['px'] },
        { name: "Border color", property: "border-color", type: "color" },
        {
          name: "Border style", property: "border-style", list: [
            { value: "none", name: "None" },
            { value: "dotted", name: "Dotted" },
            { value: "dashed", name: "Dashed" },
            { value: "solid", name: "Solid" },
            { value: "double", name: "Double" },
            { value: "groove", name: "Groove" },
            { value: "ridge", name: "Ridge" },
            { value: "inset", name: "Inset" },
            { value: "outset", name: "Outset" },
          ],
        },
        {
          property: "border-radius",
          properties: [
            { name: "Top", property: "border-top-left-radius" },
            { name: "Right", property: "border-top-right-radius" },
            { name: "Bottom", property: "border-bottom-left-radius" },
            { name: "Left", property: "border-bottom-right-radius" },
          ],
        },
        {
          property: "box-shadow",
          properties: [
            { name: "X position", property: "box-shadow-h" },
            { name: "Y position", property: "box-shadow-v" },
            { name: "Blur", property: "box-shadow-blur" },
            { name: "Spread", property: "box-shadow-spread" },
            { name: "Color", property: "box-shadow-color" },
            { name: "Shadow type", property: "box-shadow-type" },
          ],
        },
        {
          id: "background-bg",
          property: "background",
          type: "bg",
        },
      ],
    },
    {
      name: "Extra",
      open: false,
      buildProps: ["transition", "perspective", "transform"],
      properties: [
        {
          property: "transition",
          properties: [
            { name: "Property", property: "transition-property" },
            { name: "Duration", property: "transition-duration" },
            { name: "Easing", property: "transition-timing-function" },
          ],
        },
        {
          property: "transform",
          properties: [
            { name: "Rotate X", property: "transform-rotate-x" },
            { name: "Rotate Y", property: "transform-rotate-y" },
            { name: "Rotate Z", property: "transform-rotate-z" },
            { name: "Scale X", property: "transform-scale-x" },
            { name: "Scale Y", property: "transform-scale-y" },
            { name: "Scale Z", property: "transform-scale-z" },
          ],
        },
      ],
    },
    {
      name: "Flex",
      open: false,
      properties: [
        {
          name: "Flex Container",
          property: "display",
          type: "select",
          defaults: "block",
          list: [
            { value: "block", name: "Disable" },
            { value: "flex", name: "Enable" },
          ],
        },
        {
          name: "Flex Parent",
          property: "label-parent-flex",
          type: "integer",
        },
        {
          name: "Direction",
          property: "flex-direction",
          type: "radio",
          defaults: "row",
          list: [
            {
              value: "row",
              // name: "Row",
              className: "icons-flex icon-dir-row",
              title: "Row",
            },
            {
              value: "row-reverse",
              // name: "Row reverse",
              className: "icons-flex icon-dir-row-rev",
              title: "Row reverse",
            },
            {
              value: "column",
              // name: "Column",
              title: "Column",
              className: "icons-flex icon-dir-col",
            },
            {
              value: "column-reverse",
              // name: "Column reverse",
              title: "Column reverse",
              className: "icons-flex icon-dir-col-rev",
            },
          ],
        },
        {
          name: "Justify",
          property: "justify-content",
          type: "radio",
          defaults: "flex-start",
          list: [
            {
              value: "flex-start",
              // name: "Start",
              className: "icons-flex icon-just-start",
              title: "Start",
            },
            {
              value: "flex-end",
              title: "End",
              // name: "End",
              className: "icons-flex icon-just-end",
            },
            {
              value: "space-between",
              title: "Space between",
              // name: "Space between",
              className: "icons-flex icon-just-sp-bet",
            },
            {
              value: "space-around",
              title: "Space around",
              // name: "Space around",
              className: "icons-flex icon-just-sp-ar",
            },
            {
              value: "center",
              title: "Center",
              // name: "Center",
              className: "icons-flex icon-just-sp-cent",
            },
          ],
        },
        {
          name: "Align",
          property: "align-items",
          type: "radio",
          defaults: "center",
          list: [
            {
              value: "flex-start",
              title: "Start",
              // name: "Start",
              className: "icons-flex icon-al-start",
            },
            {
              value: "flex-end",
              title: "End",
              // name: "End",
              className: "icons-flex icon-al-end",
            },
            {
              value: "stretch",
              title: "Stretch",
              // name: "Stretch",
              className: "icons-flex icon-al-str",
            },
            {
              value: "center",
              title: "Center",
              // name: "Center"
              className: "icons-flex icon-al-center",
            },
          ],
        },
        {
          name: "Flex Children",
          property: "label-parent-flex",
          type: "integer",
        },
        {
          name: "Order",
          property: "order",
          type: "integer",
          defaults: 0,
          min: 0,
        },
        {
          name: "Flex",
          property: "flex",
          type: "composite",
          properties: [
            {
              name: "Grow",
              property: "flex-grow",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Shrink",
              property: "flex-shrink",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Basis",
              property: "flex-basis",
              type: "integer",
              units: ["px", "%", ""],
              unit: "",
              defaults: "auto",
            },
          ],
        },
        {
          name: "Align",
          property: "align-self",
          type: "radio",
          defaults: "auto",
          list: [
            {
              value: "auto",
              name: "Auto",
            },
            {
              value: "flex-start",
              title: "Start",
              // name: "Start",
              className: "icons-flex icon-al-start",
            },
            {
              value: "flex-end",
              title: "End",
              // name: "End",
              className: "icons-flex icon-al-end",
            },
            {
              value: "stretch",
              title: "Stretch",
              // name: "Stretch",
              className: "icons-flex icon-al-str",
            },
            {
              value: "center",
              title: "Center",
              // name: "Center",
              className: "icons-flex icon-al-center",
            },
          ],
        },
      ],
    },
  ],
};

export const layerManager = {
  appendTo: "#layers-container",
};

export const traitManager = {
  appendTo: "#trait-container",
};

export const selectorManager = {
  appendTo: "#styles-container",
};

export const panels = {
  defaults: [
    {
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: '<i class="fa fa-clone"></i>',
          command: "sw-visibility", // Built-in command
          attributes: {
            title: "Components View"
          }
        },
        {
          id: "logout",
          className: "btn-toggle-borders float-right",
          label: '<i class="fa fa-sign-out"></i>',
          command: "logout",
          attributes: {
            title: "Logout"
          }
        },
      ],
    },
    {
      id: "editor-actions",
      el: ".panel__editor",
      buttons: [
        {
          id: "saveDb",
          className: "fa fa-save btn-save",
          command: "saveDb",
          attributes: {
            title: "Save Design"
          }
        },
        {
          id: "cmd-clear",
          className: "fa fa-trash",
          command: "cmd-clear",
          attributes: {
            title: "Clear Canvas"
          }
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "undo",
          attributes: {
            title: "Undo"
          }
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "redo",
          attributes: {
            title: "Redo"
          }
        },
        {
          id: "export",
          className: "fa fa-download",
          command: "export",
          attributes: {
            title: "Export package"
          }
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "preview",
        },
        {
          id: "edit",
          className: "fa fa-edit",
          command: "edit",
          attributes: {
            title: "Edit"
          }
        },
        {
          id: "fonts",
          className: "fa fa-font",
          command: "fonts",
          attributes: {
            title: "Upload Fonts"
          }
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: '<i class="fa fa-television"></i>',
          command: "set-device-desktop",
          togglable: false,
          attributes: {
            title: "Desktop"
          }
        },
        // {
        //   id: "device-mobile",
        //   label: '<i class="fa fa-mobile"></i>',
        //   command: "set-device-mobile",
        //   togglable: false,
        // },
        {
          id: "ipad",
          label: '<i class="fa fa-tablet"></i>',
          command: "set-device-ipad",
          togglable: false,
          attributes: {
            title: "iPad"
          }
        },
        {
          id: "ipadPro",
          label: '<i class="fa fa-tablet"></i>',
          command: "set-device-ipadPro",
          togglable: false,
          attributes: {
            title: "iPad-Pro"
          }
        },
      ],
    },
  ],
};

export const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "",
      height: ""
    },
    // {
    //   name: "Mobile",
    //   width: "320px",
    //   widthMedia: "480px",
    // },
    {
      name: "iPad",
      width: "1024px",
      height: "768px",
      widthMedia: "1024px",
    },
    {
      name: "iPadPro",
      width: "1180px",
      height: "820px",
      widthMedia: "1180px",
    }
  ],
};

export const addEditorCommand = (editor, pageId) => {
  editor.Commands.add("logout", {
    run: () => {
      alert("Logout is disabled in this page, You can logout from home page!");
    }
  })

  // Commands
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });

  // editor.Commands.add("set-device-mobile", {
  //   run: (editor) => editor.setDevice("Mobile"),
  // });

  editor.Commands.add("set-device-ipad", {
    run: (editor) => editor.setDevice("iPad"),
  });

  editor.Commands.add("set-device-ipadPro", {
    run: (editor) => editor.setDevice("iPadPro"),
  });

  // Save Button
  editor.Commands.add("saveDb", {
    run: (editor, sender) => {
      sender && sender.set("active");
      editor.store();
      setTimeout(() => {
        alert("Saved Successfully!!");
      }, 1000);
    },
  });

  //Clear Button
  editor.Commands.add("cmd-clear", {
    run: (editor) => {
      editor.DomComponents.clear();
      editor.CssComposer.clear();
    },
  });

  // Undo
  editor.Commands.add("undo", {
    run: (editor) => editor.UndoManager.undo(),
  });

  // Redo
  editor.Commands.add("redo", {
    run: (editor) => editor.UndoManager.redo(),
  });

  // Download
  editor.Commands.add("export", {
    run: async (editor) => {
      // editor.runCommand("gjs-export-zip")
      const response = await fetch(`${API_HOST}pages/${pageId}/download`);
      const blob = await response.blob();
      download(blob, ((localStorage.getItem("slug") || "package") + ".zip"));
    },
  });

  // Edit
  editor.Commands.add("edit", {
    run: async (editor) => {
      showLoader();
      createEditorModal(editor);
    }
  })

  // Fonts
  editor.Commands.add("fonts", {
    run: async (editor) => {
      createUploadFontModal(editor, pageId);
    }
  })

  editor.Commands.add("new-tool-cmd", {
    run: (editor) => console.log("Checking New Toolbar"),
  });
};

export const addTemplates = (templates, editor) => {
  templates.forEach(template => {
    if (template.content) {
      editor.BlockManager.add(template.slug, {
        category: "Templates",
        label: `<span class="fa fa-image"></span><div class="gjs-block-label">${template.name}</div>`,
        content: template.content["mycustom-html"] + "<style>" + template.content["mycustom-css"] + "</style>",
      });

    }
  });

  headingList.forEach(header => {
    editor.BlockManager.add(header.slug, {
      category: "Headings",
      label: `<span class='${header.className}'><span style="font-size:30px">${header.num}</span></span><div class="gjs-block-label">${header.name}</div>`,
      content:`<${header.tag}>${header.description}</${header.tag}>`
    });
  });

};

export const customComponents = (editor) => {
  modal(editor);
  table(editor, { 'containerId' : '#gjs-editor' } );
  bootstrap(editor, {});
};

export const storageSetting = (pageId, editType) => {
  return {
    type: "remote",
    options: {
      remote: {
        stepsBeforeSave: 5,
        autoload: false,
        autoStore: false,
        onStore: (data, editor) => {
          return {
            "mycustom-html": editor.getHtml({ data }),
            "mycustom-css": editor.getCss({ data }),
            "mycustom-assets": data.assets
          }; 
        },
        onLoad: result => result.data,
        urlStore: `${API_HOST}${editType}/${pageId}/content`,
        // urlLoad: `${API_HOST}${editType}/${pageId}/content`,
      }      
    }    
  };
};

export const uploadAssets = async (e, editor) => {
  const slugName = localStorage.getItem("slug");

  let formData = new FormData();
  if(e.target.files.length != 0){
    console.log("target file-")
    console.log(e.target.files)
    for(let fileData in e.target.files){
      if(fileData != 'length' && fileData != 'item'){
        formData.append("image", e.target.files[fileData]);
      }
    }
  }
  else{
    console.log("data-transfer file-")
    console.log(e.dataTransfer.files)
    for(let fileData in e.dataTransfer.files){
      if(fileData != 'length' && fileData != 'item'){
        formData.append("image", e.dataTransfer.files[fileData]);
      }
    }
  }

  const response = await axios.post(
    `${API_HOST}assets/images/${slugName}`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  const am = editor.AssetManager;
  am.add([...response.data]);
  am.render();
  
}

export const scripts = [
  "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  // "https://unpkg.com/swiper@7/swiper-bundle.min.js",
  "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js",
  // "https://cdn.jsdelivr.net/npm/chart.js",
];
export const styles = [
  // "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
  // "https://unpkg.com/swiper@7/swiper-bundle.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
];

export const toggleSidebar = (fromEditor) => {
  const sidebar = document.getElementById("navbar");
  const mainContent = document.getElementById("main-content");
  if (fromEditor) {
    sidebar.classList.remove("d-flex");
    sidebar.classList.add("d-none");
    mainContent.classList.remove("w-85", "start-15");
  } else if (sidebar.classList.contains("d-flex")) {
    sidebar.classList.remove("d-flex");
    sidebar.classList.add("d-none");
    mainContent.classList.remove("w-85", "start-15");
  } else {
    sidebar.classList.remove("d-none");
    sidebar.classList.add("d-flex");
    mainContent.classList.add("w-85", "start-15");
  }
};
