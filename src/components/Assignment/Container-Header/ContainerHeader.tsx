import React from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type containerHeaderProps = {
  label: string;
  labelBtn: string;
  handleback?: () => void;
};
const ContainerHeader = ({
  handleback,
  label,
  labelBtn,
}: containerHeaderProps) => {
  return (
    <div className="headerContainer">
      <div className="headerTitle">
        <Header label={label} isContainerHeader />
      </div>
      <div className="headerButton">
        <Button label={labelBtn} isBackbtn handleClick={handleback} />
      </div>
    </div>
  );
};
export default ContainerHeader;
