import React from 'react';
import './home.css';
import homeLogo from '../../assets/images/home.png';

const Home = () => {
  return (
    <>
        <div className='home__container'>      
        <img  src={homeLogo} alt='homeLogo' /> 
        
        </div>
    </>
  )
}

export default Home