//CSS
import "../Styles/Produto.css";

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
      const result = await response.json();
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

      if (response.ok) {
        console.log("Item cadastrado com sucesso.");
        // Atualizar os dados do estoque após o cadastro
        fetchData();
      } else {
        console.log("Erro ao cadastrar o item.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleExcluir = async (itemId) => {
    try {
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      const response = await fetch(
        `http://localhost:8080/produto/${itemId}/estoque`,
        requestOptions
      );

      if (response.ok) {
        console.log("Item excluído com sucesso.");
        // Atualizar os dados do estoque após a exclusão
        fetchData();
      } else {
        console.log("Erro ao excluir o item.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Estoque</h1>
        {data ? (
          <table>
            <thead>
              <tr>
                <th>Armazém</th>
                <th>Tipo de Animal</th>
                <th>Tipo de Produto</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Ações</th> {/* Coluna para o botão de exclusão */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.nomeArmazem}</td>
                  <td>{item.tipoAnimal}</td>
                  <td>{item.tipoProduto}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.categoria}</td>
                  <td>
                    <button onClick={() => handleExcluir(item.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum item cadastrado.</p>
        )}
      </div>

      <div>
        <h1>Cadastro de novo item</h1>
        <form>
          <div>
            <label>Categoria:</label>
            <input
              type="radio"
              name="categoria"
              value="FILHOTE"
              checked={categoria === "FILHOTE"}
              onChange={handleCategoriaChange}
            />{" "}
            Filhote
            <input
              type="radio"
              name="categoria"
              value="ADULTO"
              checked={categoria === "ADULTO"}
              onChange={handleCategoriaChange}
            />{" "}
            Adulto
          </div>

          <div>
            <label>Nome do Armazém:</label>
            <input
              type="text"
              placeholder="Informe o Armazém"
              value={nomeArmazem}
              onChange={handleNomeArmazemChange}
            />
          </div>

          <div>
            <label>Quantidade:</label>
            <input
              type="number"
              min="0"
              max="100"
              placeholder="Quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
            />
          </div>

          <div>
            <label>Tipo de Animal:</label>
            <input
              type="radio"
              name="tipoAnimal"
              value="GATO"
              checked={tipoAnimal === "GATO"}
              onChange={handleTipoAnimalChange}
            />{" "}
            Gato
            <input
              type="radio"
              name="tipoAnimal"
              value="CACHORRO"
              checked={tipoAnimal === "CACHORRO"}
              onChange={handleTipoAnimalChange}
            />{" "}
            Cachorro
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
