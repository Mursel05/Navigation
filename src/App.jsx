import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [modal, setModal] = useState("circles");
  return (
    <div className={modal} onMouseLeave={() => setModal("circles")}>
      <div
        className="empty"
        onMouseEnter={() => setModal("circles open")}
      ></div>
      <div className="circle circle1">
        <img src="icons8-moon-32.png" alt="camera" />
      </div>
      <div className="circle circle2">
        <img src="icons8-messages-50.png" alt="camera" />
      </div>
      <div className="circle circle3">
        <img src="icons8-clock-50.png" alt="camera" />
      </div>
      <div className="circle circle4">
        <img src="icons8-camera-.png" alt="camera" />
      </div>
      <div className="circle circle5">
        <img src="icons8-notification-50.png" alt="camera" />
      </div>
      <div className="circle circle6">
        <img src="icons8-brilliant-50.png" alt="camera" />
      </div>
      <div className="circle circle7">
        <img src="icons8-drop-50.png" alt="camera" />
      </div>
      <div className="circle circle8">
        <img src="icons8-alarm-clock-48.png" alt="camera" />
      </div>
      <div className="circle circle9">
        <img src="icons8-joystick-50.png" alt="camera" />
      </div>
    </div>
  );
};

export default App;
