import React from "react";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card-header">
          <Header label="Todo List" />
        </div>
        <div className="card-paragraph">
          <Paragraph label="working on react component" />
        </div>
        <div className="card-button">
          <Button label="Delete" isError />
        </div>
      </div>
    </div>
  );
};
export default Card;
