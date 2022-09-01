import axios from "axios";
import React, { useEffect, useState } from  "react";
import {useNavigate} from "react-router-dom";

const SkillsView=()=>{

    const [skills,setSkills]=useState([]);
    const navigate = useNavigate();
    const [refersh,setRefersh]=useState(false)



    useEffect(()=>{
        axios.get("http://localhost:4000/get-skill").then((response)=>{

        setSkills(response?.data?.skillData);


        });


    },[refersh]);


    const handleSubmit =(id)=>{

        navigate('/edit-skills',{state:{skillId:id}})
        console.log("idddd..",id);

    }

    const handleDelete=(id)=>{

       const payload={
          "_id":id
        }

        axios.post("http://localhost:4000/delete-skill",payload).then((response)=>{

        console.log("rrrrr..",response)

        setRefersh(true)
        // setSkills(response?.data?.skillData);
        })
        // navigate('/delete-skills',{state:{skillId:id}})


    }
    return(
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Total Percentage</th>
      <th scope="col">Last Week Percentage</th>
      <th scope="col">  Last Month Percentage</th>
    </tr>
  </thead>
  <tbody>
  {  
    skills.map((e)=>{

        return  <tr class="table-active">
        <th scope="row">{e?.title}</th>
        <td>{e?.totalPercentage}</td>
        <td>{e?.lastWeekPercentage}</td>
        <td>{e?.lastMonthPercentage}</td>
        <td>
                { " " }
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
        <td>

        <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleDelete(e?._id);
                  }}
                >
                  Delete
                </button>


        </td>
      </tr>



    })
  
    
  
 }
    {/* <tr>
      <th scope="row">Default</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">Secondary</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-success">
      <th scope="row">Success</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">Danger</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">Warning</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-info">
      <th scope="row">Info</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-light">
      <th scope="row">Light</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-dark">
      <th scope="row">Dark</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr> */}
  </tbody>
</table>


    )


}

export default SkillsView;