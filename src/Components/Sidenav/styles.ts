import styled from "styled-components";

export const Container = styled.aside`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 100vw;

  background-color: var(--color-white);

  transform: translateX(100%);

  transition: 0.5s transform cubic-bezier(0.075, 0.82, 0.165, 1);

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 1024px) {
    width: calc(100vw / 3);
    box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.75);

    &.scrollOpen {
      transform: translateX(0);
    }

    &.scrollOpen .action--close {
      display: none;
    }
  }

  @media (min-width: var(--desktop)) {
    width: calc(480px * (100vw - var(--desktop) / 2));
  }
`;
