import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './steam.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
