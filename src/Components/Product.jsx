import React, {useState} from "react";


export default function Product(props) {
  return (
    <div className="game--card">
      <img className="game--image" src={props.product.imageurl} alt="game image" />
      <p>
        <button>Play Now</button>
      </p>
    </div>
  );
}