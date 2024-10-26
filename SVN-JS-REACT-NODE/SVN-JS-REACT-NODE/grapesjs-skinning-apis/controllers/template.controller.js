import {
  createTemplate,
  listTemplates,
  saveTemplateContent,
  templateDetails,
  deleteTemplate
} from "../services/template.services";

export const create = async (req, res) => {
  const templateBody = req.body;
  templateBody.user = req.user.userId;
  const template = await createTemplate(templateBody);
  return res.json({ isSuccess: true, template });
};

export const list = async (req, res) => {
  const { engagement, userId } = req.user;
  const templates = await listTemplates(engagement, userId);
  return res.json({ isSuccess: true, templates });
};

export const changeContent = async (req, res) => {
  const { templateId } = req.params;
  // update in database
  const templateContent = await saveTemplateContent(templateId, req.body);

  return res.json({ isSuccess: true, data: "Successfully updated!!" });
};

export const loadContent = async (req, res) => {
  const { templateId } = req.params;
  res.header('Content-Type', 'application/json');
  const template = await templateDetails(templateId);
  res.json(template.content);
};

export const deleteTemplateRecord = async (req, res) => {
  const { pageId } = req.params;
  const data = await deleteTemplate(pageId);
  res.json({ isSuccess: true, data });
};