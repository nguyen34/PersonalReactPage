import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Alert = ({ children, onClose, color = "primary" }: AlertProps) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
