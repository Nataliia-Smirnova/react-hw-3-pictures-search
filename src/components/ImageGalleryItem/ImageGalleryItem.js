import React from 'react';
import styles from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ photo, openModal }) {
  return (
    <li className="ImageGalleryItem" onClick={openModal}>
      <img
        src={photo.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        // onClick={o}
      />
    </li>
  );
}

export default ImageGalleryItem;
