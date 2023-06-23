import React, { useEffect, useState } from "react";

const Produto = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/produto/estoque");
        const result = await response.text();
        setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Produto</h2>
      {data ? (
        <div>
          <p>Dados do estoque:</p>
          <pre>{data}</pre>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Produto;
