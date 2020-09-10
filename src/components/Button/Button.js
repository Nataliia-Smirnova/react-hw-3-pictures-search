import React from 'react';
import styles from './Button.module.css';

export default function Button({ fetchPhotos }) {
  return (
    <button className="Button" type="button" onClick={fetchPhotos}>
      Load more
    </button>
  );
}
