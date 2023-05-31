import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
  const [sliderRef] = useKeenSlider({
    slides: { perView: "auto", spacing: 50 },
  });
  
  return (
    <div className="wrapper">
      <div
        ref={sliderRef}
        className="keen-slider flex py-[150px]"
        style={{ maxWidth: 1360 }}
      >
        {LIST.map((item, i) => (
          <img
            key={item}
            className={`keen-slider__slide number-slide${++i} max-w-[150px] min-w-[150px]`}
            src={`./images/${item}.svg`}
            alt={item}
          />
        ))}
      </div>
     </div>
  );
};

export default SwiperLogo;
