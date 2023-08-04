import "bootstrap";
import "./css/App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App d-flex flex-column justify-content-center">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
