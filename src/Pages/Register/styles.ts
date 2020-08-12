import styled from "styled-components";
import { FaDropbox } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  min-height: 70px;

  > h1 {
    display: flex;
    align-items: center;
    > span {
      margin-left: 10px;
      font-size: 30px;
      color: var(--color-blue);
    }
  }
  > button {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;

    font-size: 1em;
    text-transform: uppercase;
    color: var(--text-color);
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;
    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  height: 40px;
  width: 40px;
  fill: var(--color-blue);

  outline: none;
  background: none;
  cursor: pointer;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  height: 100vh;
  padding: 0 32px;
  margin: 0 auto;

  > .title {
    font-size: 30px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    margin-top: 20px;
    padding: 13px 18px;
    background-color: var(--color-white);
    border: 1px solid var(--color-border);
    font-size: 1em;
  }

  > button {
    margin-top: 20px;
    padding: 13px 18px;
    background-color: var(--color-blue);
    color: var(--color-white);
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      opacity: 0.87;
    }
  }
`;
