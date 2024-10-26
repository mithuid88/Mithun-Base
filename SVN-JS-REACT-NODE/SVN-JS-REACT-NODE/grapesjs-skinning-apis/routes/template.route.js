import express from 'express';

import { verifyToken } from '../middlewares/auth.middlewares';

import {
  create,
  list,
  changeContent,
  loadContent,
  deleteTemplateRecord
} from '../controllers/template.controller';

const templateRoute = express.Router();

templateRoute.get('/list', verifyToken, list);
templateRoute.post('/', verifyToken, create);
templateRoute.post('/:templateId/content', changeContent);
templateRoute.get('/:templateId/content', loadContent);

// templateRoute.get("/:pageId/download", downloadPackage);
// templateRoute.put('/:pageId', update);

templateRoute.delete('/:pageId', deleteTemplateRecord);

// templateRoute.get('/:pageId', details);


// templateRoute.post("/:pageId/fonts", uploadFont);
// templateRoute.get("/:pageId/fonts", fontLists);

export default templateRoute;
