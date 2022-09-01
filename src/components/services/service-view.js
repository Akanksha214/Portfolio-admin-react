import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ServiceView = () => {
  const [service, setService] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/get-service").then((response) => {
      setService(response?.data?.serviceData);
    });
  }, []);
  const handleSubmit = (id) => {
    // history.push(`http://localhost:3000/edit-services`, {
    //   data: { serviceId: id },
    // });
    navigate('/edit-services', { state: { serviceId:id }})

    console.log("aa", id);
  };
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {service.map((e) => {
          return (
            <tr className="table-active">
              <th scope="row">{e?.title}</th>
              <td>{e?.description}</td>
              <td>
                {" "}
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
export default ServiceView;
