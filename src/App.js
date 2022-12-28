import { Component } from 'react';
import './App.css';
import ProductList from './components/Product';
import MyProvider from './Context/MyProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className='App'>
          <h1>Welcome to web store</h1>
          <ProductList/>
        </div>
      </MyProvider>
    );
  }
}

export default App
