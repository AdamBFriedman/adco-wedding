/* eslint-disable no-restricted-globals */
import "./App.css";
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurStory from "./Components/OurStory/OurStory";
import Bridesmaids from "./Components/Bridesmaids/Bridesmaids";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutUs />
      <Preloader />
      <OurStory />
      <Bridesmaids />
    </div>
  );
}

export default App;
