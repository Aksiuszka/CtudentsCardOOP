import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 3.5vh;
  left: 50%;
  transform: translateX(-50%);
  width: 38rem;
  height: 20rem;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  z-index: 10;
  perspective: 1000px;
  @media (min-height: 780px) {
    top: 39.5vh;
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;