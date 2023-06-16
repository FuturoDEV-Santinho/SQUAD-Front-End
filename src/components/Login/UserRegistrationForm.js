/* 1- Cadastro de usuário
Regras de negócio:
●	Criar operação lógica para realizar a inserção de dados para criar um objeto de usuário, de acordo com os campos do mockup (ver front-end);
●	Campo de e-mail - somente e-mails não cadastrados poderão criar um novo usuário.
 */

import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizar validação dos campos preenchidos
    if (formData.name === '' || formData.email === '' || formData.password === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Fazer solicitação ao back-end para verificar se o e-mail já está cadastrado
    try {
      const response = await fetch(`/api/check-email?email=${formData.email}`);
      const data = await response.json();

      if (data.isEmailRegistered) {
        alert('Este e-mail já está cadastrado. Por favor, utilize outro.');
        return;
      }

      // Se o e-mail não estiver cadastrado, prosseguir com o cadastro do usuário
      // ...
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao verificar o e-mail. Por favor, tente novamente.');
    }
  };

  return (
    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('label', null,
        'Nome:',
        React.createElement('input', {
          type: 'text',
          value: formData.name,
          onChange: (event) =>
            setFormData({ ...formData, name: event.target.value }),
        })
      ),
      React.createElement('br'),
      React.createElement('label', null,
        'E-mail:',
        React.createElement('input', {
          type: 'email',
          value: formData.email,
          onChange: (event) =>
            setFormData({ ...formData, email: event.target.value }),
        })
      ),
      React.createElement('br'),
      React.createElement('label', null,
        'Senha:',
        React.createElement('input', {
          type: 'password',
          value: formData.password,
          onChange: (event) =>
            setFormData({ ...formData, password: event.target.value }),
        })
      ),
      React.createElement('br'),
      React.createElement('button', { type: 'submit' }, 'Cadastrar')
    )
  );
};

export default UserRegistrationForm;

