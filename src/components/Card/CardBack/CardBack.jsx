import { Component } from 'react';
import Republika from '../../../assets/rpzabia.png';
import { Container, Logo, Button } from './styled';

class CardBack extends Component {
  render(){
  return (
    <Container>
      <Logo>
        <img src={Republika} alt="republika zabia" />
      </Logo>
      <Button onClick={this.props.handleRotation} type="button">
        Odwroc
      </Button>
    </Container>
  );
}}

export default CardBack;