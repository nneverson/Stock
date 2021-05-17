import React, { useState, useEffect } from "react";

const Stocks = ({ stocks, match }) => {
  const [stock, setStock] = useState(
    stocks.find(x => x.symbol === match.params.symbol)
  );

  useEffect(() => {
    fetch(`https://cloud.iexapis.com/stable/stock/${stock.symbol}/quote?pk_4a1fea2ee185433f875847ba600af69d`)
      .then(res => res.json())
      .then(res => {
        setStock({
          name: res.companyName,
          symbol: res.symbol,
          lastPrice: res.lastPrice,
          high: res.high || "not found",
          low: res.low || "not found",
          open: res.open || "not found"
        });
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <p>stock name: {stock.name}</p>
      <p> Stock symbol: {stock.symbol}</p>
      <p>Last Price: {stock.lastPrice}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
};

export default Stocks;
