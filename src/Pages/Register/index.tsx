import React from "react";

import { Container, Navigation, DropboxLogo, Form } from "./styles";

const Register: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) {
      window.toggleActiveMenu();
    }
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button onClick={handleToggle} className="action--close">
          X
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o Formulario Abaixo</span>

        <input type="text" placeholder="Seu nome" />
        <input type="text" placeholder="Seu Sobrenome" />
        <input type="email" name="email" placeholder="seu@email.com" />
        <input type="password" name="password" placeholder="Sua Senha" />

        <button>Registrar</button>

        <span className="terms">
          Esta página esta sujeita á politica de privacidade e aos termos de
          serviço
        </span>
      </Form>
    </Container>
  );
};

export default Register;
