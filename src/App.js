// Importing the necessary CSS files and components
import "./App.css";
import Navbar from "./components/Navbar.js";
import SliderGallery from "./components/SliderGallery.js";
import "./components/Navbar.css";

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
    </div>
  );
}

// Exporting the App component as the default export
export default App;
