import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    rotate: 0deg;
    border-radius: 50%;
  }
  100% {
    border-radius: 0;
    rotate: 405deg;
}
`;

export const Circle = styled.div`
  height: 12px;
  width: 12px;
  background-color: #c7c7c7;
  border-radius: 50%;
  cursor: pointer;
`;

export const Diamond = styled.div`
  height: 12px;
  width: 12px;
  background-color: black;
  rotate: 45deg;
  animation: ${rotate} 1s;
  cursor: pointer;
`;
