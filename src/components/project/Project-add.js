import axios from "axios";
import React, { useState, useEffect } from "react";

const ProjectAdd = () => {
  const initialPayload = {
    image: "",
    title: "",
    description: "",
    link:""
  };

  const [payload, setPayload] = useState(initialPayload);
  const handleInputChange = (e) => {
    setPayload({
      ...payload,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("description", payload.description);
    formData.append("link", payload.link);
    formData.append("title", payload.title);
   

    console.log("pay..", formData);

    axios
      .post("http://localhost:4000/create-project", formData, config)
      .then((response) => {
        if (response) {
          console.log("reord insert");
          setPayload({
            description: "",
            title: "",
            link: "",

            image: "",
          });
        } else {
          console.log("record insert");
        }
      });
  };

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <form>
          <fieldset>
            <legend>My Project</legend>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input
                type="float"
                className="form-control"
                id="title"
                placeholder="Title"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleTextarea">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Description"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Link</label>
              <input
                className="form-control"
                id="link"
                placeholder="Link"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Image</label>
              <input
                className="form-control"
                type="file"
                id="image"
                onChange={handleChange}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div className="col-md-6"></div>
    </div>
  );
};

export default ProjectAdd;
