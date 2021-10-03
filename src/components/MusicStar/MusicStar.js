import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import "./MusicStar.css"

const MusicStar = (props) => {
    //fontawesome icon
    const icon = <FontAwesomeIcon icon={faGuitar} />
    
    //using destructure 
    const{name,image,band,album,catagory,age,charge}=props.musicStar
    const {buttonEvent}=props

    const musician =props.musicStar
      
    return (
        <div className="music-star">
            <img src={image} alt="" />
            <h2 className="name">Name : {name}</h2>
            <h4>Band : {band}</h4>
            <h5>Popular Album : {album}</h5>
            <h5>Category: {catagory}</h5>
            <h5>Age : {age}</h5>
            <h5>Charge : {charge}TK</h5>

            <button className="add-btn" onClick={()=>buttonEvent(musician)}><b>Add For Concert{icon}</b></button>
        </div>
    );
};

export default MusicStar;

//------------------Thanks to you for your valuable time & support----------------