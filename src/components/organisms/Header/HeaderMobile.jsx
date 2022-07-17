import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDehaze } from "react-icons/md";
import { ROUTES } from "../../../routes";
import { HeaderSideMenu } from "./HeaderSideMenu";

export const HeaderMobile = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleClose = () => setShowSideMenu(false);

  return (
    <div className="block lg:hidden">
      <HeaderSideMenu
        show={showSideMenu}
        onClose={handleClose}
      />
      <div className="px-8 sm:px-10">
        <div className="flex items-center justify-between py-3 space-x-6">
          <Link
            to={ROUTES.HOME}
            onClick={handleClose}
          >
            <img
              className="w-40"
              src={require("@assets/images/logo/io-jakarta-logo.jpg")}
              alt="IO Extended Logo"
            />
          </Link>

          <button
            className="p-3 border-2 border-transparent transform translate-x-4 hover:border-gray-700 rounded-lg outline-none"
            onClick={() => setShowSideMenu(!showSideMenu)}
          >
            <MdDehaze size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
