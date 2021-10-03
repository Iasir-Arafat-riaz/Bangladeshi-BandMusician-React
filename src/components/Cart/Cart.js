import React from 'react';
import "./Cart.css"


const Cart = (props) => {
    const{cart}=props
    
    //use array method reduce
    const reducer = (previous,current)=>previous+current.charge;
    const final = cart.reduce(reducer,0)
    
    return (
        <div className="cart">
            <h2>Total Selected : {cart.length}</h2>
            <h3>Selected Musician Below</h3>
            
                {
                    cart.map((selectedSinger,index)=><h4 key={index}>{selectedSinger.name}(Charge:  ৳{selectedSinger.charge})</h4>)
                }
            <h3 className="total-charge">Total Charge= ৳{final}</h3>
        </div>
    );
};

export default Cart;


//------------------Thanks to you for your valuable time & support----------------