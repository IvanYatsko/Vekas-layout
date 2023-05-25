const FIRST_SECTION = () => (
  <div className="flex flex-col gap-[30px] font-medium text-xl sm:text-3xl px-5 sm:px-[50px] py-[70px] lg:py-[120px] lg:pl-[70px] lg:pr-[120px]">
    <h4 className="text-green leading-[33px]">Our mission</h4>
    <p className="sm:leading-[39px] leading-[20px]">
      Each VEKAS employee is a human and a consumer. Therefore, we strive for
      honest consumption, without counterfeit and low-quality products
    </p>
  </div>
);

const SECOND_SECTION = () => (
  <div className="flex flex-col xl:flex-row lg:items-center gap-5 sm:gap-[30px] lg:gap-[15px] py-[30px] sm:py-[70px] sm:pl-[50px] pl-[20px] lg:py-[120px] lg:pl-[64px]">
    <span className="lg:text-[50px] lg:leading-[70px] sm:text-[30px] sm:leading-[42px] lg:font-normal text-xl font-medium">marked products</span>
    <span className="lg:text-[90px] sm:text-[70px] sm:leading-[82px] leading-[42px] text-[35px]">60 480 000 000</span>
  </div>
);

const SECTION_LIST = [
  {
    bg: "bg-[url('./images/bg-our-mission-up.png')]",
    children: FIRST_SECTION(),
  },
  {
    bg: "bg-[url('./images/bg-our-mission-down.png')]",
    children: SECOND_SECTION(),
  },
];

const OurMissionBlock = () => (
  <div className="wrapper flex flex-col gap-[30px]">
    {SECTION_LIST.map((item) => (
      <div key={item.bg} className={`${item.bg} rounded-[15px]  bg-cover`}>
        {item.children}
      </div>
    ))}
  </div>
);

export default OurMissionBlock;
