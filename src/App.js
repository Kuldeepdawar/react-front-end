import logo from "./logo.svg";
import "./App.css";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/tab-button/tab-test";
import ModalTest from "./components/custom-tab-popup/modal.test";
import Github from "./components/github-api";
import GithubUser from "./components/github-api";
import SearchAutoComplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";
import UseFtechTest from "./components/use-fetch/test";

function App() {
  return (
    <div className="App">
      {/*  <LightDarkMode />*/}

      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* TabTest*/}

      {/* <TabTest />*/}
      {/* showPopup*/}
      {/* <GithubUser /> />*/}
      {/*   <SearchAutoComplete />*/}
      {/*<TicTacToe />*/}
      <UseFtechTest />
    </div>
  );
}

export default App;
