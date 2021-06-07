import React from 'react'
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h2>Web development and website promotion</h2>
            <Typed 
            className="typed-text"
            strings={["Web design","web development","Facebook ADS SMM","Google ADS"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
    </div>
  )
}

export default Header
