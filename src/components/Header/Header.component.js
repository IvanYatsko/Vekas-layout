import { useResize } from "../../hooks/useResize";
import Burger from "../Burger/Burger.component";
import Navigation from "../Navigation/Navigation.component";

const Header = () => {
  const { isScreenLg, isScreenSm } = useResize();

  return (
    <header className="wrapper gap-[60px] sm:gap-0 flex justify-between items-center pt-[70px]">
      <a href="/">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      {isScreenLg && <Navigation />}
      <div className="flex items-center">
        <button className="bg-green rounded-[5px] sm:py-4 py-3 sm:px-8 px-4">
          {!isScreenSm ? (
            <img src="./images/mobile.svg" alt="mobile" />
          ) : (
            "Order a call"
          )}
        </button>
        {!isScreenLg && <Burger />}
      </div>
    </header>
  );
};

export default Header;
