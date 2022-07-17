import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdSchedule, MdLocationOn } from "react-icons/md";
import { Container } from "../../atoms/Container/Container";

export const About = () => {
  return (
    <div className="py-24">
      <Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
        <div className="w-full space-y-10">
          <div className="space-y-3">
            <h1 className="text-4xl font-display font-bold">Google I/O Extended 2022 Jakarta</h1>
          </div>

          <p className="font-semibold">
            Google I/O connects developers worldwide for thoughtful discussions, hands-on learning with Google experts,
            and the first look at Google’s latest developer products. The magic of I/O doesn’t end after the main event.
            Local developers come together for I/O Extended events to discuss the latest new technologies, summarize
            content, host Q&As, and meet other technology enthusiasts.
            <br />
            <br />
            In Google I/O Extended 2022 Jakarta, we will have discussions on a range of topics; such as What's new for
            Web Technologies, What's new for Android, Flutter, Cloud, Web, and Google Developer Startup Program from the
            experts in the field.
          </p>

          <div className="space-y-3">
            <div className="flex items-center text-gray-500 space-x-3">
              <div className="w-8 flex justify-center">
                <MdDateRange size={24} />
              </div>
              <span className="text-base">26 - 28 November 2021</span>
            </div>
            <div className="flex items-center text-gray-500 space-x-3">
              <div className="w-8 flex justify-center">
                <MdSchedule size={24} />
              </div>
              <span className="text-base">Friday 6.30 PM to 9.30 PM</span>
            </div>
            <div className="flex items-center text-gray-500 space-x-3">
              <div className="w-8 flex justify-center">
                <MdLocationOn size={24} />
              </div>
              <span className="text-base">
                Indosat Ooredoo - Jl. Medan Merdeka Barat No.21, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat
                Daerah Khusus Ibukota Jakarta, 10110
                <br />
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
            <a
              className="w-full md:w-auto bg-blue-700 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-white space-x-3 shadow-md transition-all hover:bg-blue-800 hover:px-8"
              href="https://gdg.community.dev/events/details/google-gdg-jakarta-presents-gdg-jakarta-devfest-2021/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="tracking-wider">Register</span>
              <span>
                <MdLaunch size={16} />
              </span>
            </a>
            <a
              className="w-full md:w-auto border-blue-700 border inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-blue-700 space-x-3 transition-all hover:bg-gray-50 hover:px-8"
              href="https://gdg.community.dev/devfest/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="tracking-wider">Learn More About DevFest</span>
              <span>
                <MdLaunch size={16} />
              </span>
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-md overflow-hidden">
            <ReactPlayer
              width="100%"
              url="https://www.youtube.com/watch?v=7BqKlQc6-Qc"
              controls
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
