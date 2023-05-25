const TypeIndustrie = ({ type }) => {
  return (
    <div className="flex gap-8 sm:gap-14 justify-between py-4 px-[30px] bg-gray bg-opacity-60 rounded-[5px]">
      <p>{type}</p>
      <img src="./images/arrow.svg" alt="arrow" />
    </div>
  );
};

export default TypeIndustrie;
