import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { ButtonLink, Container } from "@components/atoms";
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
          <div className="space-y-5 bg-blue-300 px-6 py-16 md:px-12 md:py-24 rounded-lg border-2 border-gray-800">
            <h1 className="text-5xl md:text-7xl font-bold">Schedules.</h1>
            <p className="text-lg md:text-xl text-gray-800">
              Follow code demonstrations by our expert speakers on 3 different tracks. Check out the schedule below and
              don't forget to mark your calendar so that you don't miss out on any sessions.
            </p>
            <ButtonLink
              text="Click to reminder"
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220730T020000Z%2F20220730T093000Z&details=Google%20I%2FO%20connects%20developers%20worldwide%20for%20thoughtful%20discussions%2C%20hands-on%20learning%20with%20Google%20experts%2C%20and%20the%20first%20look%20at%20Google%E2%80%99s%20latest%20developer%20products.%20The%20magic%20of%20I%2FO%20doesn%E2%80%99t%20end%20after%20the%20main%20event.%20Local%20developers%20come%20together%20for%20I%2FO%20Extended%20events%20to%20discuss%20the%20latest%20new%20technologies%2C%20summarize%20content%2C%20host%20Q%26As%2C%20and%20meet%20other%20technology%20enthusiasts.%0A%0AIn%20Google%20I%2FO%20Extended%202022%20Jakarta%2C%20we%20will%20have%20discussions%20on%20a%20range%20of%20topics%3B%20such%20as%20What%27s%20new%20for%20Web%20Technologies%2C%20What%27s%20new%20for%20Android%2C%20Flutter%2C%20Cloud%2C%20Web%2C%20and%20Google%20Developer%20Startup%20Program%20from%20the%20experts%20in%20the%20field.&location=Indosat%20Ooredoo%20-%20Jl.%20Medan%20Merdeka%20Barat%20No.21%2C%20RT.2%2FRW.3%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%20Daerah%20Khusus%20Ibukota%20Jakarta%2C%2010110&text=Google%20I%2FO%20Extended%20Jakarta%202022"
              prefixIcon={<MdDateRange />}
            />
          </div>
        </Fade>

        <Agenda data={DATA_SCHEDULES.agenda} />
      </Container>
    </div>
  );
};
