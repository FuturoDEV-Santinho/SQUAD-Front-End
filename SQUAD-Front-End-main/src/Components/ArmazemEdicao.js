//CSS

//REACT
import React, { useState } from "react";

const ArmazemEdicao = ({
  id,
  nomeAtual,
  tipoAnimalAtual,
  onEditar,
  onCancelar,
}) => {
  const [novoNome, setNovoNome] = useState(nomeAtual);
  const [novoTipoAnimal, setNovoTipoAnimal] = useState(tipoAnimalAtual);

  const handleNomeChange = (e) => {
    setNovoNome(e.target.value);
  };

  const handleTipoAnimalChange = (e) => {
    setNovoTipoAnimal(e.target.value);
  };

  const handleEditar = () => {
    const novoArmazem = {
      nome: novoNome,
      tipoAnimal: novoTipoAnimal,
    };

    onEditar(id, novoArmazem);
  };

  return (
    <div>
      <h2>Editar Armazém</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" value={novoNome} onChange={handleNomeChange} />
        </div>
        <div>
          <label>Tipo de Animal:</label>
          <select value={novoTipoAnimal} onChange={handleTipoAnimalChange}>
            <option value="">Selecione</option>
            <option value="GATO">GATO</option>
            <option value="CACHORRO">CACHORRO</option>
          </select>
        </div>
        <button type="button" onClick={handleEditar}>
          Editar
        </button>
        <button type="button" onClick={onCancelar}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default ArmazemEdicao;
