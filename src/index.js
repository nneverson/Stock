import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom"
import StockData from "./data/stock-data.json";
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <App StockData={StockData}/>
    
  </Router>,
  document.getElementById('root')
);


