import fs from "fs-extra";
import { API_HOST } from "../configs/configs";

export const updateHtml = async (filePath, slugName, contentToUpdate) => {
  contentToUpdate = contentToUpdate.replaceAll(`${API_HOST}/api/images/` + slugName, "./images");

  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./plugins/bootstrap/bootstrap.min.css" />
  <link rel="stylesheet" href="./css/style.css" />
</head>

  ${contentToUpdate}

  <script type="text/javascript" src="./plugins/jquery/jquery.min.js"></script>
  <script type="text/javascript" src="./plugins/bootstrap/bootstrap.min.js"></script>
</html>`;

  await fs.writeFile(filePath, htmlTemplate);
  return { isSuccess: true };
};

export const updateCss = async (filePath, slugName, contentToUpdate) => {
  // update font path
  contentToUpdate = contentToUpdate.replaceAll(`${API_HOST}/api/fonts/` + slugName, "../fonts");

  // update image path
  contentToUpdate = contentToUpdate.replaceAll(`${API_HOST}/api/images/` + slugName, "../images");
  await fs.writeFile(filePath, contentToUpdate);
  return { isSuccess: true };
}