import { TYPES } from "../actions/pageAction";

const {
  LIST_PAGE_REQUEST_SEND,
  LIST_PAGE_REQUEST_ERROR,
  LIST_PAGE_REQUEST_SUCCESS,

  CREATE_PAGE_REQUEST,
  CREATE_PAGE_ERROR,
  CREATE_PAGE_SUCCESS,
  DELETE_PAGE,

  LOAD_PAGE_DETAILS_SUCCESS,

  CREATE_TEMPLATE_SUCCESS,
  LIST_TEMPLATE_REQUEST_SUCCESS,
  DELETE_TEMPLATE
} = TYPES;

const initialState = {
  listPageLoading: false,
  listPageError: "",
  pages: [],
  templates: [],
  createPageError: "",
  createPageLoading: false,
  slugName: "",
  pageName: ""
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PAGE_REQUEST_SEND:
      return { ...state, listPageLoading: true, listPageError: "" };
    case LIST_PAGE_REQUEST_ERROR:
      return { ...state, listPageLoading: false, listPageError: action.error };
    case LIST_PAGE_REQUEST_SUCCESS:
      return {
        ...state,
        listPageLoading: false,
        listPageError: "",
        pages: action.data,
      };

    case CREATE_PAGE_REQUEST:
      return { ...state, createPageError: "", createPageLoading: true };
    case CREATE_PAGE_ERROR:
      return {
        ...state,
        createPageError: action.data,
        createPageLoading: false,
      };
    case CREATE_PAGE_SUCCESS:
      return { ...state, createPageError: "", createPageLoading: false, pages: [action.data, ...state.pages] };

    case LOAD_PAGE_DETAILS_SUCCESS:
      return { ...state, slugName: action.data.slug, pageName: action.data.name };

    case CREATE_TEMPLATE_SUCCESS:
      return { ...state, createPageError: "", createPageLoading: false, templates: [action.data, ...state.templates] };

    case LIST_TEMPLATE_REQUEST_SUCCESS:
      return {
        ...state,
        listPageLoading: false,
        listPageError: "",
        templates: action.data,
      };
    case DELETE_PAGE:
      let pages = [...state.pages];

      return {
        ...state,
        pages: pages.filter(page => page._id !== action.data)
      };

    case DELETE_TEMPLATE:
      let templates = [...state.templates];

      return {
        ...state,
        templates: templates.filter(template => template._id !== action.data)
      };

    default:
      return state;
  }
};

export default pageReducer;
