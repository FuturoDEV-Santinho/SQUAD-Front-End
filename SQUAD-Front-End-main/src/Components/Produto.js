//CSS
import "./Produto.css";

//REACT
import React, { useEffect, useState } from "react";

const Produto = () => {
  const [data, setData] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [nomeArmazem, setNomeArmazem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [tipoAnimal, setTipoAnimal] = useState("");
  const [tipoProduto, setTipoProduto] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/produto/estoque");
      const result = await response.text();
      setData(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleNomeArmazemChange = (e) => {
    setNomeArmazem(e.target.value);
  };

  const handleQuantidadeChange = (e) => {
    setQuantidade(e.target.value);
  };

  const handleTipoAnimalChange = (e) => {
    setTipoAnimal(e.target.value);
  };

  const handleTipoProdutoChange = (e) => {
    setTipoProduto(e.target.value);
  };

  const handleCadastro = async () => {
    try {
      const requestBody = {
        categoria: categoria,
        nomeArmazem: nomeArmazem,
        quantidade: quantidade,
        tipoAnimal: tipoAnimal,
        tipoProduto: tipoProduto,
        armazem: {
          id: 1,
        },
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:8080/produto",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
      // Atualizar os dados do estoque após o cadastro
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="produto">
      <div className="lista-de-produto">
        <h1>Estoque de itens</h1>
        {data ? (
          <div>
            <pre>{data}</pre>
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>

      <div className="cadastro-de-produto">
        <h1>Adicionar Item no Estoque</h1>

        <form>
          <div>
            <label>Categoria:</label>
            <select value={categoria} onChange={handleCategoriaChange}>
              <option value="">Selecione</option>
              <option value="FILHOTE">Filhote</option>
              <option value="ADULTO">Adulto</option>
            </select>
          </div>

          <div>
            <label>Nome do Armazém:</label>
            <input
              type="text"
              value={nomeArmazem}
              onChange={handleNomeArmazemChange}
            />
          </div>

          <div>
            <label>Quantidade:</label>
            <input
              type="text"
              value={quantidade}
              onChange={handleQuantidadeChange}
            />
          </div>

          <div>
            <label>Tipo de Animal:</label>
            <select value={tipoAnimal} onChange={handleTipoAnimalChange}>
              <option value="">Selecione</option>
              <option value="GATO">Gato</option>
              <option value="CACHORRO">cachorro</option>
            </select>
          </div>

          <div>
            <label>Tipo de Produto:</label>
            <select value={tipoProduto} onChange={handleTipoProdutoChange}>
              <option>Selecione</option>
              <option>RACAO</option>
              <option>ANTIPULGAS</option>
              <option>ANTIPARASITARIO</option>
            </select>
          </div>

          <button type="button" onClick={handleCadastro}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Produto;
