import express from 'express';
import path from "path";
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import pageRoute from './routes/page.route';
import templateRoute from './routes/template.route';
import assetRoute from './routes/assets.route';
import fileRoute from "./routes/file.route";
import userRoute from './routes/user.route';

//Initialize App
const app = express();

// enable files upload
app.use(fileUpload({
  createParentPath: true
}));

app.use(express.json({ limit: "50mb" }));
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "build"), { index: false }));

// const mongoUri = 'mongodb://localhost:27017/webpage_builder';
// const mongoUri = "mongodb+srv://praveen_naik:UvkvX0WeDUJ98ZCO@praveen0.tdxfh.mongodb.net/gokul_db"; //page_builder
const mongoUri = "mongodb+srv://gokul:bMb3k7VQ9h2MQx2i@react-node-project.p6el0vs.mongodb.net/gokul_db";

mongoose.connect(
  mongoUri,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  },
);
app.use('/api/pages', pageRoute);
app.use('/api/templates', templateRoute);
app.use('/api/assets', assetRoute);
app.use('/api/user', userRoute);
app.use('/api/', fileRoute);

app.get('*', (req, res) => {
  const pathToIndex = path.join(__dirname, "build", "index.html");
  return res.sendFile(pathToIndex);
});

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
