import Children from "./Children";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{time.toString()}</p>
        <Children second={1} />
      </header>
    </div>
  );
}

export default App;
