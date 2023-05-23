const FIRST_SECTION = () => (
  <div className="flex flex-col gap-[30px] font-medium text-3xl max-w-[1100px]">
    <h4 className="text-green leading-[33px]">Our mission</h4>
    <p className="leading-[39px]">
      Each VEKAS employee is a human and a consumer. Therefore, we strive for
      honest consumption, without counterfeit and low-quality products
    </p>
  </div>
);

const SECOND_SECTION = () => (
  <div className="flex items-center gap-5">
    <span className="text-[50px] leading-[70px]">marked products</span>
    <span className="text-[90px] leading-[82px]">60 480 000 000</span>
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
      <div key={item.bg} className={`${item.bg} py-[120px] px-16`}>
        {item.children}
      </div>
    ))}
  </div>
);

export default OurMissionBlock;
