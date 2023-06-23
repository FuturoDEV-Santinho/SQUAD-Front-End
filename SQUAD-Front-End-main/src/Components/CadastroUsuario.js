import React, { useState } from "react";

const CadastroUsuario = ({ handleRetornar }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleCadastro = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
      }),
      redirect: "follow",
    };

    fetch("http://localhost:8080/usuarios/cadastro", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setMensagem(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleRetornarClick = () => {
    handleRetornar();
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={handleSenhaChange} />
        </div>
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
      <p>{mensagem}</p>
      {mensagem && (
        <button type="button" onClick={handleRetornarClick}>
          Retornar
        </button>
      )}
    </div>
  );
};

export default CadastroUsuario;
