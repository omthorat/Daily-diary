import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landingpage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNotes from "./components/MyNotes/MyNotes";
import LoginPage from "./pages/loginPage/LoginPage";
import UserRegisterPage from "./pages/UserRegisterPage/UserRegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={UserRegisterPage} />
          <Route path="/mynotes" Component={MyNotes} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
