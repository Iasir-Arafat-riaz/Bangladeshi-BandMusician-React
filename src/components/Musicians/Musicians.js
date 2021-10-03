import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import MusicStar from "../MusicStar/MusicStar";
import "./Musicians.css";

const Musicians = () => {
  //declare state
    const [musicians, setMusicians] = useState([]);
  
  //load data from json file
  useEffect(() => {
    fetch("./singers.json")
      .then((res) => res.json())
      .then((data) => setMusicians(data));
  }, []);

  //Add Button Event for Add For Concert Button
  const [cart,setCart]=useState([])
  const concertButtonEvent =(musician)=>{
     
      const updateCart = [...cart, musician]
      setCart(updateCart)
     
  }

  return (
    <div className="parent-div">
      <div className="single-musician">
        {musicians.map((musicStar) =>(
          <MusicStar 
          key={musicStar.id}
          musicStar={musicStar}
          buttonEvent={concertButtonEvent}/>
        ))}
      </div>
      <div>
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Musicians;


//------------------Thanks to you for your valuable time & support----------------
