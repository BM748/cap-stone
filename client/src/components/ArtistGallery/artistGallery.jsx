import React, { useState } from 'react';
import './gallery.css';

function ArtistGallery() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        setImages([...images, imageDataUrl]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="Main-Artist-GalleryContainer">
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {images.length > 0 && (
        <div className="slide-panel">
          <button className="prev" onClick={handlePrev}>
            Previous
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="gallery-image"
            style={{ width: '200px', height: 'auto' }}
            onClick={toggleModal}
          />
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="modal" onClick={toggleModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="modal-content"
          />
        </div>
      )}
    </div>
  );
}

export default ArtistGallery;
