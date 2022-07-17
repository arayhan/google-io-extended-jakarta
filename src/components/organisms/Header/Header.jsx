import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
    <header className="fixed z-20 top-0 left-0 w-full bg-white border-b-2 border-gray-800">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
};
