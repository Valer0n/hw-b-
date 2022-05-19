import React from 'react';
import './Controls.css'

const Controls = (props) => {

    return (
        <>
            <div className="burger_controls" onClick={(e) => {
                props.onHandleIngredientQuantity(e)
            }}>
                {props.ingredients.map((ingredient) => (
                    <div key={ingredient.name} className='burger_control_item'>
                        <button data-ingre={ingredient.name} data-action='remove' className='rmv_ingr'>-</button>
                        <span>{props.order[ingredient.name]}</span>
                        <button data-ingre={ingredient.name} data-action='add' className='add_ingr'>+</button>
                        <img src={require(`../../images/${ingredient.name}.png`)} alt={ingredient.name} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Controls;