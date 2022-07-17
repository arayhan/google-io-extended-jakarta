import { HELPERS } from "@utils/helpers";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const OrganizerCard = ({
  name,
  event_role,
  professional_role,
  institution,
  avatar_url,
  social_media,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className="rounded-lg flex flex-col justify-between border-2 hover:border-black items-center px-3 py-6 space-y-6 h-full">
        <div className="">
          <img
            className="md:w-48 md:h-48 w-52 h-52 rounded-full object-cover"
            src={avatar_url}
            alt={name}
            onError={HELPERS.handleBrokenImage}
          />
        </div>
        <div className="text-center space-y-2">
          <div className="font-semibold text-gray-700">{name}</div>
          <div>
            <div className="text-gray-400 text-sm">{event_role}</div>
            {institution && <div className="text-gray-400 text-sm">@ {institution}</div>}
          </div>
        </div>
        <div className="flex justify-center text-gray-500">
          {social_media &&
            Object.keys(social_media).map((socmed) => (
              <a
                key={socmed}
                className="hover:text-blue-700 transition-all"
                href={social_media[socmed]}
                target="_blank"
                rel="noreferrer"
              >
                {socmed === "facebook" && <FaFacebook size={18} />}
                {socmed === "twitter" && <FaTwitter size={18} />}
                {socmed === "instagram" && <FaInstagram size={18} />}
                {socmed === "linkedin" && <FaLinkedin size={18} />}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
