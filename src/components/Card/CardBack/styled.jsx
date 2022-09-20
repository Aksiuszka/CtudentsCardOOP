import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #333333;
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  background-color: #373737;
  transform: rotateY(180deg);
`;
export const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  & img {
    width: 100%;
    height: 100%;
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
