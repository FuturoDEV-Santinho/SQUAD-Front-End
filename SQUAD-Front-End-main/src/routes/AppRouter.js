import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import StockManagementPage from '../pages/StockManagementPage';
import WarehousePage from '../pages/WarehousePage';
import CadastroProdutoPage from '../pages/CadastroProdutoPage';
import ListagemEstoquePage from '../pages/ListagemEstoquePage';

const AppRouter = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/armazem">Cadastro de Armazém</Link>
        </li>
        <li>
          <Link to="/produto">Cadastro de Produto</Link>
        </li>
        <li>
          <Link to="/estoque">Listagem do Estoque</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/armazem" element={<WarehousePage />} />
          <Route path="/produto" element={<CadastroProdutoPage />} />
          <Route path="/estoque" element={<ListagemEstoquePage />} />
          <Route path="/produto" element={<StockManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
