import { useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";

const InnovationSystem = () => {
  const [bgValue, setBgValue] = useState("lg");
  const { isScreenLg, isScreenSm, isScreenMd } = useResize();

  useEffect(() => {
    if (isScreenSm && isScreenMd && isScreenLg) {
      setBgValue(
        "bg-[url('./images/lgmain-bg.png')] h-[500px] bg-right rounded-[15px] bg-cover pt-[70px] sm:pt-[120px] md:pl-[70px] sm:pl-[50px] pl-[30px]"
      );
    }
    if (isScreenSm && isScreenMd && !isScreenLg) {
      setBgValue(
        "bg-[url('./images/mdmain-bg.png')] h-[500px] bg-right rounded-[15px] bg-cover pt-[70px] sm:pt-[120px] md:pl-[70px] sm:pl-[50px] pl-[30px]"
      );
    }
    if (!isScreenSm && !isScreenMd && !isScreenLg) {
      setBgValue(
        "bg-[url('./images/smmain-bg.png')] h-[383px] bg-right rounded-[15px] bg-cover pt-[70px] sm:pt-[120px] md:pl-[70px] sm:pl-[50px] pl-[30px]"
      );
    }
  }, [isScreenLg, isScreenSm, isScreenMd]);

  return (
    <main className="wrapper pt-[70px]">
      <div className={bgValue}>
        <p className="text-green font-medium text-xl sm:text-3xl mb-[30px]">Track and trace</p>
        <p className="text-3xl sm:text-[50px] font-medium sm:leading-[70px] max-w-[193px] sm:max-w-[576px]">Innovative end-to-end traceability system</p>
      </div>
      <div className="flex gap-5 md:gap-[60px] mt-[70px] flex-wrap md:flex-nowrap">
        <p className="text-green font-medium text-xl sm:text-3xl">No more fakes</p>
        <p className="sm:max-w-[386px] lg:max-w-[620px] before:content-[''] before:absolute before:w-0.5 before:h-[50px] ml-[10px] md:ml-0 before:bg-green before:-left-[10px] md:before:-left-[30px] before:top-[3px] md:before:-top-[0px] relative">
          Our clients' safety and reputation are our major concerns. We minimize
          the possibility of counterfeiting your product.
        </p>
      </div>
    </main>
  );
};

export default InnovationSystem;
