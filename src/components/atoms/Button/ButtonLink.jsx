import React from "react";
import "./Button.css";

export function ButtonLink({ className, href, text, icon, ...props }) {
  return (
    <a
      className={`button ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <span className="tracking-wider">{text}</span>
      {icon && <span>{icon}</span>}
    </a>
  );
}
