import { Component } from 'react';
import { Container, DataContainer, Section, Button, GridContainer, Headline } from './styled';
import CardLogo from '../../CardLogo';
import InputModel from '../../../models/Input';

class CardFront extends Component {
  render() {
    return (
      <Container>
        <Section>
          <CardLogo />
          <DataContainer>
            <Headline>
              Dane <span>Studenta:</span>
            </Headline>
            <GridContainer>
              {Object.keys(this.props.content)
                .map(key => new InputModel({ key, value: this.props.content[key] }))
                .map(model => (
                  <article>
                    {model.label} : {model.value}
                  </article>
                ))}
            </GridContainer>
          </DataContainer>
        </Section>
        <Button onClick={this.props.handleRotation}>Odwroc</Button>
      </Container>
    );
  }
}

export default CardFront;
