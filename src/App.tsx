import React from 'react';
import './App.scss';
import WebSock from './components/WebSock';

class App extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <WebSock />
      </div>
    );
  }
}

export default App;
