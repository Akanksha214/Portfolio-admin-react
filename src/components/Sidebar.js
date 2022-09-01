import { render } from "@testing-library/react"
import React from "react"
import {

    Link

} from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="#!" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">ADMIN</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link className="nav-link align-middle px-0" to="/dashboard">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <a href="#submenu01" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Services</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu01" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/view-services" className="nav-link px-0"> <span className="d-none d-sm-inline">View services</span> </Link>
                            </li>
                            <li>
                                <Link to="/add-service" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Services</span> </Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <a href="#submenu02" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Skills</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu02" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/view-skills" className="nav-link px-0"> <span className="d-none d-sm-inline">View skills</span> </Link>
                            </li>
                            <li>
                                <Link to="/add-skills" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Skills</span> </Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <a href="#submenu03" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Projects</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu03" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/view-projects" className="nav-link px-0"> <span className="d-none d-sm-inline">View projects</span> </Link>
                            </li>
                            <li>
                                <Link to="/add-projects" className="nav-link px-0"> <span className="d-none d-sm-inline">Add projects</span> </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#submenu04" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Blogs</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu04" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/view-blogs" className="nav-link px-0"> <span className="d-none d-sm-inline">View Blogs</span> </Link>
                            </li>
                            <li>
                                <Link to="/add-bolgs" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Blogs</span> </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#submenu05" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Contact</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu05" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/view-contacts" className="nav-link px-0"> <span className="d-none d-sm-inline">View contacts</span> </Link>
                            </li>
                          
                        </ul>
                    </li>

                    <li>
                        <a href="#submenu06" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">About</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu06" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/view-abouts" className="nav-link px-0"> <span className="d-none d-sm-inline">View abouts</span> </Link>
                            </li>
                            <li>
                                <Link to="/add-abouts" className="nav-link px-0"> <span className="d-none d-sm-inline">Add abouts</span> </Link>
                            </li>
                        </ul>
                    </li>

                   
                   
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;