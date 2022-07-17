import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { Button, Container } from "@components/atoms";
import { Agenda } from "@components/organisms";
import { DATA_SCHEDULES } from "@data";
import { CONSTANTS } from "@utils/constants";
import { MdDateRange } from "react-icons/md";

export const Schedules = () => {
  return (
    <div>
      <Helmet>
        <title>{CONSTANTS.PAGE_TITLE} - Schedules</title>
      </Helmet>
      <Container className="space-y-24 mb-24">
        <Fade>
          <div className="space-y-5 bg-gray-200 px-6 py-16 md:px-12 md:py-24 rounded-lg border-2 border-gray-800">
            <h1 className="text-5xl md:text-7xl font-bold">Schedules.</h1>
            <p className="text-lg md:text-xl text-gray-800">
              Follow code demonstrations by our expert speakers on 3 different tracks. Check out the schedule below and
              don't forget to mark your calendar so that you don't miss out on any sessions.
            </p>
            <Button
              text="Click to reminder"
              prefixIcon={<MdDateRange />}
            />
          </div>
        </Fade>

        <Agenda data={DATA_SCHEDULES.agenda} />
      </Container>
    </div>
  );
};
