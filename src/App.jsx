import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Rating from "./components/rating/rating";
import Main from "./components/main/main";
import { useState } from "react";
import Steps from "./components/step/steps";
import Pricing from "./components/pricing/pricing";

function App() {
  const [cartArr, setCartArr] = useState([]);
  return (
    <>
      <Navbar cartArr={cartArr} />
      <Banner />
      <Rating />
      <Main cartArr={cartArr} setCartArr={setCartArr} />
      <Steps />
      <Pricing />
    </>
  );
}

export default App;
