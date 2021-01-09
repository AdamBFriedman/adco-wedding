/* eslint-disable no-restricted-globals */
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutUs />
    </div>
  );
}

export default App;
