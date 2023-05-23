import AchievementCard from "../AchievementCard/AchievementCard.component";

const Achievements = () => {
  return (
    <div className="wrapper flex flex-col items-center pt-[150px]">
      <h3 className="text-green font-medium text-[30px]">Our achievements</h3>
      <h2 className="text-[50px] leading-[70px] mt-[30px]">VEKAS makes our world safe and fair</h2>
      <p className="mt-[50px]">
        As a system integrator, VEKAS provides everyone with a convenient tool
        for traceability of the products from raw materials to the counter.
      </p>
      <AchievementCard />
      <button className="bg-green px-8 py-4 rounded-[5px] mt-[70px] font-semibold text-xl">Contact us</button>
    </div>
  );
};

export default Achievements;
