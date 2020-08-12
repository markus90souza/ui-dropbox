import styled from "styled-components";
import { FaDropbox } from "react-icons/fa";

export const Container = styled.section`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100vw; /* 100% */

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 50px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 70px;
    }
  }

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-secondary);
    --logo-color: var(--color-secondary);
  }

  &.dark {
    --bg-color: var(--color-black);
    --text-color: var(--color-white);
    --logo-color: var(--color-blue);
  }

  &.white {
    --bg-color: var(--color-white);
    --text-color: var(--color-black);
    --logo-color: var(--color-blue);
  }

  &.bege {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-black);
    --logo-color: var(--color-primary);
  }

  background-color: var(--bg-color);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  z-index: 3;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;

  max-width: var(--desktop);
  margin: 0 auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 30px;
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

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 40px;
  height: 40px;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: var(--desktop);
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--text-color);
    max-width: var(--content-width);
  }

  > p {
    margin-top: 20px;
    font-size: 1em;
    color: var(--color-white);
    max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom);
`;
