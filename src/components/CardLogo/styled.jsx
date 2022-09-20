import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 11rem;
  padding: 3rem;
  margin-left: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.white};
  & img {
    margin-top: -1.8rem;
    width: 3rem;
    z-index: 10000;
  }
  & div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    background: linear-gradient(to bottom, rgba(137, 255, 241, 0) 50%, #373737 100%);
    & h4 {
      z-index: 10000;
    }
  }
`;