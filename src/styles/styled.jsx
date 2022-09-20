import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;
export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 53rem;
  height: 30rem;
  margin-top: 10rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.palette.primary.white};
  box-shadow: ${({ theme }) => theme.extend.boxShadowing.regular};
`;
export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  margin-inline: 1.5rem;
`;
export const Headline = styled.h1`
  width: 100%;
  padding: 2.4rem;
  color: ${({ theme }) => theme.palette.text.heading};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  & span {
    color: ${({ theme }) => theme.palette.primary.orange};
  }
`;