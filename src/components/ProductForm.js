import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const initialProduct = {
    storage: '',
    productType: '',
    quantity: 0,
    animal: '',
    category: '',
  };

  const [product, setProduct] = useState(initialProduct);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct(product);
    setProduct(initialProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Produto</h2>
      <div>
        <label>
          Local de Armazenamento:
          <input
            type="text"
            name="storage"
            value={product.storage}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Tipo do Produto:
          <input
            type="text"
            name="productType"
            value={product.productType}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Quantidade:
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Animal:
          <input
            type="text"
            name="animal"
            value={product.animal}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Categoria:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ProductForm;