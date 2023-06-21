import React, { useState } from 'react';

const initialProduct = {
  id: '',
  armazenamento: '',
  produto: '',
  quantidade: 0,
  animal: '',
  categoria: ''
};

const StockManagement = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(initialProduct);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    // Gerar ID automaticamente (pode ser implementado com uma biblioteca UUID)
    const newProduct = { ...currentProduct, id: generateId() };
    setProducts([...products, newProduct]);
    setCurrentProduct(initialProduct);
  };

  const handleEditProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, ...updatedProduct };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditButtonClick = (product) => {
    setCurrentProduct(product);
  };

  const generateId = () => {
    // Implementação para gerar um ID único
    // Exemplo simples: utilizar um contador e incrementar a cada novo produto cadastrado
    return products.length + 1;
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Armazenamento:
          <select
            name="armazenamento"
            value={currentProduct.armazenamento}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione um armazenamento</option>
            <option value="Armazém A">Armazém A</option>
            <option value="Armazém B">Armazém B</option>
            <option value="Depósito Central">Depósito Central</option>
            <option value="Loja 1">Loja 1</option>
            <option value="Loja 2">Loja 2</option>
          </select>
        </label>
        <label>
          Produto:
          <select
            name="produto"
            value={currentProduct.produto}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione um produto</option>
            <option value="Ração">Ração</option>
            <option value="Antiparasitário">Antiparasitário</option>
            <option value="Antipulgas">Antipulgas</option>
          </select>
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            name="quantidade"
            value={currentProduct.quantidade}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Animal:
          <select
            name="animal"
            value={currentProduct.animal}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione um animal</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </label>
        <label>
          Categoria:
          <select
            name="categoria"
            value={currentProduct.categoria}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Filhote">Filhote</option>
            <option value="Adulto">Adulto</option>
          </select>
        </label>
        <button type="submit">Cadastrar Produto</button>
      </form>

      <h2>Listagem do Estoque</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Armazenado</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.armazenamento}</td>
              <td>{product.produto}</td>
              <td>{product.quantidade}</td>
              <td>{product.categoria}</td>
              <td>
                <button onClick={() => handleEditButtonClick(product)}>Editar</button>
                <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Editar Produto do Estoque</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleEditProduct(currentProduct.id, currentProduct);
          setCurrentProduct(initialProduct);
        }}
      >
        <label>
          Nome do Produto:
          <input
            type="text"
            name="produto"
            value={currentProduct.produto}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            name="quantidade"
            value={currentProduct.quantidade}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default StockManagement;
