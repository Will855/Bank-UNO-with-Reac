import { BrowserRouter, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import React from "react";
import AnimationRoutes from "./AnimationRoutes";

export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <Nav title4={"Services"} title6={"Register"} />
        <AnimationRoutes />
      </BrowserRouter>
    </div>
  );
}

export function Nav({
  logoName,
  title1,
  title2,
  title3,
  title4,
  title5
}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link to={"/"} className="navbar-brand font-color">
            {logoName ? logoName : " "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
                <Link to={"/"} className="navbar-brand font-color">
                  {logoName ? logoName : "Logo"}
                </Link>
              </h5>
              <button
                className="btn"
                type="button"
                id="btnStyle"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <GrClose />
              </button>
            </div>
            <ul className="navbar-nav navbar-nav   offcanvas-body">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link font-color links"
                  aria-current="page"
                  href="#"
                >
                  {title1 ? title1 : "Home"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-color links"
                  href="#"
                  to={"/Features"}
                >
                  {title2 ? title2 : "Feature"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link font-color links"
                  href="#"
                  to={"/Team"}
                >
                  {title3 ? title3 : "Team"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-color links" to={"/Services"}>
                  {title4 ? title4 : "News"}
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link font-color links" href="#">
                  {title5 ? title5 : "About"}
                </Link>
              </li> */}
            </ul>
          </div>
          <form className="d-lg-flex d-none ms-auto" role="search">
            <button
              className="btn btn-outline-success rounded-5 px-3"
              id="buttonHeader"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mallingList"
              aria-controls="offcanvas"
            >
              Join Malling List <BsArrowRight className="ms-2" />
            </button>
          </form>
        </div>
      </nav>
      <OffCanvasLeft />
    </div>
  );
}

function OffCanvasLeft(params) {
  return (
    <div
      className="offcanvas offcanvas-start bg-dark"
      tabindex="-1"
      id="mallingList"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Offcanvas</h5>
        <button
          type="button"
          className="btn "
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <GrClose />
        </button>
      </div>
      <div className="offcanvas-body">
        <div>
          Algo de texto placeholder. En la vida real puedes tener los elementos
          que hayas elegido. Como texto, imágenes, listas, etc.
        </div>
      </div>
    </div>
  );
}
