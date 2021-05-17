import React, {useState} from 'react';
import './App.css';
import Stocks from "./Components/Stocks";
import About from "./Components/About"
import { Route, Link, Redirect } from "react-router-dom";
import Home from './Components/Home';



function App({StockData}) {
  const [data, setData] = useState(StockData);

    return <div>
        <nav>
          <Link to="/stocks">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Route path="/stocks" exact render={() => <Home stocks={data} />} />
          <Route path="/stocks/:symbol" render={symbols => <Stocks match={symbols.match} stocks={data} />} />
          <Route path="/" exact render={() => <Home stocks={data} />} />
          <Route path="/about" component={About} />
        </main>
      </div>;
}

export default App;

//completed with the guidance of my tutor Nariman