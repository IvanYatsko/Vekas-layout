const LIST = [
  "video",
  "robots",
  "trim",
  "prol",
  "omron",
  "siemens",
  "schneider",
  "aveva",
];

const SwiperLogo = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="wrapper flex gap-20 py-[150px]">
        {LIST.map((item) => (
          <img key={item} src={`./images/${item}.svg`} alt={item} />
        ))}
      </div>
    </div>
  );
};

export default SwiperLogo;
