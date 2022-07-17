import { HELPERS } from "@utils/helpers";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SpeakerCard = ({ name, institution, topic, avatar_url, roles, social_media, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg border-2 hover:border-black px-3 ${className}`}
      {...props}
    >
      <div className="flex flex-col items-center py-6 space-y-6">
        <div>
          <img
            className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover"
            src={avatar_url}
            alt={name}
            onError={HELPERS.handleBrokenImage}
          />
        </div>
        <div className="w-full space-y-6 text-center">
          <div className="space-y-1">
            <h1 className="text-base sm:text-lg font-semibold text-gray-700">{name}</h1>
            {(roles || institution) && (
              <div className="text-gray-500 text-sm space-y-1">
                <div>{roles}</div>
                {institution && <div>{institution}</div>}
              </div>
            )}
          </div>
          {Object.keys(social_media).length > 0 && (
            <div className="flex justify-center text-gray-500">
              {Object.keys(social_media).map((socmed) => (
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
          )}
        </div>
      </div>
    </div>
  );
};
