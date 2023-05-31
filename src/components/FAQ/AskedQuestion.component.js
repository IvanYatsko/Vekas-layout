import AskedQuestionItem from "./AskedQuestionItem.component";

const LIST = [
  {
    question: "Does the system require a lot of space? Do we need to make changes to the layout of existing lines?",
    answer:
      "The system does not require too much space. It integrates into an existing production line.",
    initialValue: true
  },
  {
    question: "How much does the system cost?",
    answer:
      "Every enterprise is unique. To calculate the cost, please, contact us, and we will send you a questionnaire. Your budget will be determined by the responses. We may also need photos and videos of your production line or the visit of our specialist.",
  },
  {
    question: "We have a small production, is there any solution for us?",
    answer:
      "Yes. There are simple manual solutions for small businesses that allow you to label, control and enter information into a database using your computer, printer, handheld scanner, and software.",
  },
  {
    question: "We have a high line speed. How fast can your system run?",
    answer:
      "Today the VEKAS system can work with the fastest production lines. The speed of applying DataMatrix code is more than 90,000 codes per hour, and the reading speed is more than 120,000 codes per hour.",
  },
  {
    question: "Is it difficult to learn how to use the system?",
    answer:
      "The system is very easy to use. Our software has a user-friendly interface with several levels of access. Learning how to use the system takes less than an hour. Learning how to work at a higher level requires a simple 2-day course.",
  },
];

const AskedQuestion = () => {
  return (
    <div className="wrapper pt-[150px] font-medium text-3xl pb-[150px]">
      <h3 className="text-green">Industries</h3>
      <p className="mt-[30px]">
        Our cutting-edge technology is already used in 7 industries
      </p>
      <div className="mt-[70px] flex gap-[75px]">
        <div className="flex w-full flex-col gap-5 text-base sm:font-medium sm:text-xl">
          {LIST.map((item) => (
            <AskedQuestionItem key={item.question} initialValue={item.initialValue} answer={item.answer} question={item.question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
