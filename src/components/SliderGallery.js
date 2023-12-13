// Importing necessary dependencies from React
import React, { useState } from "react";

// Define a functional component called SliderGallery
function SliderGallery({ images = [] }) {
  // Define a state variable to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define a function to handle the next image button click
  function handleNextImage() {
    // Update the current image index by incrementing it by 1
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  // Define a function to handle the previous image button click
  function handlePrevImage() {
    // Update the current image index by decrementing it by 1
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  // Replace all image files with the given URL
  const updatedImages = images.map(
    () =>
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbackground&psig=AOvVaw2MiMQvQgQ7uKfXiCTBLgXA&ust=1702518368081000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiYvqeli4MDFQAAAAAdAAAAABAD"
  );

  // Render the slider gallery component
  return (
    <div className="slider-gallery">
      {/* Display the current image */}
      <img src={updatedImages[currentImageIndex]} alt="Slider Image" />

      {/* Button to navigate to the previous image */}
      <button onClick={handlePrevImage}>Previous</button>

      {/* Button to navigate to the next image */}
      <button onClick={handleNextImage}>Next</button>
    </div>
  );
}

// Export the SliderGallery component as the default export
export default SliderGallery;
