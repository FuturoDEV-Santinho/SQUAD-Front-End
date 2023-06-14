/* 4 - Listagem do estoque
Regras de negócio:
●	Para listagem do estoque, deve-se apresentar:
○	ID
○	Armazenado
○	Produto
○	Quantidade
○	Categoria.
 */

import React, { useState, useEffect } from 'react';
import StockItem from './StockItem';

const StockList = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Faça a solicitação ao back-end para obter os dados do estoque
    fetch('/api/stock')
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(error => {
        console.error('Erro ao obter dados do estoque:', error);
      });
  }, []);

  const handleRemoveItem = (itemId) => {
    // Atualize a lista de produtos no estado após remover o item com o ID fornecido
    setStockData(prevStockData => prevStockData.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <h2>Lista de Produtos do Estoque</h2>
      {stockData.map(product => (
        <StockItem key={product.id} product={product} onRemove={handleRemoveItem} />
      ))}
    </div>
  );
};

export default StockList;
