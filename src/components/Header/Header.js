import React from 'react';
import "./Header.css"
import image from "../../img/rock.png"

const Header = () => {
    return (
        <div className="header">
            <img src={image} alt="" />
            <h1 className="description">Top Band Musicians in Bangladesh </h1>
            <h3>Total Budget : 15 million</h3>
        </div>
    );
};

export default Header;


//------------------Thanks to you for your valuable time & support----------------