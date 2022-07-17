import React from "react";
import { DATA_SPONSORS } from "@data/sponsors";

export function Sponsors() {
  return (
    <div>
      <div className="space-y-12">
        <h1 className="text-4xl font-bold">Supported By</h1>
        {DATA_SPONSORS.map((sponsor) => (
          <a
            href={sponsor.site}
            className="inline-block border-2 w-48 rounded-lg hover:border-gray-800 p-6"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-full"
              src={sponsor.logo}
              alt={sponsor.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
