import "./files/css/index.scss"
import Header from "./modules/header";
import TitlePage from "./modules/TitlePage";
import WarumPage from "./modules/Warum";
import WohinPage from "./modules/Wohin";
import WasGibtEsInAmericaPage from "./modules/WasGibtsInAmerika";
import Gefahren from "./modules/Gefahren";
import MitWem from "./modules/MitWem";
import DieAnkunft from "./modules/DieAnkunftPage";
import Quizz from "./modules/quizz"

import Footer from "./modules/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <TitlePage />
        <WarumPage />
        <WohinPage />
        <WasGibtEsInAmericaPage />

        <Gefahren />
        <MitWem />
        <DieAnkunft />

        <Quizz />

        <Footer />
        </div>
    </div>
  );
}

export default App;
