import React from "react";
import { Prices, Controls, Builder } from '../../components';
import './Burger.css';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salad: 0,
            chicken: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
            pickle: 0,
            totalPrice: 1,
            isModalOpen: false,
        }
    }

    findIngredientPrice = (ingredient) => this.props.ingredients.find(element => element.name === ingredient).price


    onShowHideModal = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isModalOpen: !prevState.isModalOpen
            }
        });
    }

    onHandleIngredientQuantity = (e) => {
        e.preventDefault();
        if (e.target.dataset.action === undefined) { return }
        switch (e.target.dataset.action) {
            case 'remove':
                this.removeIngredient(e.target.dataset.ingre)
                break;
            default:
                this.addIngredient(e.target.dataset.ingre);
                break;
        }
    };

    addIngredient = (ingredient) => {
        if (
            this.state[ingredient] < 5
        ) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [ingredient]: prevState[ingredient] + 1,
                    totalPrice: prevState.totalPrice + this.findIngredientPrice(ingredient)
                }
            })
        }
    }

    removeIngredient = (ingredient) => {
        if (
            this.state[ingredient] > 0
        ) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [ingredient]: prevState[ingredient] - 1,
                    totalPrice: prevState.totalPrice - this.findIngredientPrice(ingredient)
                }
            })
        }
    }
    addInBurger = () => {
        let burger = [];

        for (let i = 0; i < this.state.meat; i++) {
            burger.push(<p key={burger} className='meat'></p>)
        }
        for (let i = 0; i < this.state.chicken; i++) {
            burger.push(<p key={burger} className='chicken'></p>)
        }
        for (let i = 0; i < this.state.salad; i++) {
            burger.push(<p key={burger} className='salad'></p>)
        }
        for (let i = 0; i < this.state.pickle; i++) {
            burger.push(<p key={burger} className='pickle'></p>)
        }
        for (let i = 0; i < this.state.cheese; i++) {
            burger.push(<p key={burger} className='cheese'></p>)
        }
        for (let i = 0; i < this.state.bacon; i++) {
            burger.push(<p key={burger} className='bacon'></p>)
        }
        return burger;
    }


    render() {

        return (
            <main className="main">
                <Prices ingredients={this.props.ingredients} />
                <Builder totalPrice={this.state.totalPrice} addInBurger={this.addInBurger} modalControl={this.onShowHideModal} />
                <Controls onHandleIngredientQuantity={this.onHandleIngredientQuantity} ingredients={this.props.ingredients} order={this.state} />
                <Modal
                    style={customStyles}
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.onShowHideModal}
                >
                    <h2>Your order</h2>
                    <button onClick={this.onShowHideModal}>close</button>
                    {/* {this.state.map((elem) => { // check filter and map
                        if (elem.quantity > 0) {
                            return (<p>{elem.ingredient}: {elem.quantity}</p>);
                        }
                        return undefined;
                    })} */}
                </Modal>
            </main>
        )
    }
}

export default Burger;