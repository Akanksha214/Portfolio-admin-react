import React,{useState,useEffect} from "react";

const Login = () => {
    const initialPayload={
        username:"",
        password:"",

    };

    const [payload,setPayload]=useState(initialPayload);

    const handleInputChange=(e)=>{

        setPayload({...payload,
        [e.target.id]:e.target.value,
    });
    };
    const handleSubmit=()=>{
        console.log("pp",payload)

    }
  return (
    // JSX code for login form

    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <form>
          <fieldset>
            <legend style={{textAlign:"center"}}>LOGIN</legend>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                  onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleTextarea">password</label>
              <input
                className="form-control"
                id="password"
                rows="3"
                placeholder="password"
                  onChange={handleInputChange}
              />
            </div>
            <center>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                  handleSubmit(e);
              }}
            >
              Submit
            </button>


            </center>
            
          </fieldset>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};
export default Login;
