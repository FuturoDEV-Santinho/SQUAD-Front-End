import React from 'react';

const ListaArmazens = ({ armazens, onEditar, onDesativar }) => {
  return (
    <div>
      <h2>Lista de Armazéns</h2>
      <ul>
        {armazens.map((armazem) => (
          <li key={armazem.id}>
            {armazem.nome} - {armazem.animal}
            <button onClick={() => onEditar(armazem)}>Editar</button>
            <button onClick={() => onDesativar(armazem)}>Desativar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaArmazens;

