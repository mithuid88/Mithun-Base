import express from 'express';
import { loadAllAssets, uploadAssets } from '../controllers/assets.controller';

const assetRoute = express.Router();

assetRoute.get('/', loadAllAssets);

assetRoute.post('/images/:pageName', uploadAssets);

export default assetRoute;
