/* 8 - Cadastro de Armazém
Regras de negócio:
●	Para cadastrar um novo produto em estoque, com os seguintes atributos:
○	ID:
■	Gerado automaticamente pelo sistema.
○	Nome
○	Armazém para produtos de qual tipo de animal:	
■	Gato
■	Cachorro */

import React, { useState } from 'react';

const WarehouseForm = ({ onAddWarehouse }) => {
  const [name, setName] = useState('');
  const [animalType, setAnimalType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria um objeto com os dados do armazém
    const warehouse = {
      id: generateId(), // Gere um ID automaticamente
      name,
      animalType,
    };

    // Chama a função de callback para adicionar o armazém
    onAddWarehouse(warehouse);

    // Limpa os campos do formulário após a submissão
    setName('');
    setAnimalType('');
  };

  const generateId = () => {
    // Lógica para gerar um ID único
    // Você pode usar uma biblioteca externa como 'uuid' ou
    // implementar sua própria lógica de geração de ID
    // por exemplo, utilizando um contador global ou um timestamp

    // Aqui, usaremos um valor aleatório de 1 a 10000
    return Math.floor(Math.random() * 10000) + 1;
  };

  return (
    <div>
      <h2>Cadastro de Armazém</h2>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default WarehouseForm;
