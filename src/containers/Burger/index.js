import React from "react";
import { Prices, Controls, Builder } from "../../components";
import "./Burger.css";

class Burger extends React.Component {
  state = {
    items: [],
  };

  addToBuilder = (item) => {
    this.setState({
      items: [...this.state.items, item],
    });
  };

  removeFromBuilder = (item) => {
    this.setState({
      items: this.state.items.filter((i) => i.name !== item.name),
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <main className="main">
        <Prices ingredients={this.props.ingredients} />
        <Builder items={this.state.items} />
        <Controls
          addToBuilder={this.addToBuilder}
          removeFromBuilder={this.removeFromBuilder}
          ingredients={this.props.ingredients}
        />
      </main>
    );
  }
}

export default Burger;
