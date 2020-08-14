import styled from 'styled-components';
import { darken } from 'polished';
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  position: absolute;
  top: calc(50% - 380px);
  right: calc(50% - 140px);
  background: #fff;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid #2d4eca;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    width: 300px;
    right: calc(50% - 170px);
  }

  @media (min-width: 700px) {
    width: 400px;
    right: calc(50% - 200px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 315px;
  text-align: center;
  padding-bottom: 20px;
  h1 {
    display: flex;
    align-self: center;
    color: #96989a;
    margin: 15px auto;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      width: 100%;
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid #2d4eca;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #5022b6;
      margin: 0 0 10px;

      &::placeholder {
        color: #2d4eca;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    select {
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid #2d4eca;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #2d4eca;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #2d4eca;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#2d4eca')};
      }
    }
  }
`;
