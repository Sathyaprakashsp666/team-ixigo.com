import "./App.css";
import Routes from "../src/Components/Routes/Rotes";
import MiddlePart from "./Components/MiddlePart/MiddlePart";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes />
      <div style={{ marginTop: "8vh" }}></div>
      <MiddlePart />
      <Footer />
    </div>
  );
}

export default App;
