import Pages from '../models/page.modal';

export const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(' ').join('-');
  pageBody.slug = slug;
  const page = new Pages(pageBody);
  const pageResponse = await page.save();
  return pageResponse;
};

export const listPages = async (engagement, userId,isAdmin) => {
  if(isAdmin){
    const pages = await Pages.find({}).sort({ createdAt: "desc" });
    return pages;
  }
  else{
  const pages = await Pages.find({ 
    $and: [
      {  
        $or: [{
          engagement: engagement,
        }, {
          user: userId
        }],
        $or: [{
          user: { $exists: true }
        }, {
          user: userId
        }]
      }
    ]
  }).sort({ createdAt: "desc" });
  return pages;
  }
 
};

export const deletePage = async (pageId) => {
  const pageUpdated = await Pages.findOneAndUpdate({ _id: pageId }, { deleted: true });
  return pageUpdated;
};
export const updatePage = async (pageId, pageBody) => { };
export const pageDetails = async (pageId) => {
  const pages = await Pages.findOne({ _id: pageId });
  return pages;
};
export const savePageContent = async (pageId, content) => {
  const pageUpdated = await Pages.findOneAndUpdate({ _id: pageId }, { content });
  return pageUpdated;
};
export const findPageById = async (pageId) => {
  const page = await Pages.findById(pageId);
  return page;
};

export const updateFonts = async (pageId, font) => {
  const pageUpdated = await Pages.findOneAndUpdate({ _id: pageId }, { $push: { fonts: font } });
  return pageUpdated;
};