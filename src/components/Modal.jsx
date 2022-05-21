import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class CustomModal extends React.Component {
  state = {
    discount: 0,
    final: this.props.data.totalPrice,
  };

  calcualteFinalPrice = () => {
    let final = 0;

    final =
      this.props.data.totalPrice -
      (this.props.data.totalPrice * this.state.discount) / 100;

    this.setState({ final });
  };

  render() {
    console.log(this.state.discount);
    return (
      <Modal
        style={customStyles}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onShowHideModal}
      >
        <h2>Your order</h2>
        <div>
          <input
            type="number"
            value={this.state.discount}
            onChange={(e) => this.setState({ discount: e.target.value })}
          />
          <button onClick={this.calcualteFinalPrice}>Apply</button>
        </div>
        <div>{JSON.stringify(this.props.data)}</div>

        {/* {this.state.map((elem) => { // check filter and map
                        if (elem.quantity > 0) {
                            return (<p>{elem.ingredient}: {elem.quantity}</p>);
                        }
                        return undefined;
                    })} */}
        <h2>
          Final: <span>{this.state.final}</span>
        </h2>
        <button onClick={this.props.onShowHideModal}>close</button>
      </Modal>
    );
  }
}

export default CustomModal;
