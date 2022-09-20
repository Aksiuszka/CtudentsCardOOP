import styled from 'styled-components';

export const StyledCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.9s;
  transform-style: preserve-3d;
  transform: rotateY(0);
  ${({ rotate }) => rotate && `transform: rotateY(-180deg)`};
`;