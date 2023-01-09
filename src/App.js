import { Component } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import MyProvider from './Context/MyProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className='App'>
          <h1>Welcome to LMS</h1>
          <DataTable/>
        </div>
      </MyProvider>
    );
  }
}

export default App
