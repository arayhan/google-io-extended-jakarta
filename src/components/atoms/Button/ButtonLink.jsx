import React from "react";

export function ButtonLink({ className, href, text, icon }) {
  return (
    <a
      className={`flex items-center space-x-3 border-2 rounded-lg border-gray-700 py-2 px-5 font-semibold hover:bg-gray-100 transition ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="tracking-wider">{text}</span>
      {icon && <span>{icon}</span>}
    </a>
  );
}
