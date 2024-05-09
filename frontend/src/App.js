import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landingpage/LandingPage";
// import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage/>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
