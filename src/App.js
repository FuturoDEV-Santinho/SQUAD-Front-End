import React, { useState } from 'react';
import './App.css';
import StockManagement from './components/StockManagement/StockManagement';
import CadastroArmazem from './components/Warehouse/CadastroArmazem';
import ListaArmazens from './components/Warehouse/ListaArmazens';
import EditarArmazem from './components/Warehouse/EditarArmazem';

function App() {
  const [armazens, setArmazens] = useState([]);
  const [editandoArmazem, setEditandoArmazem] = useState(null);

  const handleArmazemCadastrado = (novoArmazem) => {
    const id = armazens.length + 1;
    const armazemCadastrado = { id, ...novoArmazem };
    setArmazens([...armazens, armazemCadastrado]);
  };

  const handleEditar = (armazem) => {
    setEditandoArmazem(armazem);
  };

  const handleEditarConfirmado = (armazemEditado) => {
    const armazensAtualizados = armazens.map((armazem) => {
      if (armazem.id === armazemEditado.id) {
        return { ...armazem, ...armazemEditado };
      }
      return armazem;
    });
    setArmazens(armazensAtualizados);
    setEditandoArmazem(null);
  };

  const handleDesativar = (armazem) => {
    const produtosNoArmazem = false; // Verifique se há produtos alocados a este armazém
    if (!produtosNoArmazem) {
      const armazensAtualizados = armazens.filter((a) => a.id !== armazem.id);
      setArmazens(armazensAtualizados);
    }
  };

  return (
    <div>
      <header>
        <StockManagement/>
      </header>
      <div>
        <CadastroArmazem onArmazemCadastrado={handleArmazemCadastrado} />
        <hr />
        {editandoArmazem ? (
          <EditarArmazem armazem={editandoArmazem} onEditarConfirmado={handleEditarConfirmado} />
        ) : (
          <ListaArmazens
            armazens={armazens}
            onEditar={handleEditar}
            onDesativar={handleDesativar}
          />
        )}
      </div>
    </div>
  );
}

export default App;


/* import React from 'react';
import './App.css';


const App = () => {

  return (
    <div>
      
  
    </div>
  );
};

export default App; */
 

