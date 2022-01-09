import "./files/css/index.scss"
import Header from "./modules/header";
import TitlePage from "./modules/TitlePage";
import WarumPage from "./modules/Warum";
import WohinPage from "./modules/Wohin";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <TitlePage />
        <WarumPage />
        <WohinPage />
        {/* Was gibt es in Amerika */}

        {/* Auf welche Gefahren mussten sich die Migranten vorbereiten */}
        {/* Mit wem */}
        {/* Aus welchen ländern */}
        {/* Wie war die Ankunft */}

        {/* Wo haben sie sich in Amerika angegliedert */}
        {/* Waren sie in Amerika willkommen */}
        {/* Was ist passiert? */}

        </div>
    </div>
  );
}

export default App;
