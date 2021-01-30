import React from 'react';
import './App.scss';
import store from './store';
import { Provider } from "react-redux";
import Home from './components/login-signup/index';
import Routes from './routes/routes';
import { BrowserRouter as Router} from 'react-router-dom';

export default class App extends React.Component {
  render(){
    return (
      <Provider store = { store }>
        {/* <Router forceRefresh={true}> */}
          {console.log('APP HERE')}
          <Routes/>
        {/* </Router> */}
      </Provider>
    );
  }
};

