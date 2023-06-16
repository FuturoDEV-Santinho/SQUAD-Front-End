/* 5 - Editar produto do estoque
Regras de negócio:
●	O usuário só poderá editar:
○	Nome do produto
○	Quantidade
 */
import React, { useState } from 'react';

const StockItem = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(product?.name || '');
  const [editedQuantity, setEditedQuantity] = useState(product?.quantity || '');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Fazer a solicitação ao back-end para atualizar os dados do produto
    // As variáveis editedName e editedQuantity para obter os novos valores

    fetch(`/api/products/${product.id}`, {
      method: 'PUT', // ou 'PATCH' dependendo da sua API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: editedName,
        quantity: editedQuantity,
      }),
    })
      .then(response => {
        if (response.ok) {
          // Dados atualizados com sucesso
          setIsEditing(false);
          // Atualizar os dados do produto no estado ou recarregue a lista de produtos
        } else {
          // Trate o caso de erro na atualização dos dados
        }
      })
      .catch(error => {
        console.log(error);
        // Trate o caso de erro na requisição
      });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <label>
            Nome do produto:
            <input
              type="text"
              value={editedName}
              onChange={event => setEditedName(event.target.value)}
            />
          </label>
          <label>
            Quantidade:
            <input
              type="number"
              value={editedQuantity}
              onChange={event => setEditedQuantity(event.target.value)}
            />
          </label>
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <p>ID: {product?.id}</p>
          <p>Nome: {product?.name}</p>
          <p>Quantidade: {product?.quantity}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default StockItem; 
