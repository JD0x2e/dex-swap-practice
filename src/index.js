import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
  apiKey: "jsjliSQRBijuieUHsWmfE2VEjHzh-hyJ",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
