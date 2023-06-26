//CSS
import "../Styles/Login.css";

//REACT
import React, { useState } from "react";
import Menu from "./Menu";
import CadastroUsuario from "./CadastroUsuario";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = () => {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      `http://localhost:8080/usuarios/login?email=${email}&senha=${senha}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setMostrarMenu(true);
        } else {
          setMensagem("Credenciais inválidas. Por favor, tente novamente.");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleCadastrar = () => {
    setMostrarCadastro(true);
  };

  if (mostrarCadastro) {
    return <CadastroUsuario />;
  }

  if (mostrarMenu) {
    return <Menu />;
  }

  return (
    <div>
      <h2 className="login-titulo">DEV in Adotion</h2>

      <div className="login-menu">
        <h2 className="login-subtitulo">Login de Usuário</h2>
        <form className="login-formulario">
          <div>
            <label>Email:</label>
            <input
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              placeholder="Digite sua senha"
              type="password"
              value={senha}
              onChange={handleSenhaChange}
            />
          </div>
          <button
            className="login-btn-entrar"
            type="button"
            onClick={handleLogin}
          >
            Entrar
          </button>
          <button
            className="login-btn-cadastrar"
            type="button"
            onClick={handleCadastrar}
          >
            Cadastrar
          </button>
        </form>
        <p className="login-msg">{mensagem}</p>
      </div>
    </div>
  );
};

export default Login;
