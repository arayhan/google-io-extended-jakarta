import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdLocationOn, MdPeople } from "react-icons/md";
import { ButtonLink } from "@components/atoms";
import { CONSTANTS } from "@utils/constants";

export const About = () => {
  const TOPICS = [
    {
      name: "Android",
      icon: require("@assets/images/icons/android.svg").default,
      color: "bg-green-100",
      site: "https://developer.android.com/newsletter",
    },
    {
      name: "Flutter",
      icon: require("@assets/images/icons/flutter.svg").default,
      color: "bg-blue-100",
      site: "https://twitter.com/flutterdev",
    },
    {
      name: "Google Cloud",
      icon: require("@assets/images/icons/google-cloud.svg").default,
      color: "bg-red-100",
      site: "https://cloud.google.com/developers",
    },
    {
      name: "Web",
      icon: require("@assets/images/icons/web.svg").default,
      color: "bg-blue-100",
      site: "https://web.dev/newsletter/",
    },
    {
      name: "Firebase",
      icon: require("@assets/images/icons/firebase.svg").default,
      color: "bg-orange-100",
      site: "https://twitter.com/Firebase",
    },
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-display font-bold">Google I/O Extended 2022 Jakarta</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
          <div className="w-full space-y-10">
            <p className="font-semibold">
              Google I/O connects developers worldwide for thoughtful discussions, hands-on learning with Google
              experts, and the first look at Google’s latest developer products. The magic of I/O doesn’t end after the
              main event. Local developers come together for I/O Extended events to discuss the latest new technologies,
              summarize content, host Q&As, and meet other technology enthusiasts.
              <br />
              <br />
              In Google I/O Extended 2022 Jakarta, we will have discussions on a range of topics; such as What's new for
              Web Technologies, What's new for Android, Flutter, Cloud, Web, and Google Developer Startup Program from
              the experts in the field.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex justify-center">
                  <MdDateRange
                    className="w-9"
                    size={24}
                  />
                </div>
                <span className="text-base">Sat, Jul 30, 9:00 AM - 4:30 PM (WIB)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex justify-center">
                  <MdPeople
                    className="w-9"
                    size={24}
                  />
                </div>
                <span className="text-base">In-person</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center">
                  <MdLocationOn
                    className="w-9"
                    size={24}
                  />
                </div>
                <span className="text-base">
                  Indosat Ooredoo - Jl. Medan Merdeka Barat No.21, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta
                  Pusat Daerah Khusus Ibukota Jakarta, 10110
                  <a
                    className="text-blue-700 hover:text-blue-900 hover:underline ml-3"
                    href={CONSTANTS.GMAPS_LOCATION_LINK}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Map
                  </a>
                  <br />
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              <ButtonLink
                text="Register"
                className="w-full sm:w-5/6 md:w-auto justify-between"
                href={CONSTANTS.REGISTRATION_LINK}
                icon={<MdLaunch size={16} />}
              />
              <ButtonLink
                text="Learn More About Google I/O"
                className="w-full sm:w-5/6 md:w-auto justify-between"
                href={CONSTANTS.IO_OFFICIAL_SITE_LINK}
                icon={<MdLaunch size={16} />}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-lg overflow-hidden">
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=CZn5x9nSw9M"
                controls
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-display font-bold text-center">Occuring in the near future</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center rounded-lg p-6">
              <div className="text-5xl font-bold">10+</div>
              <div className="font-semibold">Speakers</div>
            </div>
            <div className="flex flex-col items-center rounded-lg p-6">
              <div className="text-5xl font-bold">4</div>
              <div className="font-semibold">Panels</div>
            </div>
            <div className="flex flex-col items-center rounded-lg p-6">
              <div className="text-5xl font-bold">
                <MdPeople />
              </div>
              <div className="font-semibold">In-person Event</div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {TOPICS.map((topic) => (
              <a
                href={topic.site}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center rounded-lg p-6 space-y-3 border-2 hover:border-gray-800"
              >
                <div className={`rounded-full p-6 bg-opacity-50 ${topic.color}`}>
                  <img
                    src={topic.icon}
                    alt=""
                  />
                </div>
                <div className="text-lg font-semibold">{topic.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
