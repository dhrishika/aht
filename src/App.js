// Importing the necessary CSS files and components
import "./App.css";
import Navbar from "./components/Navbar.js";
import SliderGallery from "./components/SliderGallery.js";
import "./components/Navbar.css";
import Footer from "./components/Footer.js";

// Defining the main App component
function App() {
  return (
    <div className="App">
      {/* Rendering the Navbar component */}
      <Navbar />
      {/* Displaying the "Hello World" message */}
      Hello World
      {/* Rendering the SliderGallery component */}
      <SliderGallery />
      <Footer />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
