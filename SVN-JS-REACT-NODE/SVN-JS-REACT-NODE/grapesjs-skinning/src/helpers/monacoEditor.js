import * as monaco from "monaco-editor";

import { hideLoader } from "./utils";

// global variables
var HTMLEditor, CSSEditor, JSEditor;

const validateHTML = (html) => {
  const parser = new DOMParser(); //attributes not checking
  const doc = parser.parseFromString(html, 'text/xml');
  if (doc.documentElement.querySelector('parsererror')) {
    return doc.documentElement.querySelector('parsererror').innerText;
  } else {
    return true;
  }
}

// function to enable editor
const customEditor = (type, content, contaierId) => {
  let monacoEditor = monaco.editor.create(document.getElementById(contaierId), {
    value: content,
    language: type,
    lineNumbers: "on",
    theme: "vs-dark",
    roundedSelection: false,
    scrollBeyondLastLine: false,
    // wordWrap: 'wordWrapColumn',
    // wordWrapColumn: 200,
    // wordWrapColumn: 100,
    scrollbar: {
      horizontal: 'visible',
    },
    letterSpacing: 1,
    useTabStops: true,
    automaticLayout: true,
    format: true,
    quickSuggestions: true,
    formatOnPaste: true,
    "autoIndent": true,
    "formatOnType": true
  });

  if (type === "javascript") {
    setTimeout(() => {
      HTMLEditor.getAction('editor.action.formatDocument').run();
      CSSEditor.getAction('editor.action.formatDocument').run();
      JSEditor.getAction('editor.action.formatDocument').run();
      console.log("fomatter is executed");
      hideLoader();
    }, 300);
  }

  if (type === "html") HTMLEditor = monacoEditor
  else if (type === "css") CSSEditor = monacoEditor
  else if (type === "javascript") JSEditor = monacoEditor
}

// function to create editor modal
export const createEditorModal = (editor) => {
  let editorDiv = document.querySelector("#code-editor");

  if (editorDiv.classList.contains("d-none")) {
    editorDiv.classList = "";
    editorDiv.innerHTML = "";
  }

  let modal = `<div class="fade modal show" role="dialog" aria-modal="true" style="display: block;">
    <div style="padding-right: 17px; display: block;" class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title h5">Code Editor</div>&nbsp

          <button data-target="html" class="btn btn-light active">HTML</button>&nbsp
          <button data-target="css" class="btn btn-light">CSS</button>&nbsp
          <button data-target="js" class="btn btn-light">JS</button>&nbsp
          <button id="save-editor" class="btn btn-success right">Save</button>&nbsp
          <div class="text-danger"><small> Please do <strong>Shift+Alt+F</strong> for formatting, if auto format is not done</small></div>
          <button class="btn-close" aria-label="close"></button>          
        </div>

        <div class="modal-body">
          
          <div style="height: 750px" class="editor-container" id="html-container"></div>
          <div style="height: 750px" class="editor-container d-none" id="css-container"></div>
          <div style="height: 750px" class="editor-container  d-none" id="js-container"></div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="fade modal-backdrop show"></div>`;

  editorDiv.innerHTML = modal;

  // module toggle[show/close] handler
  let closeBtn = document.querySelector("#code-editor .btn-close");
  closeBtn.addEventListener("click", () => {
    editorDiv.className = "d-none";
  });

  // editor shift between html, css and js
  let languageButton = document.querySelectorAll("#code-editor .btn-light");
  let contaners = document.querySelectorAll("#code-editor .editor-container");
  let targetToBeShown;
  languageButton.forEach((btn) => {
    btn.addEventListener("click", function () {
      for (var i = 0; i < contaners.length; i++) {
        contaners[i].classList.add("d-none");
        languageButton[i].classList.remove("active");
      }
      this.classList.add("active");
      targetToBeShown = this.dataset.target + "-container";
      document.querySelector("#" + targetToBeShown).classList.remove("d-none");
    });
  });

  // editor save handler
  const saveBtn = document.querySelector("#save-editor");
  saveBtn.addEventListener("click", () => {
    // html update to grapesjs
    var htmlContent = HTMLEditor.getValue();
    var isValidHTML = validateHTML(htmlContent);
    if (isValidHTML == true) {
      editor.DomComponents.clear();
      editor.setComponents(HTMLEditor.getValue());
    }
    else {
      alert('Error in HTML code:\n' + isValidHTML)
      return false;
    }

    // css update to grapesjs
    editor.CssComposer.clear();
    editor.addComponents("<style>" + CSSEditor.getValue() + "</style>");

    // for js, need to store in file system directly [:TODO]

    alert("View is updated with latest code!");
    editorDiv.className = "d-none";

  });

  customEditor("html", editor.getHtml(), "html-container");
  customEditor("css", editor.getCss(), "css-container");
  customEditor("javascript", editor.getJs() || "//javascript will be enabled soon", "js-container");
}