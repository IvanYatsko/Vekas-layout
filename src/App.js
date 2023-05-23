import AboutUs from "./components/AboutUs/AboutUs.component";
import Achievements from "./components/Achievements/Achievements.component";
import AskedQuestion from "./components/FAQ/AskedQuestion.component";
import Industries from "./components/Industries/Industries.component";
import InnovationSystem from "./components/InnovationSystem/InnovationSystem.component";
import Navigation from "./components/Navigation/Navigation.component";
import OurMissionBlock from "./components/OurMission/OurMissionBlock.component";
import PositivePoints from "./components/PositivePoints/PositivePoints.component";
import SwiperLogo from "./components/SwiperLogo/SwiperLogo.component";

function App() {
  return (
    <div className="text-white">
      <header className="wrapper flex justify-between items-center pt-[70px]">
        <a href="/">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <Navigation />
        <button className="bg-green rounded-[5px] py-4 px-8">Order a call</button>
      </header>
      <InnovationSystem />
      <PositivePoints />
      <AboutUs />
      <Industries />
      <Achievements />
      <SwiperLogo />
      <OurMissionBlock />
      <AskedQuestion />
    </div>
  );
}

export default App;
