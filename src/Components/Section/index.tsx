import React from "react";

import ISection from "./../Contracts/ISection";

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
} from "./styles";

const Section: React.FC<ISection> = ({
  backgroudColor,
  title,
  description,
}) => {
  function handleToggle() {
    if (window.toggleActiveMenu) {
      window.toggleActiveMenu();
    }
  }

  return (
    <Container className={backgroudColor}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>Acessar</button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
