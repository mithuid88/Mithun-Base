import Templates from '../models/template.modal';

export const createTemplate = async (templateBody) => {
  const slug = templateBody.name.toLowerCase().split(' ').join('-');
  templateBody.slug = slug;
  const template = new Templates(templateBody);
  const templateResponse = await template.save();
  return templateResponse;
};

export const listTemplates = async (engagement, userId) => {
  const templates = await Templates.find({
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
  return templates;
};

export const saveTemplateContent = async (templateId, content) => {
  const pageUpdated = await Templates.findOneAndUpdate({ _id: templateId }, { content });
  return pageUpdated;
};

export const templateDetails = async (templateId) => {
  const template = await Templates.findOne({ _id: templateId });
  return template;
};

export const deleteTemplate = async (templateId) => {
  const templateUpdated = await Templates.findOneAndUpdate({ _id: templateId }, { deleted: true });
  return templateUpdated;
}