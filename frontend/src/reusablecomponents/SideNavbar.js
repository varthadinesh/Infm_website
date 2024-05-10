import React, { useState }  from 'react';
import { Link} from "react-router-dom";

const SideNavbar = () => {
    const [showChilds, setShowChilds] = useState(0);

    const toggleChilds = (id) => {
        setShowChilds(id);
    };
    return (
        
        <>
            <div>
                <ul className="list-unstyled sidenavbardiv ps-4">
                    {/* Home section */}
                   <Link to="/" className="text-decoration-none fw-bold"> <li>Home</li></Link>
                   <hr/>
                   {/* About us section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center" onClick={()=>toggleChilds(1)}>
                            <Link to="/Aboutus" className="text-decoration-none fw-bold"><li>About Us</li></Link>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds===1 ? 'rotate-down rotate' : 'rotate-down'}`} style={{cursor:"pointer"}}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds===1 ? 'show' : ''}`}>
                            <Link to="/Vision" className="text-decoration-none "><li className="ps-5">Vision</li></Link>
                            <hr />
                            <Link to="/Mission" className="text-decoration-none "><li className="ps-5">Mission</li></Link>
                            <hr />
                        </div>
                    </div>
                    {/* Industries section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center" onClick={()=>toggleChilds(2)}>
                            <Link to="" className="text-decoration-none fw-bold"><li>Industries</li></Link>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds===2 ? 'rotate-down rotate' : 'rotate-down'}`} style={{cursor:"pointer"}}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds===2 ? 'show' : ''}`}>
                            <Link to="/Manufacturing-Automotive" className="text-decoration-none "><li className="ps-5">Manufacturing & Automotive</li></Link>
                            <hr />
                            <Link to="/Energy-Utilities" className="text-decoration-none "><li className="ps-5">Energy & Utilities</li></Link>
                            <hr />
                            <Link to="/Banking-Insurance-Services" className="text-decoration-none "><li className="ps-5">Banking & Insurance Services</li></Link>
                            <hr />
                            <Link to="/Healthcare-LifeSciences" className="text-decoration-none "><li className="ps-5">Healthcare & Life Sciences</li></Link>
                            <hr />
                            <Link to="/Media-Telecom" className="text-decoration-none "><li className="ps-5">Media & Telecom</li></Link>
                            <hr />
                            <Link to="/Airline-Travel-Logistics" className="text-decoration-none "><li className="ps-5">Airline / Travel / Logistics</li></Link>
                            <hr />
                            <Link to="/Consumer-Retail" className="text-decoration-none "><li className="ps-5">Consumer & Retail</li></Link>
                            <hr />
                        </div>
                    </div>

                   <Link to="/Careers" className="text-decoration-none fw-bold"> <li>Careers</li></Link>

                </ul>
            </div>       
        </>
    );
};

export default SideNavbar;
