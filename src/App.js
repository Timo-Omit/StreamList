import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';

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

function StreamList() {
  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>StreamList</h1>
      <input type="text" placeholder="Enter movie or show" onChange={handleInput} />
    </div>
  );
}
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">StreamList</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}



