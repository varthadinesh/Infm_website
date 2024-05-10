import React from 'react';
import { Link} from "react-router-dom";

const InfoLogo = () => {
    return (
        <>
             <Link to="/">
                <img 
                src='https://infomericainc.com/Content/images/logo.png' 
                height="50px"  
                alt='Logo' 
                className='infmlogo'
                style={{backgroundColor:"white"}}
                >
                </img>
             </Link>
        </>
    );
};

export default InfoLogo;