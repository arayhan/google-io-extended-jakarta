import Fade from "react-reveal/Fade";
import { Container } from "@components/atoms";
import { Helmet } from "react-helmet";
import { OrganizerCard } from "@components/molecules";
import { DATA_ORGANIZERS } from "@data";

export const Organizers = () => {
  return (
    <div>
      <Helmet>
        <title>GDG Devfest 2021 Jakarta - Organizers</title>
      </Helmet>
      <Container className="space-y-24 mb-24">
        <Fade>
          <div className="space-y-5 bg-gray-200 px-12 py-24 rounded-lg border-2 border-gray-800">
            <h1 className="text-7xl font-bold">Organizers.</h1>
            <p className="text-xl text-gray-800">
              Google I/O Extended Jakarta is a Jakarta community-driven conference, and administratively supported by
              GDG Jakarta. To make all this possible, an awesome team of volunteers is working behind the scenes.
            </p>
          </div>
        </Fade>

        <Fade>
          <div className="space-y-14">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {DATA_ORGANIZERS.map((organizer) => (
                <OrganizerCard
                  key={organizer.name}
                  className="w-full"
                  name={organizer.name}
                  avatar_url={organizer.avatar_url}
                  event_role={organizer.event_role}
                  professional_role={organizer.professional_role}
                  institution={organizer.institution}
                  social_media={organizer.social_media}
                />
              ))}
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  );
};
