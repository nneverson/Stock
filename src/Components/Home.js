import React from 'react';
import { Route, Link, Redirect } from "react-router-dom";

const Home = ({stocks}) => {
    let stockDetails = stocks.map((item,index) => {
   return(
   <div key={index}>
      <Link to={'/stocks/' + item.symbol}> {item.symbol}</Link>{item.name} 
    </div>)})
        return <div>{stockDetails}</div>;
};

export default Home;