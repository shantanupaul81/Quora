import React from "react";
import "./css/WidgetContent.css";

const WidgetContent = () => {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://cdn-icons-png.flaticon.com/128/12968/12968101.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://img.icons8.com/?size=50&id=902&format=png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Quota of Quotes</h5>
          <p>Daily Dosage of unforgettable line</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://img.icons8.com/?size=80&id=82092&format=png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Art of Artist</h5>
          <p>A space related to creating practicing</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetContent;
