import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProjectView = () => {
  const [project, setProject] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/get-project").then((response) => {
      setProject(response?.data?.projectData);
    });
  }, []);

  const handleSubmit = (id) => {
    navigate("/edit-projects", { state: { projectId: id } });
    console.log("idddddd", id);
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        {project.map((e) => {
          return (
            <tr className="table-active">
              <th scope="row">{e?.title}</th>
              <td>{e?.description}</td>
              <td>{e?.link}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleSubmit(e?._id);
                  }}
                >
                
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProjectView;
