import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header";

import { createTemplate, deleteTemplate, templateLoad } from "../../redux/actions/pageAction";

const TemplateSetting = ({ engagement }) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { templates } = pageStore;

  useEffect(() => {
    templateLoad()(dispatch);
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

    const filteredTemplates = templates.filter(template => template.name === name);
    if (filteredTemplates.length === 0) {
      createTemplate(name, engagement)(dispatch);
      setName("");
    } else {
      alert("This template name is already exist, please try with different name!!");
    }
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      deleteTemplate(e.target.dataset.id)(dispatch);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <form id="create-page">
              <div className="modal-header mb-4">
                <h4 className="modal-title">Create Template</h4>
              </div>
              <div>
                <p><small className="text-info"><b>Note:</b> Image and fonts features are under development in template</small></p>
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
                    placeholder="Name of Template"
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
                  {templates.length
                    ? templates.map((page) => (
                      <tr key={page._id}>
                        <td>{page._id}</td>
                        <td>{page.engagement || "others"}</td>
                        <td>{page.name}</td>
                        <td>{page.slug}</td>
                        <td>
                          <Link to={`/templates/editor/${page._id}`}>Edit</Link> {" "} | {" "}
                          <Link to={`#`} data-id={`${page._id}`} onClick={deleteHandler}>Delete</Link>
                        </td>
                      </tr>
                    ))
                    : <tr><td>No Template found</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default TemplateSetting;