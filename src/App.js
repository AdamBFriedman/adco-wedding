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
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

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
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
