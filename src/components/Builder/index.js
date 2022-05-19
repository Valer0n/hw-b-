import React from "react";
import "./Builder.css";

const Builder = (props) => (
  <>
    <div className="burger_builder">
      <h2>Burger price: ₴</h2>
      <button className="btn_checkout">Checkout</button>
      <div className="burger_image">
        <img
          src={require(`../../images/up-burger.png`)}
          alt="burger-up"
          width="400"
          height="165"
        />
        {props.items.map((item) => (
          <p>{item.name}</p>
        ))}
        <img
          src={require(`../../images/down-burger.png`)}
          alt="burger-down"
          width="400"
          height="50"
        />
      </div>
    </div>
  </>
);
export default Builder;
