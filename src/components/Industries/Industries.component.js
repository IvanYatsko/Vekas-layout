import TypeIndustrie from "../TypeIndustrie/TypeIndustrie.component";

const LIST = [
  "Alcohol",
  "Cheese",
  "Dairy",
  "Drinks",
  "Ice cream",
  "Pharmaceutical",
  "Tobacco",
];

const Industries = () => {
  return (
    <div className="wrapper pt-[150px] font-medium text-3xl">
      <h3 className="text-green">Industries</h3>
      <p className="mt-[30px]">
        Our cutting-edge technology is already used in 7 industries
      </p>
      <div className="mt-[70px] flex gap-[75px]">
        <div className="flex flex-col gap-5 text-green font-medium text-xl grow">
          {LIST.map((item) => (
            <TypeIndustrie key={item} type={item} />
          ))}
        </div>
        <div className="bg-[url('./images/barcode.png')] w-[542px]"></div>
      </div>
    </div>
  );
};

export default Industries;
