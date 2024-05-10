import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Zoomin = (props) => {
    Aos.init();
    // console.log(props.content)
    return (
        <div data-aos="zoom-in" className='zoom-in'>
            <h1>{props.heading}</h1>
            <div>
                {props.content.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default Zoomin;