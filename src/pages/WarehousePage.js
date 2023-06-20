import React from 'react';
import CadastroArmazem from '../components/Warehouse/CadastroArmazem';
import ListaArmazens from '../components/Warehouse/ListaArmazens';
import EditarArmazem from '../components/Warehouse/EditarArmazem';



const WarehousePage = () => {
  // Lógica para cadastrar um novo armazém
  return (
    <div>
      <h1>Página de Cadastro de Armazém</h1>
   <CadastroArmazem/>
   <EditarArmazem/>
   <ListaArmazens/>

    </div>
  );
};

export default WarehousePage;
