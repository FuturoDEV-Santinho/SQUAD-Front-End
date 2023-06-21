import React, { useState } from 'react';
import './App.css';
import StockManagement from './components/StockManagement/StockManagement';
import CadastroArmazem from './components/Warehouse/CadastroArmazem';
import ListaArmazens from './components/Warehouse/ListaArmazens';
import EditarArmazem from './components/Warehouse/EditarArmazem';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
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
    <Router>
      <div>
        <header>
          <StockManagement />
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/armazens">Lista de Armazéns</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro de Armazém</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route
            path="/armazens"
            element={
              <ListaArmazens
                armazens={armazens}
                onEditar={handleEditar}
                onDesativar={handleDesativar}
              />
            }
          />
          <Route
            path="/cadastro"
            element={<CadastroArmazem onArmazemCadastrado={handleArmazemCadastrado} />}
          />
        </Routes>
        <div>
          {editandoArmazem ? (
            <EditarArmazem
              armazem={editandoArmazem}
              onEditarConfirmado={handleEditarConfirmado}
            />
          ) : null}
        </div>
      </div>
    </Router>
  );
};

export default App;


