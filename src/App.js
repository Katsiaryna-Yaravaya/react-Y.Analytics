import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Main from './Main';
import './styles.css';

function App() {
    return (
        <div className={'wrapper'}>
          <div className={'wrap'}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          </div>
        </div>
    );
}

export default App;
