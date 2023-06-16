/* 9 - Editar Armazém
Regras de negócio:
●	Para editar, o usuário poderá alterar apenas:
○	Nome
○	Armazém para produtos de qual tipo de animal:	
■	Gato
■	Cachorro


10 - Desativar Armazém
Regras de negócio:
●	Para editar, o usuário poderá desativar apenas se não houver nenhum produto alocado a este armazém.
 */

import React, { useState, useEffect } from 'react';

const WarehouseEditForm = ({ warehouse, onUpdateWarehouse, onDeactivateWarehouse, products }) => {
  const [name, setName] = useState('');
  const [animalType, setAnimalType] = useState('');

  useEffect(() => {
    // Define os valores iniciais dos campos com base nos dados do armazém existente
    setName(warehouse.name);
    setAnimalType(warehouse.animalType);
  }, [warehouse]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria um objeto com os dados atualizados do armazém
    const updatedWarehouse = {
      ...warehouse, // Mantém as outras propriedades do armazém inalteradas
      name,
      animalType,
    };

    // Chama a função de callback para atualizar o armazém
    onUpdateWarehouse(updatedWarehouse);
  };

  const handleDeactivate = () => {
    // Chama a função de callback para desativar o armazém
    onDeactivateWarehouse(warehouse.id);
  };

  const hasAllocatedProducts = products.some((product) => product.warehouseId === warehouse.id);

  return (
    <div>
      <h2>Editar Armazém</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="animalType">Armazém para produtos de qual tipo de animal:</label>
          <select
            id="animalType"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value="">Selecione um tipo de animal</option>
            <option value="Gato">Gato</option>
            <option value="Cachorro">Cachorro</option>
          </select>
        </div>
        <button type="submit">Salvar</button>
        {!hasAllocatedProducts && (
          <button type="button" onClick={handleDeactivate}>Desativar</button>
        )}
      </form>
    </div>
  );
};

export default WarehouseEditForm;
