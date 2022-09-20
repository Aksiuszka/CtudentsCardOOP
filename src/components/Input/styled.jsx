import styled from 'styled-components';

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 46%;
  padding: 0.9rem;
  margin-left: 1rem;
  & label {
    position: absolute;
    transform: ${({ translate, scale }) => `${translate} ${scale}`};
    transform-origin: top left;
    transition: transform 0.2s ease;
    color: gray;
    left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.base};
    padding-block-start: 0.2rem;
    &:focus-within {
      transform: translate(0, 0.12rem) scale(0.8);
    }
  }
  & input {
    padding: 1rem 0.7rem 0.7rem 0.7rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.primary.white};
    border: 2px solid lightgray;
    outline: none;
    color: gray;
    &:focus + label {
      color: gray;
      opacity: 1;
      transform: scale(0.55) translate3d(0, 0.5rem, 0);
    }
  }
`;