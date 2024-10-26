import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";
import { pageLoad, createPage, deletePage } from "../../redux/actions/pageAction";

const PageSetting = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  const handleSubmit = async () => {
    let isValid = true;
    if (/^[a-z0-9- ]+$/i.test(name)) {
      setIsValid(true);
    } else {
      setIsValid(false);
      isValid = false;
    }

    if (!isValid) return;

    const filteredPages = pages.filter(page => page.name === name);
    if (filteredPages.length === 0) {
      createPage(name)(dispatch);
      setName("");
    } else {
      alert("This page name is already exist, please try with different name!!");
    }
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      deletePage(e.target.dataset.id)(dispatch);
    }
  };

  const cloneHandler = async (e) => {
    e.preventDefault();
    window.alert("Under development");
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <form id="create-page">
              <div className="modal-header mb-4">
                <h4 className="modal-title">Create Presentation</h4>
              </div>
              <div className="modal-body">

                <div className="col-auto">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-sm ${isValid ? "" : "is-invalid"
                      }`}
                    id="name"
                    name="name"
                    placeholder="Name of Page"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!isValid && (
                    <div className="invalid-feedback">
                      Please provide a valid name.
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                  onClick={() => setName("")}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </form>

            <hr />

            <div className="col-12 my-2">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Engagement</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pages
                    ? pages.map((page) => (
                      <tr key={page._id}>
                        <td>{page._id}</td>
                        <td>{page.engagement || "others"}</td>
                        <td>{page.name}</td>
                        <td>{page.slug}</td>
                        <td>
                          <Link to={`/pages/editor/${page._id}`}>Edit</Link> {" "} | {" "}
                          <Link to={`#`} data-id={`${page._id}`} onClick={deleteHandler}>Delete</Link> {" "} | {" "}
                          <Link to={`#`} data-id={`${page._id}`} onClick={cloneHandler}>Clone</Link>
                        </td>
                      </tr>
                    ))
                    : <tr><td>No Page found</td></tr>}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>



    </>
  )
};

export default PageSetting;