import Children from "./Children";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [time, setTime] = React.useState(new Date());
  const [bool, setBool] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{time.toString()}</p>
      <button
        onClick={() => {
          setBool((bool) => !bool);
        }}
      >
        Toggle
      </button>
      {/* <Children second={1} /> */}
      {/* <Children second={bool ? 1 : 5} /> */}
      <Children second={bool} />
    </div>
  );
}

export default App;
