import "./App.css";
import { darkTheme, lightTheme, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

const Tokens = require("./myTokenList.json");

// const CG_TOKEN_LIST = "https://tokens.coingecko.com/uniswap/all.json";

const myLightTheme = {
  ...lightTheme, // Extend the lightTheme
  accent: "#FF007A",
  primary: "#000000",
  secondary: "#565A69",
};

const myDarkTheme = {
  ...darkTheme, // Extend the darkTheme
  accent: "#9A00FF",
  primary: "#FFFFFF",
  secondary: "#888D9B",
};

let darkMode = true;

export default function App() {
  return (
    <div className="Uniswap-container">
      <div className="Uniswap">
        <SwapWidget width={360} theme={darkMode ? myDarkTheme : myLightTheme} tokenList={Tokens} />
      </div>
    </div>
  );
}
