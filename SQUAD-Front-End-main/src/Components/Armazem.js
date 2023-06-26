import React, { useEffect, useState } from "react";
import "./Armazem.css";
import ArmazemEdicao from "./ArmazemEdicao";

const Armazem = () => {
  const [armazens, setArmazens] = useState([]);
  const [nome, setNome] = useState("");
  const [tipoAnimal, setTipoAnimal] = useState("");
  const [edicaoAtiva, setEdicaoAtiva] = useState(false);
  const [armazemEmEdicao, setArmazemEmEdicao] = useState(null);

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

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleTipoAnimalChange = (e) => {
    setTipoAnimal(e.target.value);
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

  const handleEditar = (id, armazem) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(armazem),
      redirect: "follow",
    };

    fetch(`http://localhost:8080/armazem/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Após a edição, atualiza a lista de armazéns
        fetchArmazens();
        cancelarEdicao();
      })
      .catch((error) => console.log("error", error));
  };

  const handleExcluir = (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:8080/armazem/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Após a exclusão, atualiza a lista de armazéns
        fetchArmazens();
      })
      .catch((error) => console.log("error", error));
  };

  const ativarEdicao = (id, nome, tipoAnimal) => {
    setEdicaoAtiva(true);
    setArmazemEmEdicao({ id, nome, tipoAnimal });
  };

  const cancelarEdicao = () => {
    setEdicaoAtiva(false);
    setArmazemEmEdicao(null);
  };

  return (
    <div className="armazem">
      {edicaoAtiva ? (
        <ArmazemEdicao
          id={armazemEmEdicao.id}
          nomeAtual={armazemEmEdicao.nome}
          tipoAnimalAtual={armazemEmEdicao.tipoAnimal}
          onEditar={handleEditar}
          onCancelar={cancelarEdicao}
        />
      ) : (
        <div>
          <div className="lista-de-armazens">
            <h1>Lista de Armazém</h1>
            {armazens.length > 0 ? (
              <ul>
                {armazens.map((armazem) => (
                  <li key={armazem.id}>
                    Nome: {armazem.nome}, Tipo de Animal: {armazem.tipoAnimal}
                    <button
                      onClick={() =>
                        ativarEdicao(
                          armazem.id,
                          armazem.nome,
                          armazem.tipoAnimal
                        )
                      }
                    >
                      Editar
                    </button>
                    <button onClick={() => handleExcluir(armazem.id)}>
                      Excluir
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum armazém cadastrado.</p>
            )}
          </div>
          <div className="cadastro-de-armazens">
            <h1>Cadastro de Armazém</h1>
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
        </div>
      )}
    </div>
  );
};

export default Armazem;
