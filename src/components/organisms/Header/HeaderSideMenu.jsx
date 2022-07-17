import { ButtonLink } from "@components/atoms";
import { CONSTANTS } from "@utils/constants";
import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ROUTES, HEADER_ROUTES } from "../../../routes";

export const HeaderSideMenu = ({ show, onClose }) => {
  return (
    <div>
      <div
        className={`transition-all fixed z-10 left-0 top-0 w-screen h-screen bg-black ${
          show ? "visible opacity-50" : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed left-0 top-0 h-screen w-72 bg-white z-10 shadow-md transition-all transform ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-10 py-14 border-b">
          <Link
            to={ROUTES.HOME}
            onClick={onClose}
          >
            <img
              className="w-64"
              src={require("../../../assets/images/logo/Logo-io.svg").default}
              alt="Google I/O Logo"
            />
          </Link>
        </div>

        <div className="flex flex-col">
          {HEADER_ROUTES.map((route) => (
            <NavLink
              key={route.path}
              className={({ isActive }) =>
                isActive ? "font-semibold p-5 text-gray-700" : "font-semibold p-5 text-gray-500 hover:text-gray-700"
              }
              to={route.path}
            >
              {route.title}
            </NavLink>
          ))}
        </div>

        <div className="absolute bottom-0 flex items-center space-x-3 justify-between w-full p-5">
          <ButtonLink
            className="w-full justify-between"
            href={CONSTANTS.REGISTRATION_LINK}
            text="Register"
            icon={<MdLaunch size={16} />}
          />
        </div>
      </div>
    </div>
  );
};
