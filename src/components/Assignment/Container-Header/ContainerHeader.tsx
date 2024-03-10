import React from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";

const ContainerHeader = () => {
  return (
    <div className="headerContainer">
      <div className="headerTitle">
        <Header label={"Todo List"} isContainerHeader />
      </div>
      <div className="headerButton">
        <Button label="Add Todo" />
      </div>
    </div>
  );
};
export default ContainerHeader;
