import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useResize } from "../../hooks/useResize";

const LIST = [
  {
    image: "manufacturers",
    title: "Manufacturers",
    discription:
      "Manufacturers are concerned about the well-being of their customers. VEKAS helps manufacturers with:",
    properties: [
      "Fight against counterfeit",
      "Increasing consumer trust in their brands",
      "Full traceability of products at all points of the logistics chain ",
      "Simplification of the recalling products procedure ",
    ],
  },
  {
    image: "distributors",
    title: "Distributors",
    discription:
      "Distributors’ main goal is stock level optimization. VEKAS helps distributors with:",
    properties: [
      "Speeding up the products receiving process",
      "Monitoring expiration dates",
      "Integrating manufactures into complex logistics and distribution networks",
    ],
  },
  {
    image: "customers",
    title: "Customers",
    discription:
      "Every consumer wants to be confident in the quality of the products they buy. VEKAS helps customers with:",
    properties: [
      "Product authentication",
      "Obtaining the necessary product information",
    ],
  },
  {
    image: "government",
    title: "Government",
    discription:
      "Government wishes to maintain control over tax collecting and keep the country's inhabitants safe. VEKAS helps government with:",
    properties: [
      "Full payment of taxes",
      "Lowering the level of counterfeiting",
    ],
  },
];

const AchievementCard = () => {
  const { isScreenXxl } = useResize();
  const [sliderRef] = useKeenSlider({
    slides: { perView: "auto", spacing: isScreenXxl ? 0 : 15 },
  });

  return (
    <div
      ref={sliderRef}
      className={`${
        !isScreenXxl ? "keen-slider " : "gap-[30px] "
      }flex xl:grid grid-cols-2 mt-[70px] max-w-[1360px] last:-pr-8`}
    >
      {LIST.map((item, i) => (
        <div
          key={item.title}
          className={`${
            !isScreenXxl ? `keen-slider__slide number-slide${++i} ` : ""
          }bg-gray bg-opacity-60 rounded-[15px] max-w-[315px] min-w-[315px] sm:max-w-[636px] sm:min-w-[636px]`}
        >
          <img src={`./images/${item.image}.png`} alt={item.image} />
          <div className="mx-[20px] sm:mx-[30px] mt-[30px] mb-[60px]">
            <p className="text-green font-semibold text-xl mb-5">
              {item.title}
            </p>
            <p>{item.discription}</p>
            <ul className="list-disc ml-5">
              {item.properties.map((elem) => (
                <li className="mt-5" key={elem}>
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementCard;
