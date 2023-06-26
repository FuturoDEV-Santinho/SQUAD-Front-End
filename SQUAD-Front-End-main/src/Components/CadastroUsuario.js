//CSS
import "./CadastroUsuario.css";

//REACT
import React, { useState } from "react";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
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

    try {
      const res = await fetch(
        "http://localhost:8080/usuarios/cadastro",
        requestOptions
      );
      const data = await res.json();
      if (data.status === 500) throw new Error(data.message);
      window.location.href = "/";
      alert("Cadastro realizado com sucesso");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="cadastroUsuario">
      <h1>Cadastro de Usuário</h1>

      <form className="cadastro-form" onSubmit={handleCadastro}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
