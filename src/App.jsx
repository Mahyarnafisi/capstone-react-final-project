import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import PageError from "./Components/Pages/Page404/PageError";
import Footer from "./Components/Footer/Footer";
import Reservation from "./Components/Reservation/Reservation";
import SuccessBooking from "./Components/SuccessBooking/SuccessBooking";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="reservation/confirm" element={<SuccessBooking />} />
        <Route path="error" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
