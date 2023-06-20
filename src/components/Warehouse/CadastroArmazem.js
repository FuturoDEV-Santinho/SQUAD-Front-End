import React, { useState } from 'react';

const CadastroArmazem = ({ onArmazemCadastrado }) => {
  const [nome, setNome] = useState('');
  const [animal, setAnimal] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const handleCadastro = () => {
    const novoArmazem = { nome, animal };
    onArmazemCadastrado(novoArmazem);
    setNome('');
    setAnimal('');
  };

  return (
    <div>
      <h2>Cadastro de Armazém</h2>
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
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default CadastroArmazem;







