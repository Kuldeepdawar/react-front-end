import logo from "./logo.svg";
import "./App.css";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/tab-button/tab-test";

function App() {
  return (
    <div className="App">
      {/*  <LightDarkMode />*/}

      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* TabTest*/}
      <TabTest />
    </div>
  );
}

export default App;
