import axios from "axios";
import { API_HOST } from "../configs/api";

// list existing fonts
const updateFontsView = async (pageId) => {
  const response = await axios.get(`${API_HOST}pages/${pageId}/fonts`);
  const fontsHolder = document.getElementById("fonts-list-group");
  if (response.data.isSuccess) {
    let list = "";
    response.data.fonts.forEach(font => {
      list += `<li class="list-group-item d-flex justify-content-between">
        <span>${font}</span>
        <span class="delete-font">X</span>
      </li>`;
    })
    fontsHolder.innerHTML = list;
  } else {
    fontsHolder.innerHTML = `<li class="list-group-item d-flex text-danger">
        No fonts available !!
      </li>`;
  }

  let delFont = document.querySelectorAll("span.delete-font");
  delFont.forEach(el => {
    el.addEventListener("click", () => {
      alert("Under development!!");
    })
  });
}

export const createUploadFontModal = async (editor, pageId) => {
  const fontDiv = document.querySelector("#upload-font");

  if (fontDiv.classList.contains("d-none")) {
    fontDiv.classList = "";
    fontDiv.innerHTML = "";
  }

  let modal = `<div class="fade modal show" role="dialog" aria-modal="true" style="display: block;">
    <div style="padding-right: 17px; display: block;" class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title h5">Font Settings</div>&nbsp
          <button class="btn-close" aria-label="close"></button>
        </div>
        <div class="modal-body">
          <div style="height: 300px" id="upload-container">
            <div class="row">
              <div class="col" style="border-right: 1px solid #ccc; height: 280px">
                <form>
                  <div class="form-group">
                    <label for="fontFile">Select font</label>
                    <input type="file" class="form-control" name="fontFile" id="fontFile"/>
                    <small class="form-text text-muted">Fonts selected for this design will be not available for other designs</small>
                  </div>
                  <div class="form-group">
                    <button id="submit-fonts" class="btn btn-primary">Add Font</button>
                  </div>
                </form>
              </div>
              <div class="col" style="height: 280px; overflow: scroll">
                <div id="font-list">
                  <h6>Custom fonts for this design</h6>
                  <ul class="list-group" id="fonts-list-group"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
  <div class="fade modal-backdrop show"></div>`;

  fontDiv.innerHTML = modal;

  // module toggle[show/close] handler
  const closeBtn = document.querySelector("#upload-font .btn-close");
  closeBtn.addEventListener("click", () => {
    fontDiv.className = "d-none";
  });

  // upload handler
  const submitButton = document.querySelector("#submit-fonts");
  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let fileInput = document.querySelector("#fontFile");

    if (fileInput.value === "") {
      alert("Please select font file!!");
      return;
    }

    let formData = new FormData();
    formData.append("fontFile", fileInput.files[0]);
    const response = await axios.post(
      `${API_HOST}pages/${pageId}/fonts`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    if (response.data.isSuccess) {
      const fileFullName = fileInput.files[0].name;
      const [fileName, fileExtension] = fileFullName.split(".");

      updateFontsView(pageId);
      const fontFamily = editor.StyleManager.getProperty("typography", "font-family");
      fontFamily.set("options", [
        ...fontFamily.get("options"),
        { value: fileName, name: fileName }
      ]);

      const slugName = localStorage.getItem("slug");
      let type = fileFullName.indexOf(".ttf") > -1 ? "truetype" : "opentype"
      let fontCss = `@font-face{font-family:${fileName};src:url("${API_HOST}fonts/${slugName}/${fileFullName}") format(${type});font-weight:normal;font-style:normal;font-display:fallback;}`;
      editor.Css.addRules(fontCss);
      fileInput.value = "";
    }
  });

  updateFontsView(pageId);
};