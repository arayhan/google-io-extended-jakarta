import { HELPERS } from "@utils/helpers";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SpeakerCard = ({ name, institution, topic, avatar_url, roles, social_media, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg border-2 hover:border-black p-3 ${className}`}
      {...props}
    >
      <div className="flex flex-col items-center md:py-6 space-y-6">
        <div className="">
          <img
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            src={avatar_url}
            alt={name}
            onError={HELPERS.handleBrokenImage}
          />
        </div>
        <div className="w-full space-y-6 text-center">
          <div className="space-y-1">
            <h1 className="text-lg font-semibold text-gray-700">{name}</h1>
            <div className="text-gray-500 text-sm space-y-1">
              <div>{roles}</div>
              <div>{institution}</div>
            </div>
          </div>
          <div className="flex justify-center text-gray-500">
            {social_media &&
              Object.keys(social_media).map((socmed) => (
                <a
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
    </div>
  );
};
