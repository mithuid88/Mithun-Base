const loaderElem = document.getElementById("custom-loader");

export const showLoader = () => {
  loaderElem.classList.remove("d-none");
};

export const hideLoader = () => {
  loaderElem.classList.add("d-none");
};