import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

export function Button({ className, linkTo, onClick, text, prefixIcon, icon, ...props }) {
  const navigate = useNavigate();

  function handleLinkTo() {
    if (linkTo) navigate(linkTo);
  }

  return (
    <button
      className={`button ${className}`}
      onClick={linkTo ? handleLinkTo : onClick}
      {...props}
    >
      {prefixIcon && <span>{prefixIcon}</span>}
      <span className="tracking-wider">{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
}
