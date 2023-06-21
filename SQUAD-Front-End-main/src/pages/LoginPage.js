import React from 'react';
import StockSummary from '../components/Login/UserRegistrationForm';

const LoginPage = () => {
  // Lógica para autenticar o usuário com base no e-mail e senha
  return (
    <div>
      <h1>Página de Login</h1>
   
      <UserRegistrationForm/>
      <UserLoginForm/>

    </div>
  );
};

export default LoginPage;
