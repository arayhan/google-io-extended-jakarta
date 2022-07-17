import React from "react";
import "./Button.css";

export function ButtonLink({ className, href, text, icon }) {
  return (
    <a
      className={`button ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="tracking-wider">{text}</span>
      {icon && <span>{icon}</span>}
    </a>
  );
}
