import React,{useEffect,useState} from "react"
import axios  from "axios"
import {useNavigate} from "react-router-dom"

const BlogsView=()=>{

    const [blogs,setBlogs]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:4000/get-blogs").then((response)=>{

        setBlogs(response?.data?.blogData)
        });


    },[]);



    const handleSubmit=(id)=>{

        navigate('/edit-blogs',{state:{blogId:id}})
        console.log("idddddd",id)


    }

    
    return (
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
  {  blogs.map((e)=>{
        return <tr className="table-active">
        <th scope="row">{e?.date}</th>
        <td>{e?.title}</td>
        <td>{e?.description}</td>
        <td>
            { " " }
            <button type="button"
            className="btn btn-primary"
            onClick={()=>{
                handleSubmit(e?._id)

            }}
            > Edit</button>




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
    <tr className="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-secondary">
      <th scope="row">Secondary</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-success">
      <th scope="row">Success</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-danger">
      <th scope="row">Danger</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-warning">
      <th scope="row">Warning</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-info">
      <th scope="row">Info</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-light">
      <th scope="row">Light</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr className="table-dark">
      <th scope="row">Dark</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr> */}
  </tbody>
</table>


    )


}

export default BlogsView;