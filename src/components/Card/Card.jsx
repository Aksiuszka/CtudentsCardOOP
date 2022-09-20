import { Component } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import { StyledCard } from './styled';

class Card extends Component{

  state={
    isRotate: false,
  }
  handleRotation=()=>{
    this.setState({isRotate: !this.state.isRotate})   
  }


render(){
  return (
    <>
      <StyledCard rotate={this.state.isRotate}>
        <CardFront content={this.props.content} handleRotation={this.handleRotation} />
        <CardBack handleRotation={this.handleRotation} />
      </StyledCard>
    </>
  );
}}

export default Card;