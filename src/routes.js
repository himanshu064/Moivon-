import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllEvent from "./pages/all-event";
import EventDetail from "./pages/event-detail";
import Home from "./pages/home";
import UploadEvent from "./pages/upload-event";
import Mask from "./components/Mask";

function NavigationRoutes() {
  const navigate = useNavigate();
  const [maskState, setMaskState] = React.useState(0);
  function goTo(url) {
    setMaskState(1);
    setTimeout(() => {
      setMaskState(2);
      setTimeout(() => {
        setMaskState(3);
        navigate(url);
        setTimeout(() => {
          setMaskState(0);
        }, 1000)
      }, 1500);
    }, 100);
  }
  return (
    <>
      <div className={maskState===1?'m-active':(maskState===2?'m-active state1':(maskState===3?'m-active state2':''))}>
        <Mask />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home goTo={goTo} />} name='home' />
        <Route path="/all-events" element={<AllEvent />} />
        <Route path="/event-detail/:eventId" element={<EventDetail />} />
        <Route path="/upload-event" element={<UploadEvent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default NavigationRoutes;
