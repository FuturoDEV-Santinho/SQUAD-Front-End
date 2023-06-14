import React from 'react';
import ProductForm from './ProductForm';

const AddProductPage = () => {
  const handleAddProduct = (product) => {
    // Aqui você pode fazer algo com os dados do produto, como enviá-los ao backend ou atualizar o estado do componente pai.
    console.log('Novo produto:', product);
  };

  return (
    <div>
      <h1>Página de Adição de Produto</h1>
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
