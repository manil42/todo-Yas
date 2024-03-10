import React from "react";

type HeaderProps = {
  label: String;
  isContainerHeader?: Boolean;
};

const Header = ({ label, isContainerHeader }: HeaderProps) => {
  return (
    <header
      className={`header-component 
  ${isContainerHeader === true ? "header-container" : "false"}
   `}
    >
      {label}
    </header>
  );
};

export default Header;
