import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("app loaded");
  }, []);
  return <div>hello world</div>;
}

export default App;
