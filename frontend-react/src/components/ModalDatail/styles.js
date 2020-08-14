import styled from 'styled-components';
import ReactModal from 'react-modal';
import { darken, lighten } from 'polished';

export const Modal = styled(ReactModal)`
  position: absolute;
  top: calc(50% - 200px);
  right: calc(50% - 150px);
  background: #fff;

  width: 300px;
  border-radius: 4px;
  border: 1px solid #2d4eca;

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 700px) {
    right: calc(50% - 300px);
    width: 600px;
  }

  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    margin-top: 4px;
  }

  span {
    font-size: 10px;
    color: ${lighten(0.1, '#2d4eca')};
    padding: 0 10px;
  }

  div {
    align-self: center;
  }

  button {
    margin: 5px;
    border: 0;
    background: #2d4eca;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    padding: 5px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#2d4eca')};
    }
  }
`;
