import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ProjectEdit = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("sssss...", state);
  const [payload, setPayload] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:4000/get-projectById", state)
      .then((response) => {
        setPayload(response?.data?.projectData);
      });
  }, []);

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
    formData.append("_id", payload._id);
    formData.append("existingImage", payload.image);

    console.log("pay..", formData);

    axios
      .put("http://localhost:4000/update-project", formData, config)
      .then((response) => {
        if (response) {
          console.log("reord updated");
          navigate('/view-projects')
          setPayload({
            description: "",
            title: "",
            link: "",
            image: "",
          });
        } else {
          console.log("record not updated");
        }
      });
  };

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    console.log('e.target.files[0]....',e.target.files[0])
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
                defaultValue={payload?.title}
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
                defaultValue={payload?.description}
                rows="3"
                placeholder="Description"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Link</label>
              <input
                className="form-control"
                defaultValue={payload?.link}
                id="link"
                placeholder="Link"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Image</label>
              <img
                src={"http://localhost:4000/public/" + payload?.image}
                height="20%"
                width="50%"
              ></img>
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

export default ProjectEdit;
