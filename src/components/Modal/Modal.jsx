import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, StyledBackdrop } from './styled';

class Modal extends Component {
  render() {
    
    return createPortal(
      <>
        <StyledBackdrop onClick={this.props.hideModal} />
        <ModalContainer>{this.props.children}</ModalContainer>
      </>,

      document.body
    );
  }
}

export default Modal;
