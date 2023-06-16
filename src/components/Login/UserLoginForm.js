/* 2 -  Login de Usuário
Regras de negócio:
●	Para efetuar o login, deve se ter e-mail e senha corretos;
●	Caso não envie um dos campo, deve-se retornar uma mensagem de erro;
●	Na resposta da autenticação, retornar status de sucesso ou falha para o consumidor.
 */

import React, { useState } from 'react';

const UserLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar validação dos campos preenchidos
    if (formData.email === '' || formData.password === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Fazer solicitação ao back-end para autenticar o usuário
    // ...

    // Exemplo de resposta da autenticação
    const authenticationResponse = {
      success: true, // Altere para false em caso de falha na autenticação
      message: 'Login efetuado com sucesso.', // Mensagem de sucesso ou erro
    };

    // Verificar o status de sucesso ou falha na autenticação
    if (authenticationResponse.success) {
      alert(authenticationResponse.message);
      // Redirecionar para a página de sucesso ou executar ação necessária
    } else {
      alert(authenticationResponse.message);
      // Exibir mensagem de erro ou executar ação necessária
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input
          type="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
        />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default UserLoginForm;
