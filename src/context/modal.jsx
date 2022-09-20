import { createContext } from 'react';
import { Component } from 'react';

export const ModalContext = createContext();
export const ModalConsumer = ModalContext.Consumer;

export class ModalProvider extends Component {
  state = {
    content: null,
    show: false,
  };

  showModal = state => {
    this.setState({
      content: state,
      show: true,
    });
  };

  hideModal = () =>
    this.setState({
      content: null,
      show: false,
    });

  render() {
    return (
      <ModalContext.Provider
        value={{
          state: this.state,
          showModal: this.showModal,
          hideModal: this.hideModal,
        }}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}
