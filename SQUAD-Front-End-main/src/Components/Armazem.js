import React, { useEffect, useState } from "react";
import "./Armazem.css";

const Armazem = () => {
  const [armazens, setArmazens] = useState([]);
  const [nome, setNome] = useState("");
  const [tipoAnimal, setTipoAnimal] = useState("");

  useEffect(() => {
    fetchArmazens();
  }, []);

  const fetchArmazens = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/armazem", requestOptions)
      .then((response) => response.json())
      .then((result) => setArmazens(result))
      .catch((error) => console.log("error", error));
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleTipoAnimalChange = (event) => {
    setTipoAnimal(event.target.value);
  };

  const handleCadastro = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        tipoAnimal: tipoAnimal,
      }),
      redirect: "follow",
    };

    fetch("http://localhost:8080/armazem", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Após o cadastro, atualiza a lista de armazéns
        fetchArmazens();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="armazem">
      <h2>Armazéns Cadastrados</h2>
      {armazens.length > 0 ? (
        <ul>
          {armazens.map((armazem) => (
            <li key={armazem.id}>
              Nome: {armazem.nome}, Tipo de Animal: {armazem.tipoAnimal}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum armazém cadastrado.</p>
      )}

      <h2>Cadastrar Novo Armazém</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label>Tipo de Animal:</label>
          <select value={tipoAnimal} onChange={handleTipoAnimalChange}>
            <option value="">Selecione</option>
            <option value="GATO">GATO</option>
            <option value="CACHORRO">CACHORRO</option>
          </select>
        </div>
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Armazem;
