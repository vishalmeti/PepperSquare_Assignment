import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./Body";
import Footer from "./components/Footer";
import "./App.css";
import { X } from "lucide-react";
import { EventContextProvider } from "./context/eventContext";

const App = () => {
  const [overLay, setoverLay] = useState(false);
  const [imgData, setImgData] = useState("");

  useEffect(() => {
    window.addEventListener("openOverlay", open);
    return () => {
      window.removeEventListener("openOverlay", open);
    };
  }, []);

  const open = (e) => {
    setImgData(e.detail.data);
    setoverLay(true);
  };

  return (
    <div className="app">
      {overLay ? (
        <div className="overlay">
          <div className="close">
            <X color="white" onClick={() => setoverLay(false)} size={30} />
          </div>
          <img src={imgData.img} alt="" className="overlayImage" />
          <p className="overlayText">
            <div>{imgData.title}</div>
            <div>{imgData.date}</div>
          </p>
        </div>
      ) : null}
      <Navbar />
      <EventContextProvider>
        <Body />
      </EventContextProvider>
    </div>
  );
};

export default App;
