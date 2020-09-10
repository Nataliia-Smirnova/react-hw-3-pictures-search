import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress);
  }

  handleEscapePress = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.src} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}
