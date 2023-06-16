import React from 'react';
import WarHouseEditForm from '../components/Warehouse/WarHouseEditForm';
import WarehouseForm from '../components/Warehouse/WarhouseForm';



const WarehousePage = () => {
  // Lógica para cadastrar um novo armazém
  return (
    <div>
      <h1>Página de Cadastro de Armazém</h1>
   
      <WarHouseEditForm/>
      <WarHouseForm/>

    </div>
  );
};

export default WarehousePage;
