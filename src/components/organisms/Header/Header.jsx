import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
    <header className="fixed z-20 top-0 left-0 w-full bg-white shadow-md">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
};
