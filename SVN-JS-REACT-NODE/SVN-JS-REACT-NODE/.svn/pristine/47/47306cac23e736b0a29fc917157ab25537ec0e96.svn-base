import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import TopNav from "../../components/TopNav";
import geditorConfig from "../../helpers/geditor/geditor_config";
// import PageSection from "../../components/PageSection";

import "./Editor.scss";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const { pageId, editType } = useParams();

  const { pageStore } = useSelector((state) => state);
  const { pages, templates } = pageStore;

  useEffect(() => {
    // update editor
    const ed = geditorConfig(templates, pageId, editType);
    setEditor(ed);

  }, [pageId, templates]);

  return (
    <div className="App">
      <div
        id="navbar"
        className="sidenav d-flex flex-column overflow-scroll position-fixed"
      >
        <nav className="navbar navbar-light my-3">
          <div className="container-fluid">
            <p className="text-center w-100"><Link to={"/"}><span className="navbar-brand mb-1 h3">IVA Builder</span></Link></p>
            <p className="mt-2 text-center w-100 text-info" id="page-name"></p>
          </div>
        </nav>

        {/* <PageSection pages={pages} /> */}
        <Sidebar />
      </div>
      <div
        className="main-content position-relative w-85 start-15"
        id="main-content"
      >
        <TopNav />
        <div id="gjs-editor"></div>
      </div>
      <div id="upload-font"></div>
      <div id="code-editor"></div>
    </div>
  );
};

export default Editor;
