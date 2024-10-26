import express from 'express';
import path from "path";

const fileRoute = express.Router();

fileRoute.get('/:fileType/:pageName/:fileName', (req, res) => {
  const { pageName, fileType, fileName } = req.params;

  return res.sendFile(path.join(__dirname, "../web_pages", pageName, fileType, fileName));
});

export default fileRoute;
