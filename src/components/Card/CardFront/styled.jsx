import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  inset: 0;
  background-color: #373737;
  backface-visibility: hidden;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
`;
export const DataContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 1.5rem;
  width: 100%;
  height: 100%;
`;
export const Headline = styled.h1`
  color: white;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  & span {
    color: ${({ theme }) => theme.palette.primary.green};
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 28rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.orange};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.primary.white};
  `;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & article {
    margin-top: 0.3rem;
    padding: 0.05rem;
    display: flex;
    justify-content: flex;
    align-items: flex;
    flex-wrap: wrap;
    color: white;
    font-size: small;
  }
`;