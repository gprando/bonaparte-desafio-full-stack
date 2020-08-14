import styled from 'styled-components';

export const Container = styled.div`
  height: 100vw;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2d4eca;
  border-radius: 0 0 0.8rem 0.8rem;

  h1 {
    margin: 3rem auto;
    font-size: 3rem;
    color: #fff;
  }

  div:last-child {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin: 0 30px;

    button {
      background: transparent;
      border: 0;
      color: #fff;
    }

    span {
      color: #fff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    border-radius: 0.4rem;
    border: 0;
    height: 4rem;
    flex: 1;

    &::placeholder {
      text-align: center;
      padding: 0 4px;
      color: #7085cf;
    }
  }

  @media (min-width: 500px) {
    input {
      width: 300px;
    }
  }

  @media (min-width: 700px) {
    input {
      width: 400px;
    }
  }

  button {
    background: #7085cf;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.3rem;
    margin-left: 1rem;
    border: 0;
    border-radius: 0.4rem;
    height: 4rem;

    &:hover {
      background: #d0daff;
      color: #666;
    }
  }
`;

export const Genres = styled.div`
  margin: 2.5rem 0;
  display: flex;

  span {
    cursor: pointer;
    background: #d0daff;
    height: 4rem;
    width: 7rem;
    border: 0;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    strong {
      display: block;
      color: #666;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 0 2px;
    }

    & + span {
      margin-left: 3rem;
    }

    &:hover {
      background: #7085cf;

      strong {
        color: #fff;
      }
    }
  }
`;

export const Main = styled.main`
  button {
    display: flex;
    width: 90%;
    max-width: 1200px;
    flex-direction: column;
    margin: 2rem auto;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.25);

    section {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 1.6rem;
      }

      & + aside {
        margin-top: 1rem;
        margin-bottom: 2rem;
      }

      span {
        color: #c50909;
        font-weight: bold;
      }
    }

    aside {
      border-bottom: 0.8px solid #d9d8dc;
      text-align: start;
    }
  }
`;
