import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ photos, openModal }) {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => (
        <ImageGalleryItem
          key={photo.id}
          photo={photo}
          openModal={() => openModal(photo.largeImageURL)}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
