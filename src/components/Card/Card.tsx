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
          <Paragraph label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, a. Voluptatem earum veniam pariatur minima ipsum expedita ullam. Quis, rerum!" />
        </div>
        <div className="card-button">
          <div className="main-btn-container">
            <div className="child-button">
              <Button label="Edit" isSuccess />
            </div>
            <div className="child-button">
              <Button label="Delete" isError />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
