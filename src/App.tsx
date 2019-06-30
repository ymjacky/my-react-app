import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import MessageList from './components/MessageList';
import PalletList from './components/PalletList';

import logo from './logo.svg';
import './App.css';

function AppTop() {
  const { history, location, match } = useReactRouter();
  return (
    <div>
      <h1>HelloWorld</h1>
      <p>{`pathname: ${location.pathname}`}</p>
      <button onClick={() => history.push('/react')}>Next</button>


      <button onClick={() => history.push('/messageList')}>メッセージリスト</button>
      <button onClick={() => history.push('/palletList')}>パレットリスト</button>
    </div>
  );
}

function HelloReact() {
  const { history, location, match } = useReactRouter();
  return (
    <div>
      <h1>HelloReact</h1>
      <p>{`pathname: ${location.pathname}`}</p>
      <button onClick={() => history.push('/')}>Next</button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Excampe</h2>
        </div>
        <div className="App-intro">
          <Router>
            <Switch>
              <Route path="/" component={AppTop} exact />
              <Route path="/react" component={HelloReact} exact />
              <Route path="/messageList" component={MessageList} exact />
              <Route path="/palletList" component={PalletList} exact />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
