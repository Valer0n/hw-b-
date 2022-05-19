import React from 'react';
import { Footer, Header } from './components';
import { Burger } from './containers'
import './App.css';


const App = () => {
  const ingredients = [{ name: 'meat', price: 1.5 }, { name: 'chicken', price: 1.1 }, { name: 'bacon', price: 0.8 }, { name: 'cheese', price: 0.6 }, { name: 'salad', price: 0.4 }, { name: 'pickle', price: 0.3 }];
  return (
    <div className="App" >
      <Header />
      <Burger ingredients={ingredients} />
      <Footer />
    </div>
  )
}

export default App;
