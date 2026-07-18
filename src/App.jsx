import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Rating from "./components/rating/rating";
import Main from "./components/main/main";
import { useState } from "react";

function App() {
  const [cartArr, setCartArr] = useState([]);
  console.log(cartArr)
  return (
    <>
      {/* <Navbar />
      <Banner />
      <Rating /> */}
      <Main cartArr={cartArr} setCartArr={ setCartArr} />
    </>
  );
}

export default App;
