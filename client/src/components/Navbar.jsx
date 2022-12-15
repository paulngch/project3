import React from "react";
import { Link as NavLink, Link, useNavigate } from "react-router-dom";
import mainLogo from "../assets/CMYK-White-Red_Small_GeneralAssembly-Horizontal.png";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Log out");
    navigate("/logout");
  };

  return (
    <>
      <nav className="navbar">
        <a>
          <Link to="/">
            <img
              src={mainLogo}
              style={{ width: 500, height: "auto", backgroundColor: "black" }}
              alt="GENERAL ASSEMBLY"
            />
          </Link>
        </a>
        <h2>Classroom Display</h2>
        <a>
          <NavLink to="/">Home</NavLink>
        </a>
        {"    "}
        <a>
          <NavLink to="/courses">Courses</NavLink>
        </a>
        {"    "}
        <a>
          <NavLink to="/bookings">Bookings</NavLink>
        </a>
        {"    "}
        <a>
          <NavLink to="/display">Display</NavLink>
        </a>
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <br />
    </>
  );
}

export default Navbar;
