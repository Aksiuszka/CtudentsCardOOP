import { PureComponent } from 'react';

export default function withAnimatedLabel(Component) {
  class WithAnimatedLabel extends PureComponent {
    state = {
      moveLabel: false,
      isInputFocused: false,
    };

    onFocus = () => {
      this.setState(state => ({
        ...state,
        isInputFocused: true,
      }));
    };

    onBlur = e => {
      this.props.handleformikblur(e);
      this.setState(state => ({
        ...state,
        isInputFocused: false,
      }));
    };

    componentDidUpdate(prevProps) {
      if (this.props.value === prevProps.value) return;
      if (this.props.value || this.state.isInputFocused) {
        this.setState(state => ({
          ...state,
          moveLabel: true,
        }));
      } else {
        this.setState(state => ({
          ...state,
          moveLabel: false,
        }));
      }
    }

    render() {
      return <Component {...{ ...this.props, onBlur: this.onBlur, onFocus: this.onFocus }} />;
    }
  }
  return WithAnimatedLabel;
}
