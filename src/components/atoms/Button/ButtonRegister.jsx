import React from "react";
import { MdLaunch } from "react-icons/md";

export function ButtonRegister() {
  return (
    <a
      className="flex items-center space-x-3 border-2 rounded-lg border-gray-700 py-2 px-5 font-semibold hover:bg-gray-100 transition"
      href="https://gdg.community.dev/events/details/google-gdg-jakarta-presents-google-io-extended-jakarta-2022/"
      target="_blank"
      rel="noreferrer"
    >
      <span className="tracking-wider">Register</span>
      <span>
        <MdLaunch size={16} />
      </span>
    </a>
  );
}
