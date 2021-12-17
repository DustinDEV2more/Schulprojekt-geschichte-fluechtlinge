import "./files/css/index.scss"
import Header from "./modules/header";
import TitlePage from "./modules/TitlePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <TitlePage />
      </div>
    </div>
  );
}

export default App;
