import axios from "axios";
import React,{useState,useEffect} from "react";

const BlogsAdd=()=>{

    const initialPayload={
        date:"",
        title:"",
        description:"",
    };

    const [payload,setPayload]=useState(initialPayload);
    const handleInputChange =(e)=>{
        setPayload({
            ...payload,
            [e.target.id]:e.target.value,
        });
    };

    const  handleSubmit =(e) =>{
        e.preventDefault();

        axios.post("http://localhost:4000/create-blogs",payload).then((response)=>{
            if(response?.data)
            console.log("recored inserted...:)")
            setPayload({})



        })



    }


    return (

        
        <div className="row">
        <div className="col-md-6">
          <form>
            <fieldset>
              <legend>My Skills</legend>
  
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder="Date"
                  onChange={handleInputChange}
                />
              </div>
  
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



    )



}

export default BlogsAdd;