import React from 'react';
import './App.css';


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

      <h2>Login de Usuário</h2>
     
      <h3>Dashboard</h3>
      
      <h4>Lista de Estoque</h4>
     
      <h5>Editar Produto no Estoque</h5>
    
      <h6>Cadastro de Produto</h6>
    
      <h7>Armazém</h7>
     
     
      
    </div>
  );
};

export default App;



/* import React from 'react';
import './App.css';
import UserRegistrationForm from './components/UserRegistrationForm';
import UserLoginForm from './components/UserLoginForm';
import StockSummary from './components/StockSummary';
import StockList from './components/StockList';
import StockItem from './components/StockItem';
import ProductForm from './components/ProductForm';
import AddProductPage from './components/AddProductPage';
import WarehouseForm from './components/WarhouseForm';

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
      <h4>Lista de Estoque</h4>
      <StockList/>
      <h5>Editar Produto no Estoque</h5>
      <StockItem/>
      <h6>Cadastro de Produto</h6>
      <ProductForm/>
      <AddProductPage/>
      <h7>Armazém</h7>
      <WarehouseForm/>
     
      
    </div>
  );
};

export default App;
 */

