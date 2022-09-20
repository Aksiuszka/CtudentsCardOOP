import { Component } from 'react';
import { InputBox } from './styled';

class Input extends Component {
  render() {
    return (
      <InputBox>
        <input {...this.props} />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </InputBox>
    );
  }
}

export default Input;
