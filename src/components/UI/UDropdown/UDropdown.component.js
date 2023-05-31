import { useState } from "react";

const LIST = [
  "Alcohol",
  "Cheese",
  "Dairy",
  "Drinks",
  "Ice cream",
  "Tobacco",
  "Pharmaceutical",
];

const UDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeValue = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        className={`${isOpen ? "text-green " : ""}hover:text-green active:text-[#16DB33] flex`}
        onClick={changeValue}
      >
        Industries
        <img className={`${isOpen ? "fill-green rotate-180" : ""}hover:fill-green`} src="./images/arrow-down.svg" alt="arrow-down" />
      </button>
      {isOpen && (
        <div className="absolute top-10 bg-gray bg-opacity-70 rounded-md p-5 font-medium text-xl">
          {LIST.map((item) => (
            <div
              className="hover:text-green cursor-pointer mb-2 last:mb-0"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UDropdown;
