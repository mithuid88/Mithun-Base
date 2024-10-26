import path from "path";

import sizeOf from "buffer-image-size";

import { API_HOST } from "../configs/configs";


export const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
      height: 350,
      width: 250,
    },
    {
      src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
      height: 350,
      width: 250,
    },
    {
      src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
      height: 350,
      width: 250,
    },
  ];
  res.json(assets);
};

export const uploadAssets = (req, res) => {
  try {
    if (!req.files) {
      return res.json({ isSuccess: false, msg: "Failed to upload the asset" });
    }
    let ret = [];
    const { pageName } = req.params;
    var imageData=req.files.image;

    if(Array.isArray(imageData)){
      for(var imageValue in imageData){
        let image = imageData[imageValue];
        let packagePath, imagePath;

        const fileBuffer = image.data;
        var dimensions = sizeOf(fileBuffer);
        console.log(dimensions)

        packagePath = path.join(__dirname, "../web_pages", pageName, "images", image.name);
        image.mv(packagePath);
        imagePath = `${API_HOST}/api/images/${pageName}/${image.name}`;
        ret.push({ 
          src: imagePath,
          type: "image",
          width: dimensions.width,
          height: dimensions.height
        })
      }
    }
    else{
      let image = imageData;
      let packagePath, imagePath;

      const fileBuffer = image.data;
      var dimensions = sizeOf(fileBuffer);
      console.log(dimensions)

      packagePath = path.join(__dirname, "../web_pages", pageName, "images", image.name);
      image.mv(packagePath);
      imagePath = `${API_HOST}/api/images/${pageName}/${image.name}`;
      ret.push({ 
        src: imagePath,
        type: "image",
        width: dimensions.width,
        height: dimensions.height
      })
    }
    return res.json(ret);

  } catch (error) {
    console.log(error);
    return res.json({ isSuccess: true, msg: "Something went wrong, Please inform to admin!!" });
  }
}
