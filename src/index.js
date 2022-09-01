import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Services from './components/Services';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import AboutAdd from './components/abouts/About-add';
import SkillsAdd from './components/skills/Skills-add';
import ServiceAdd from './components/services/Service-add';
import ServiceView from './components/services/service-view';
import ServiceEdit from './components/services/Service-edit';
import SkillsView from './components/skills/Skills-view';
import SkillsEdit from './components/skills/Skills-edit';
import BlogsAdd from './components/blogs/Blogs-add';
import BlogsView from './components/blogs/Blogs-view';
import BlogsEdit from './components/blogs/Blogs-edit';
import SendsView from './components/sends/Sends-view';
import ProjectView from './components/project/Project-view';
import ProjectAdd from './components/project/Project-add';
import ProjectEdit from './components/project/Project-edit';
import AboutView from './components/abouts/About-view';
import AboutEdit from './components/abouts/About-edit';
import Login from './components/authentication/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container-fluid">
      <div className="row flex-nowrap">
  {
    console.log("i am here",window.location.pathname)
  }
        <Router>
          {
            (window.location.pathname!="/" && window.location.pathname!="/login") ?  <Sidebar /> : ""

          }
         
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Navigate replace to="/" />} />
            <Route path="/services" element={<Services />} />
            <Route path="/add-abouts" element={<AboutAdd />} />
            <Route path="/add-skills" element={<SkillsAdd />} />
            <Route path="/add-service" element={<ServiceAdd />} />
            <Route path="/view-services" element={<ServiceView />} />
            <Route path="/edit-services" element={<ServiceEdit/>} />
            <Route path="/view-skills" element={<SkillsView/>} />
            <Route path="/edit-skills" element={<SkillsEdit/>} />
            <Route path="/add-bolgs" element={<BlogsAdd/>} />
            <Route path="/view-blogs" element={<BlogsView/>} />
            <Route path="/edit-blogs" element={<BlogsEdit/>} />
            <Route path="/view-projects" element={<ProjectView/>} />
            <Route path="/add-projects" element={<ProjectAdd/>} />
            <Route path="/edit-projects" element={<ProjectEdit/>} />
            <Route path="/view-contacts" element={<SendsView/>} />
            <Route path="/view-abouts" element={<AboutView/>} />
            <Route path="/edit-abouts" element={<AboutEdit/>} />
            


          </Routes>
        </Router>
      </div>
    </div>

  </React.StrictMode>
);
