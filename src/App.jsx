import { Component } from 'react';
import { Wrapper, Container, SectionContainer, Headline } from './styles/styled';
import Navbar from './components/Navbar';
import Form from './components/Form/Form';
import Modal from './components/Modal/';
import Card from './components/Card';
import { ModalConsumer } from './context/modal';

class App extends Component {

  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Navbar />
            <SectionContainer>
              <Headline>
                Twoja <span>karta studenta</span>
              </Headline>
              <ModalConsumer>
                {value => (
                  <>
                    <Form showModal={value.showModal} />
                    {value.state.show && 
                    <Modal hideModal={value.hideModal} >
                      <Card content={value.state.content}/>
                    </Modal>}
                  </>
                )}
              </ModalConsumer>
            </SectionContainer>
          </Container>
        </Wrapper>
      </>
    );
  }
}
export default App;
