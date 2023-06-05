import React from "react";

interface ButtonProps {
  children: string;
  color?:
    | "secondary"
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "muted"
    | "white"
    | "black-50"
    | "white-50";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
