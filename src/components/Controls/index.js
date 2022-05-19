import React from "react";
import "./Controls.css";

const Controls = (props) => {
  return (
    <>
      <div className="burger_controls">
        {props.ingredients.map((ingredient) => (
          <div key={ingredient.name} className="burger_control_item">
            <button
              className="rmv_ingr"
              onClick={() => props.removeFromBuilder(ingredient)}
            >
              -
            </button>
            <span>3</span>
            <button
              onClick={() => props.addToBuilder(ingredient)}
              className="add_ingr"
            >
              +
            </button>
            <img
              src={require(`../../images/${ingredient.name}.png`)}
              alt={ingredient.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Controls;
