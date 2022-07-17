import React, { useEffect, useState } from "react";
import { DATA_SPEAKERS } from "@data";
import { SpeakerCard } from "@components/molecules";

export function Speakers({ featured }) {
  const [data, setData] = useState(DATA_SPEAKERS);

  useEffect(() => {
    if (featured) {
      const filteredData = DATA_SPEAKERS.filter((speaker) => speaker.featured_speaker === true);

      setData(filteredData);
    }
  }, [featured]);

  return (
    <div className="space-y-14">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {data.map((speaker) => (
          <SpeakerCard
            className="w-full"
            name={speaker.name}
            institution={speaker.institution}
            topic={speaker.topic}
            avatar_url={speaker.avatar_url}
            roles={speaker.roles}
            social_media={speaker.social_media}
          />
        ))}
      </div>
    </div>
  );
}
