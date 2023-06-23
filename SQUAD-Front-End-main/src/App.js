import React, { useState } from "react";
import Login from "./Components/Login";
import CadastroUsuario from "./Components/CadastroUsuario";

const App = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleRetornar = () => {
    setMostrarCadastro(false);
  };

  return (
    <div>
      {mostrarCadastro ? (
        <CadastroUsuario handleRetornar={handleRetornar} />
      ) : (
        <Login setMostrarCadastro={setMostrarCadastro} />
      )}
    </div>
  );
};

export default App;
