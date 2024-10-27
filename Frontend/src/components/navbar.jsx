import React from "react";
import "../components_style/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();
  const onLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const onDashboard = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/dashboard/show`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      if (json == null) {
        Swal.fire({
          icon: "warning",
          title: "Not Enough Data",
          text: "",
        });
      } else {
        navigate("/dashboard", { state: { data: json } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {localStorage.getItem("token") ? (
        <>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar_bg">
              <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                  MyQuiz
                </Link> 

                {/* Toggle-Btn */}
                <button
                  className="navbar-toggler shadow-none border-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* SideBar */}
                <div
                  className="sidebar offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  {/* Sidebar-Header */}
                  <div className="offcanvas-header text-white border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      beQuick
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white "
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* Sidebar-Body */}
                  <div className="offcanvas-body d-flex flex-column p-4 flex-lg-row p-lg-0">
                    <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3 menu">
                      <li className="nav-item mx-2">
                        <Link className="nav-link" aria-current="page" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <button className="nav-link" onClick={onDashboard}>
                          Dashboard
                        </button>
                      </li>
                    </ul>

                    {/* Profile */}
                    <div className=" d-flex flex-column flex-lg-row p-4 justify-content-center align-items-center gap-3 ">
                      <button
                        className="text-white text-decoration-none px-3 py-1 rounded-4"
                        id="signup"
                        onClick={onLogOut}
                      >
                        Log Out <i className="fa-solid fa-right-from-bracket"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </>
      ) : (
        <>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar_bg">
              <div className="container">
                {/* Logo */}
                <Link className="navbar-brand simple_home_brand" to="/">
                  MyQuiz
                </Link>

                {/* Toggle-Btn */}
                <button
                  class="navbar-toggler shadow-none border-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                {/* SideBar */}
                <div
                  class="sidebar offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  {/* Sidebar-Header */}
                  <div className="offcanvas-header text-white border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Myquiz
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-white "
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* Sidebar-Body */}
                  <div className="offcanvas-body d-flex flex-column p-4 flex-lg-row p-lg-0">
                    <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3 menu">
                      <li className="nav-item mx-2">
                        <Link className="nav-link" aria-current="page" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item mx-2">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>

                    {/* Login & Sign Up */}
                    <div className=" d-flex flex-column flex-lg-row p-4 justify-content-center align-items-center gap-3 ">
                      <Link className="text-white" to="/Login">
                        Login
                      </Link>
                      <Link
                        className="text-white text-decoration-none px-3 py-1 rounded-4"
                        id="signup"
                        to="/signup"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
