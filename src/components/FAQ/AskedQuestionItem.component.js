import { useState } from "react";

const AskedQuestionItem = ({ initialValue = false, question, answer }) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handelClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div onClick={handelClick} className="flex flex-col gap-5 py-4 px-4 sm:px-7 bg-gray bg-opacity-60 rounded-[5px]">
      <div className="flex justify-between sm:gap-14 gap-8">
        <p>{question}</p>
        <img
          className={`${isOpen ? 'rotate-180' : ''} w-8 sm:w-auto`}
          src="./images/arrow.svg"
          alt="arrow"
        />
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default AskedQuestionItem;
