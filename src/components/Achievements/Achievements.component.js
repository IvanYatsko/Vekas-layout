import AchievementCard from "../AchievementCard/AchievementCard.component";

const Achievements = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="wrapper pt-[150px] text-center">
        <h3 className="text-green font-medium text-[30px]">Our achievements</h3>
        <h2 className="text-[50px] leading-[70px] mt-[30px]">
          VEKAS makes our world safe and fair
        </h2>
        <p className="mt-[50px]">
          As a system integrator, VEKAS provides everyone with a convenient tool
          for traceability of the products from raw materials to the counter.
        </p>
      </div>
      <div className="wrapper flex">
        <AchievementCard />
      </div>
      <div className="wrapper flex justify-center">
        <button className="bg-green px-8 py-4 rounded-[5px] mt-[70px] font-semibold text-xl">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Achievements;
