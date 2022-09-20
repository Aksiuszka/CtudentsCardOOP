import { Component } from 'react';
import Republika from '../../assets/rpzabia.png';
import { Container } from './styled';
class CardLogo extends Component {
  render(){
  return (
    <Container>
      <img src={Republika} alt="republika zabia" />
      <h4>REPUBLIKA</h4>
      <h4>ŻABIA</h4>
      <div></div>
    </Container>
  );
}
}

export default CardLogo;