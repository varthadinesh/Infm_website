<<<<<<< Updated upstream
import React from 'react'

export default function Home(props) {
    const data = props.product;
    console.log(data);
  return (
    <div>
=======
import React from 'react';
import Navigation from '../../reusablecomponents/navbar';

const Home = () => {
    return (
        <div>
            <Navigation/>
        </div>
    );
};
>>>>>>> Stashed changes

    </div>
  )
}
