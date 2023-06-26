//CSS
import "../Styles/Dashboard.css";

//REACT
import React, { useEffect, useState } from "react";

function formatApiResponse(responseData) {
  try {
    const data = JSON.parse(responseData);

    // Formatar os dados conforme necessário
    let formattedData = "";

    for (let animal in data) {
      formattedData += animal + ":";

      for (let faixaEtaria in data[animal]) {
        formattedData += ` ${faixaEtaria}:`;

        for (let item in data[animal][faixaEtaria]) {
          formattedData += ` ${item} (${data[animal][faixaEtaria][item]})`;
        }
      }
      formattedData += "; ";
    }

    return formattedData;
  } catch (error) {
    console.log("Error parsing API response:", error);
    return "Error: Invalid API response";
  }
}

const Dashboard = () => {
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:8080/animais/agruparTodos"
        );
        const result = await response.text();
        setResponseData(result);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

  const formattedResponse = formatApiResponse(responseData);

  return (
    <div className="Dashboard">
      <div className="lista-do-dashboard">
        <h1>Dashboard</h1>
        <p>{formattedResponse}</p>
      </div>
    </div>
  );
};

export default Dashboard;
