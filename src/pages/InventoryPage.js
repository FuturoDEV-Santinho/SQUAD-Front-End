import React from 'react';
import ProductForm from '../components/Inventory/ProductForm';
import StockItem from '../components/Inventory/StockItem';
import StockItem from '../components/Inventory/StockList';
const InventoryPage = () => {
  // Lógica para buscar e exibir os dados do estoque
  return (
    <div>
      <h1>Página de Inventário</h1>
      <ProductForm/>
      <StockItem/>
      <StockList/>
    </div>
  );
};

export default InventoryPage;
