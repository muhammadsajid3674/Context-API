import { Component } from 'react';
import './App.css';
import ProductList from './components/Product';

class App extends Component {

  state = {
    cars: {
      car001: { name: 'Honda', price: 100 },
      car002: { name: 'BMW', price: 150 },
      car003: { name: 'Mercedes', price: 200 }
    }
  };

  incrementCarPrice = this.incrementCarPrice.bind(this);
  decrementCarPrice = this.decrementCarPrice.bind(this);

  incrementCarPrice(selectedID) {
    // a simple method that manipulates the state
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price + 1;
    this.setState({
      cars
    });
  }

  decrementCarPrice(selectedID) {
    // a simple method that manipulates the state
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price - 1;
    this.setState({
        cars
    });
}
  render() {
    return (
      <div className='App'>
      <div>
        <h1>Welcome to web store</h1>
        <ProductList
          cars={this.state.cars}
          incrementCarPrice={this.incrementCarPrice}
          decrementCarPrice={this.decrementCarPrice}
        />
      </div>
    </div>
    );
  }
}

export default App
