import React, { useState, useEffect } from 'react';

const EditarArmazem = ({ armazem, onEditarConfirmado }) => {
  const [nome, setNome] = useState('');
  const [animal, setAnimal] = useState('');

  useEffect(() => {
    setNome(armazem.nome);
    setAnimal(armazem.animal);
  }, [armazem]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const handleEditarConfirmado = () => {
    const armazemEditado = { id: armazem.id, nome, animal };
    onEditarConfirmado(armazemEditado);
  };

  return (
    <div>
      <h2>Editar Armazém</h2>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
      </div>
      <div>
        <label htmlFor="animal">Armazém para produtos de qual tipo de animal:</label>
        <select id="animal" value={animal} onChange={handleAnimalChange}>
          <option value="">Selecione</option>
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
        </select>
      </div>
      <button onClick={handleEditarConfirmado}>Confirmar Edição</button>
    </div>
  );
};

export default EditarArmazem;

