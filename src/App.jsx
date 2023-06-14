import React from 'react';
import './App.css';
import UserRegistrationForm from './components/UserRegistrationForm';
import UserLoginForm from './components/UserLoginForm';
import StockSummary from './components/StockSummary';
import StockList from './components/StockList';
import StockItem from './components/StockItem';
import ProductForm from './components/ProductForm';
import AddProductPage from './components/AddProductPage';
import WarehouseForm from './components/WarhouseForm';
import WarehouseEditForm from './components/WarHouseEditForm';

const App = () => {
  const totalAnimals = {
    cachorro: {
      filhotes: 10,
      adulto: 5,
    },
    gato: {
      filhotes: 8,
      adulto: 4,
    },
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <UserRegistrationForm />
      <h2>Login de Usuário</h2>
      <UserLoginForm/>
      <h3>Sumário Estoque</h3>
      <StockSummary totalAnimals={totalAnimals} />
      <StockList/>
      <StockItem/>
      <ProductForm/>
      <AddProductPage/>
      <WarehouseForm/>
      <WarehouseEditForm/>
     
      
    </div>
  );
};

export default App;





