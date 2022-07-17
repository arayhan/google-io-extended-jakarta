import { Link, NavLink } from "react-router-dom";
import { ROUTES, HEADER_ROUTES } from "../../../routes";
import { Container, ButtonRegister, ButtonLink } from "@components/atoms";
import { MdLaunch } from "react-icons/md";

export const HeaderDesktop = () => {
  return (
    <div className="hidden lg:block">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              className="flex items-center"
              to={ROUTES.HOME}
            >
              <img
                className="w-36"
                src={require("@assets/images/logo/Logo-io.svg").default}
                alt="Google I/O Logo"
              />
            </Link>

            <nav className="flex items-center justify-center">
              {HEADER_ROUTES.map((route) => (
                <NavLink
                  key={route.path}
                  exact
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold py-8 px-5 text-gray-700"
                      : "font-semibold py-8 px-5 text-gray-500 hover:text-gray-700"
                  }
                  to={route.path}
                >
                  {route.title}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <ButtonLink
              text="Register"
              icon={<MdLaunch size={16} />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
