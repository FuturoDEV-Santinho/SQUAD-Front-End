/* 3 -  Visualizar informações no dashboard
Regras de negócio:
●	Deve-se retornar Kg de ração, antiparasitária, antipulgas e total de animais para os seguintes grupos:
○	Cachorro:
■	Filhotes
■	Adulto
○	Gato
■	Filhotes
■	Adulto
●	Obs. o total de animais é apenas uma variável onde a quantidade poderá ser alterada.  */

import React from 'react';

const StockSummary = ({ totalAnimals }) => {
  // Função para calcular os valores
  const calculateStockSummary = (totalAnimals) => {
    // Definir os valores de ração por Kg para cada grupo de animais
    const rations = {
      cachorro: {
        filhotes: 0.2, // Kg de ração por filhote de cachorro
        adulto: 0.3, // Kg de ração por cachorro adulto
      },
      gato: {
        filhotes: 0.1, // Kg de ração por filhote de gato
        adulto: 0.2, // Kg de ração por gato adulto
      },
    };

    // Calcular os valores
    const rationsCachorroFilhotes = rations.cachorro.filhotes * totalAnimals.cachorro.filhotes;
    const rationsCachorroAdulto = rations.cachorro.adulto * totalAnimals.cachorro.adulto;
    const rationsGatoFilhotes = rations.gato.filhotes * totalAnimals.gato.filhotes;
    const rationsGatoAdulto = rations.gato.adulto * totalAnimals.gato.adulto;

    const totalRations = rationsCachorroFilhotes + rationsCachorroAdulto + rationsGatoFilhotes + rationsGatoAdulto;

    // Retornar os valores
    return {
      rationsCachorroFilhotes,
      rationsCachorroAdulto,
      rationsGatoFilhotes,
      rationsGatoAdulto,
      totalRations,
    };
  };

  // Chamar a função para obter os valores
  const stockSummary = calculateStockSummary(totalAnimals);

  return (
    <div>
      <h2>Resumo do Estoque</h2>
      <p>Kg de ração para filhotes de cachorro: {stockSummary.rationsCachorroFilhotes}</p>
      <p>Kg de ração para cachorros adultos: {stockSummary.rationsCachorroAdulto}</p>
      <p>Kg de ração para filhotes de gato: {stockSummary.rationsGatoFilhotes}</p>
      <p>Kg de ração para gatos adultos: {stockSummary.rationsGatoAdulto}</p>
      <p>Total de Kg de ração: {stockSummary.totalRations}</p>
    </div>
  );
};

export default StockSummary; 
 