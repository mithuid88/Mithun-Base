import axios from "axios";
import { API_HOST } from "../../configs/api";

export const TYPES = {
  LIST_PAGE_REQUEST_SEND: "LIST_PAGE_REQUEST_SEND",
  LIST_PAGE_REQUEST_ERROR: "LIST_PAGE_REQUEST_ERROR",
  LIST_PAGE_REQUEST_SUCCESS: "LIST_PAGE_REQUEST_SUCCESS",

  CREATE_PAGE_REQUEST: "CREATE_PAGE_REQUEST",
  CREATE_PAGE_ERROR: "CREATE_PAGE_ERROR",
  CREATE_PAGE_SUCCESS: "CREATE_PAGE_SUCCESS",
  DELETE_PAGE: "DELETE_PAGE",

  LOAD_PAGE_DETAILS_SUCCESS: "LOAD_PAGE_DETAILS_SUCCESS",
  LOAD_PAGE_DETAILS_ERROR: "LOAD_PAGE_DETAILS_ERROR",

  CREATE_TEMPLATE_SUCCESS: "CREATE_TEMPLATE_SUCCESS",
  LIST_TEMPLATE_REQUEST_SUCCESS: "LIST_TEMPLATE_REQUEST_SUCCESS",
  DELETE_TEMPLATE: "DELETE_TEMPLATE"
};

export const pageLoad = () => async (dispatch) => {
  dispatch({ type: TYPES.LIST_PAGE_REQUEST_SEND });
  try {
    const { data } = await axios.get(`${API_HOST}pages/list`,
      { headers: { 'x-access-token': localStorage.getItem("token"), changeOrigin: true, } }
    );
    if (data.isSuccess) {
      dispatch({ type: TYPES.LIST_PAGE_REQUEST_SUCCESS, data: data.pages });
    } else {
      alert(data.msg);
      dispatch({ type: TYPES.LIST_PAGE_REQUEST_SUCCESS, data: [] });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: TYPES.LIST_PAGE_REQUEST_ERROR, error: error });
  }
};

export const createPage = (name) => async (dispatch) => {
  dispatch({ type: TYPES.CREATE_PAGE_REQUEST });
  try {
    const { data } = await axios.post(`${API_HOST}pages`,
      { name },
      { headers: { 'x-access-token': localStorage.getItem("token"), changeOrigin: true } }
    );
    if (data.isSuccess) {
      alert("Page is created");
      dispatch({ type: TYPES.CREATE_PAGE_SUCCESS, data: data.page });
    } else {
      alert("Failed to create page!");
      dispatch({ type: TYPES.CREATE_PAGE_ERROR });
    }
  } catch (error) {
    dispatch({ type: TYPES.CREATE_PAGE_ERROR, data: error });
  }
};

export const getPageDetails = (pageId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_HOST}pages/${pageId}`);
    dispatch({ type: TYPES.LOAD_PAGE_DETAILS_SUCCESS, data: response.data });
  } catch (error) {

  }
};

export const createTemplate = (name) => async (dispatch) => {
  dispatch({ type: TYPES.CREATE_PAGE_REQUEST });
  try {
    const { data } = await axios.post(`${API_HOST}templates`,
      { name },
      { headers: { 'x-access-token': localStorage.getItem("token"), changeOrigin: true } }
    );
    if (data.isSuccess) {
      alert("Template is created");
      dispatch({ type: TYPES.CREATE_TEMPLATE_SUCCESS, data: data.template });
    } else {
      alert("Template is not created!");
      dispatch({ type: TYPES.CREATE_PAGE_ERROR });
    }
  } catch (error) {
    dispatch({ type: TYPES.CREATE_PAGE_ERROR, data: error });
  }
};

export const templateLoad = () => async (dispatch) => {
  dispatch({ type: TYPES.LIST_PAGE_REQUEST_SEND });
  try {
    const { data } = await axios.get(`${API_HOST}templates/list`,
      { headers: { 'x-access-token': localStorage.getItem("token"), changeOrigin: true, } }
    );
    if (data.isSuccess) {
      dispatch({ type: TYPES.LIST_TEMPLATE_REQUEST_SUCCESS, data: data.templates });
    } else {
      alert(data.msg);
      dispatch({ type: TYPES.LIST_TEMPLATE_REQUEST_SUCCESS, data: [] });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: TYPES.LIST_PAGE_REQUEST_ERROR, error: error });
  }
};

export const deletePage = (_id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${API_HOST}pages/${_id}`);
    if (data.isSuccess) {
      dispatch({ type: TYPES.DELETE_PAGE, data: _id });
    }
  } catch (error) {
    // handle delete error
  }
};

export const deleteTemplate = (_id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${API_HOST}templates/${_id}`);
    if (data.isSuccess) {
      dispatch({ type: TYPES.DELETE_TEMPLATE, data: _id });
    }
  } catch (error) {
    // handle delete error
  }
};