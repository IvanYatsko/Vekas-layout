import { useState } from "react";
import { useResize } from "../../hooks/useResize";
import Burger from "../Burger/Burger.component";
import Navigation from "../Navigation/Navigation.component";
import PhoneOrderForm from "./PhoneOrderForm.component";

const LIST_LINKS = [
  "Home",
  "About us",
  "Аchievements",
  "Industries",
  "Contact Us",
];

const Header = () => {
  const { isScreenLg } = useResize();
  const [openBurger, setOpenBurger] = useState(false);
  const [isOpenOrderCall, setIsOpenOrderCall] = useState(false);

  const changeValue = () => {
    if (isScreenLg) {
      setIsOpenOrderCall((prev) => !prev);
    }
  };

  const changeVisible = () => {
    setOpenBurger((prev) => !prev);
  };

  return (
    <header className="wrapper gap-[60px] sm:gap-0 flex justify-between items-center pt-[70px]">
      <a href="/">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      {isScreenLg && <Navigation />}
      <div className="flex items-center">
        <div className="relative">
          <button
            onClick={changeValue}
            className="bg-green hover:bg-[#16DB33] active:bg-[#16DB33] rounded-[5px] sm:py-4 py-3 sm:px-8 px-4"
          >
            {!isScreenLg ? (
              <img src="./images/mobile.svg" alt="mobile" />
            ) : (
              "Order a call"
            )}
          </button>
          <PhoneOrderForm
            isOpen={isOpenOrderCall}
            setIsOpen={setIsOpenOrderCall}
          />
        </div>
        {!isScreenLg && (
          <Burger changeVisible={changeVisible} open={openBurger} />
        )}
        <div
          className={`${
            openBurger ? "bg-opacity-70 " : "opacity-0 invisible "
          }w-screen h-screen fixed right-0 top-0 z-10 flex justify-end transition duration-300 bg-gray`}
        >
          <div className="mr-[30px] md:mr-[50px] mt-32">
            <ul className="flex flex-col items-end gap-7 font-medium text-xl">
              {LIST_LINKS.map((item) => (
                <li key={item} className="cursor-pointer">
                  {item !== "Industries" ? (
                    item
                  ) : (
                    <span className="flex">
                      Industries
                      <img src="./images/arrow-down.svg" alt="arrow-down" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
