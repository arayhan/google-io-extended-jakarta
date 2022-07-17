import React from "react";
import "./Button.css";

export function ButtonLink({ className, href, text, icon, prefixIcon, ...props }) {
  return (
    <a
      className={`button ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {prefixIcon && <span>{prefixIcon}</span>}
      <span className="tracking-wider">{text}</span>
      {icon && <span>{icon}</span>}
    </a>
  );
}
