import { useEffect, useState } from "react";

const MARKED_PRODUCTS = 60480000000;
const MARKED_PRODUCTS_IN_DAY = 96000;

const markedProductsСalculation = (item) => {
  const nowDate = new Date();
  const month = nowDate.getMonth();
  var countDays = Math.round((nowDate - new Date(item.date)) / 86400000);
  let number;
  if (month === 0 || month === 1 || month === 9 || month === 10) {
    number = item.marked + countDays * MARKED_PRODUCTS_IN_DAY;
  } else if (month === 11 || month === 2) {
    number = item.marked + countDays * MARKED_PRODUCTS_IN_DAY * 1.1;
  } else if (month === 3 || month === 8) {
    number = item.marked + countDays * MARKED_PRODUCTS_IN_DAY * 1.2;
  } else if (month === 4 || month === 5 || month === 6) {
    number = item.marked + countDays * MARKED_PRODUCTS_IN_DAY * 1.5;
  } else if (month === 7) {
    number = item.marked + countDays * MARKED_PRODUCTS_IN_DAY * 1.4;
  }
  return new Intl.NumberFormat('ru-RU').format(number);
};

const OurMissionBlock = () => {
  const [markedProducts, setMarkedProducts] = useState(0);

  useEffect(() => {
    const markedLocalStorage = JSON.parse(
      localStorage.getItem("markedProducts")
    );
    let item = {};
    if (!markedLocalStorage) {
      const dateNow = new Date();
      item = {
        marked: MARKED_PRODUCTS,
        date: dateNow,
      };
      localStorage.setItem("markedProducts", JSON.stringify(item));
    }
    const aaa = markedProductsСalculation(markedLocalStorage || item);
    setMarkedProducts(aaa);
    const intervalId = setInterval(() => {
      const markedLocalStorage = JSON.parse(
        localStorage.getItem("markedProducts")
      );
      setMarkedProducts(markedProductsСalculation(markedLocalStorage));
    }, 86400000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrapper flex flex-col gap-[30px]">
      <div className="bg-[url('./images/bg-our-mission-up.png')] rounded-[15px]  bg-cover">
        <div className="flex flex-col gap-[30px] font-medium text-xl sm:text-3xl px-5 sm:px-[50px] py-[70px] lg:py-[120px] lg:pl-[70px] lg:pr-[120px]">
          <h4 className="text-green leading-[33px]">Our mission</h4>
          <p className="sm:leading-[39px] leading-[20px]">
            Each VEKAS employee is a human and a consumer. Therefore, we strive
            for honest consumption, without counterfeit and low-quality products
          </p>
        </div>
      </div>
      <div className="bg-[url('./images/bg-our-mission-down.png')] rounded-[15px]  bg-cover">
        <div className="flex flex-col xl:flex-row lg:items-center gap-5 sm:gap-[30px] lg:gap-[15px] py-[30px] sm:py-[70px] sm:pl-[50px] pl-[20px] lg:py-[120px] lg:pl-[64px]">
          <span className="lg:text-[50px] lg:leading-[70px] sm:text-[30px] sm:leading-[42px] lg:font-normal text-xl font-medium">
            marked products
          </span>
          <span className="lg:text-[90px] sm:text-[70px] sm:leading-[82px] leading-[42px] text-[35px]">
            {markedProducts}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurMissionBlock;
