import AboutUs from "./components/AboutUs/AboutUs.component";
import Achievements from "./components/Achievements/Achievements.component";
import AskedQuestion from "./components/FAQ/AskedQuestion.component";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Industries from "./components/Industries/Industries.component";
import InnovationSystem from "./components/InnovationSystem/InnovationSystem.component";
import OurMissionBlock from "./components/OurMission/OurMissionBlock.component";
import PositivePoints from "./components/PositivePoints/PositivePoints.component";
import SwiperLogo from "./components/SwiperLogo/SwiperLogo.component";

function App() {
  return (
    <>
      <Header />
      <InnovationSystem />
      <PositivePoints />
      <AboutUs />
      <Industries />
      <Achievements />
      <SwiperLogo />
      <OurMissionBlock />
      <AskedQuestion />
      <Footer />
    </>
  );
}

export default App;
