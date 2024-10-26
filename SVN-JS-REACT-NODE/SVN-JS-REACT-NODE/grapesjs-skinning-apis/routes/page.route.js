import express from 'express';

import { verifyToken } from '../middlewares/auth.middlewares';

import {
  changeContent,
  create,
  update,
  deletePageRecord,
  details,
  list,
  loadContent,
  downloadPackage,
  uploadFont,
  fontLists
} from '../controllers/page.controller';

const pageRoute = express.Router();
pageRoute.post('/', verifyToken, create);
pageRoute.post('/:pageId/content', changeContent);
pageRoute.get("/:pageId/download", downloadPackage);
pageRoute.put('/:pageId', update);

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/list', verifyToken, list);
pageRoute.get('/:pageId', details);
pageRoute.get('/:pageId/content', loadContent);
pageRoute.post("/:pageId/fonts", uploadFont);
pageRoute.get("/:pageId/fonts", fontLists);

export default pageRoute;
