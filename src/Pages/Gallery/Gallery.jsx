import { useEffect, useState } from 'react';
import './Gallery.css';
import '../style.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className='container'>
      <h1>Photo</h1>
      <h1 className='nxline'>Gallery</h1>

      <div className="gallery-container">
        <div className="gallery">
          {photos.map(photo => (
            <div key={photo.id} className="photo-card">
              <img src={photo.src} alt={`Photo ${photo.id}`} className="photo" />
            </div>
          ))}
        </div>
        <div className="pagination">
          <div className="navBtn">
            <div className="n1 n1-color">0 1</div>
            <div className="n1">/</div>
            <div className="n1">05</div>

            <div className="nav-gallery">
              <button className="nav-button">&larr;</button>
              <button className="nav-button">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
