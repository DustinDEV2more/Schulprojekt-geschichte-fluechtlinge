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
import Datenschutz from "./modules/datenschutz";
import {BrowserRouter as Router, Route, Switch as Routes} from "react-router-dom"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from "./modules/footer";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>

        <Route exact path="/datenschutz">
          <Datenschutz />
        </Route>

        <Route exact path="/imprint">
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>Dustin Meyer<br />
        Bergstra&szlig;e 50<br />
        09113 Chemnitz</p>

        <h2>Kontakt</h2>
        <p>Telefon: 015251999236<br />
        E-Mail: private@dustin-dm.de</p>
        <div><div style={{height: "50vh"}}></div></div>
        </Route>
        <Route path="/">
          <div className="content">
            <TitlePage />
            <WarumPage />
            <WohinPage />
            <WasGibtEsInAmericaPage />

            <Gefahren />
            <MitWem />
            <DieAnkunft />

        <Quizz />

            </div>
        </Route>
        </Routes> 
        <Footer />
    </div>
    </Router>
  );
}

export default App;
