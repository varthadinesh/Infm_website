import React,{useState} from 'react';
import { Link} from "react-router-dom";
import InfoLogo from './Infologo';
import SideNavbar from './SideNavbar';

const Navigation = () => {
    const [isRotated, setIsRotated] = useState(false);
    const handleHover = () => {
        setIsRotated(!isRotated);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    {/* <span className='toggle' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-text-left"></i></span> */}
                    <span className='toggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-text-left"></i></span>
                    <InfoLogo/>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Aboutus">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="">INDUSTRIES</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Services">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="">SOLUTIONS</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Contact">CONTACT US</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/CSR">CSR</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Careers">CAREERS</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

                 {/* Offcanvas start */}
                <div className="offcanvas slide offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header d-flex justify-content-between">
                    <InfoLogo/>
                    <i
                    className={`bi bi-x-circle-fill fs-3 btnClose ${isRotated ? 'rotate' : ''}`}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                ></i>
                </div>
                <div className="offcanvas-body">
                    <SideNavbar/>
                </div>
                </div>
                {/* Offcanvas end */}
        </>
    );
};

export default Navigation;