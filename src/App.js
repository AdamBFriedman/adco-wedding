/* eslint-disable no-restricted-globals */
import "./App.css";
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurStory from "./Components/OurStory/OurStory";
import Bridesmaids from "./Components/Bridesmaids/Bridesmaids";
import Groomsmen from "./Components/Groomsmen/Groomsmen";
import Itinerary from "./Components/Itinerary/Itinerary";
import Travel from "./Components/Travel/Travel";
import Registry from "./Components/Registry/Registry";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutUs />
      <Preloader />
      <OurStory />
      <Bridesmaids />
      <Groomsmen />
      <Itinerary />
      <Travel />
      <Registry />
    </div>
  );
}

export default App;
