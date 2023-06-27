//CSS
import "../Styles/Menu.css";
//REACT
import React, { useState } from "react";
import Armazem from "./Armazem";
import Produto from "./Produto";
import Dashboard from "./Dashboard";

const Menu = () => {
  const [activeComponent, setActiveComponent] = useState("armazem");

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "armazem":
        return <Armazem />;
      case "produto":
        return <Produto />;
      case "dashboard":
        return <Dashboard />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="menu-container">
        <ul className="menu-list">
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleClick("armazem")}
              disabled={activeComponent === "armazem"}
            >
              Armazém
            </button>
          </li>
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleClick("produto")}
              disabled={activeComponent === "produto"}
            >
              Produto
            </button>
          </li>
          <li className="menu-item">
            <button
              className="menu-button"
              onClick={() => handleClick("dashboard")}
              disabled={activeComponent === "dashboard"}
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>
      <div style={{ marginLeft: "150px" }}>{renderComponent()}</div>
    </div>
  );
};

export default Menu;
