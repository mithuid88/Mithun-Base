import path from "path";
import fs from "fs-extra";
import zipper from "zip-local";
import {
  createPage,
  deletePage,
  listPages,
  pageDetails,
  savePageContent,
  updatePage,
  updateFonts
} from '../services/page.services';

import Pages from '../models/page.modal';

import { updateCss, updateHtml } from "../helpers/file-operation";

export const create = async (req, res) => {
  const pageBody = req.body;
  pageBody.user = req.user.userId;
  pageBody.engagement = req.user.engagement; // adding engagement in create function
  const page = await createPage(pageBody);
  const destPath = path.join(__dirname, "../web_pages", page.slug);
  const samplePath = path.join(__dirname, "../web_pages/sample");
  fs.copy(samplePath, destPath, async (err) => {
    return res.json({ isSuccess: true, page });
  });
};

export const list = async (req, res) => {
  const { engagement, userId, isAdmin } = req.user;
  const pages = await listPages(engagement, userId,isAdmin);
  return res.json({ isSuccess: true, pages });
};

export const details = async (req, res) => {
  const { pageId } = req.params;
  const details = await pageDetails(pageId);
  res.json(details);
};

export const deletePageRecord = async (req, res) => {
  const { pageId } = req.params;
  const data = await deletePage(pageId);
  res.json({ isSuccess: true, data });
};

export const update = async (req, res) => {
  const { pageId } = req.params;
  const pageBody = req.body;
  const page = await updatePage(pageId, pageBody);
  res.json(page);
};

/**
 * save the html and css content in database and file system 
 * 
 */
export const changeContent = async (req, res) => {
  const { pageId } = req.params;
  // update in database
  const pageContent = await savePageContent(pageId, req.body);

  // update in file system
  const destPath = path.join(__dirname, "../web_pages", pageContent.slug);
  if (!await fs.pathExists(destPath)) {
    // if project is not crated, then create structure for first time
    const samplePath = path.join(__dirname, "../web_pages/sample");
    fs.copy(samplePath, destPath, async (err) => {
      if (err) {
        return res.json({ isSuccess: false, msg: "Unable to create page, Please try later or connect with admin!!" });
      }
      const indexFile = path.join(destPath, "index.html");
      const cssFile = path.join(destPath, "css/style.css");
      await updateHtml(indexFile, pageContent.slug, req.body["mycustom-html"]);
      await updateCss(cssFile, pageContent.slug, req.body["mycustom-css"]);
      return res.json({ isSuccess: true, data: "Successfully Created!!" });
    });
  } else {
    // else project is created already, update the content
    const indexFile = path.join(destPath, "index.html");
    const cssFile = path.join(destPath, "css/style.css");
    await updateHtml(indexFile, pageContent.slug, req.body["mycustom-html"]);
    await updateCss(cssFile, pageContent.slug, req.body["mycustom-css"]);
    return res.json({ isSuccess: true, data: "Successfully Updated!!" });
  }
};

export const loadContent = async (req, res) => {
  const { pageId } = req.params;
  res.header('Content-Type', 'application/json');
  const pageData = await pageDetails(pageId);
  res.json(pageData.content);
};

export const downloadPackage = async (req, res) => {
  // clear temp directory first
  const { pageId } = req.params;
  const page = await Pages.findOne({ _id: pageId });

  const tempPath = path.join(__dirname, "../temp");
  fs.readdir(tempPath, (err, files) => {
    if (err) {
      console.log(err);
    }
    for (const file of files) {
      fs.unlinkSync(path.join(tempPath, file));
    }

    // once cleared temp directory, continue with zip and download
    const packagePath = path.join(__dirname, "../web_pages", page.slug);
    const downloadFileName = `temp/${page.slug}.zip`;
    zipper.sync.zip(packagePath).compress().save(downloadFileName);

    return res.download(path.join(__dirname, "../", downloadFileName));
  });
};

export const uploadFont = async (req, res) => {
  try {
    if (!req.files) {
      return res.json({ isSuccess: false, msg: "Failed to upload the font" });
    }
    let font = req.files.fontFile;
    const { pageId } = req.params;
    const page = await Pages.findOne({ _id: pageId });

    const packagePath = path.join(__dirname, "../web_pages", page.slug, "fonts", font.name);

    font.mv(packagePath);

    // update in database
    await updateFonts(pageId, font.name);

    return res.json({ isSuccess: true, msg: "Font is uploaded!, Please add other fonts if required" });

  } catch (error) {
    return res.json({ isSuccess: true, msg: "Something went wrong, Please inform to admin!!" });
  }
};

export const fontLists = async (req, res) => {
  const { pageId } = req.params;
  res.header('Content-Type', 'application/json');
  const pageData = await pageDetails(pageId);
  res.json({ isSuccess: pageData.fonts.length > 0, fonts: pageData.fonts });
}