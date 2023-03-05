import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import './App.scss';








function App() {

  const Title = styled.h1`
    font-size: 1.5em !important;
    text-align: center !important;
    color: palevioletred !important;
  `;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title> Test </Title>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
