import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SkillsAdd = () => {
    const navigate=useNavigate();
     const initialPayload={
        title: "",
        totalPercentage: "",
        lastWeekPercentage: "",
        lastMonthPercentage: "",
       
      }
    const [payload, setPayload] = useState(initialPayload);
    
      const handleInputChange = (e) => {
        setPayload({
          ...payload,
          [e.target.id]: e.target.value,
        });
      };


      const  handleSubmit=(e)=>{

        e.preventDefault();

        axios.post("http://localhost:4000/create-skill",payload).then((response)=>{

                if(response?.data){
                    console.log("record inserted.....:)")
                    navigate('/view-skills')


                    setPayload({}) 
                }


        })


      }

  return (
    <div className="row">
      <div className="col-md-6">
        <form>
          <fieldset>
            <legend>My Skills</legend>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Total Percentage</label>
              <input
                type="float"
                className="form-control"
                id="totalPercentage"
                placeholder="Total Percentage"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Last Week Percentage
              </label>
              <input
                type="float"
                className="form-control"
                id="lastWeekPercentage"
                placeholder="Last Week Percentage"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Last Month Percentage
              </label>
              <input
                type="float"
                className="form-control"
                id="lastMonthPercentage"
                placeholder="Last Month Percentage"
                onChange={handleInputChange}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={(e)=>{handleSubmit(e)}}
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
export default SkillsAdd;
