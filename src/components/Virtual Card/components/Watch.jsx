import React, { useState } from "react";
import DesktopBackground from "../assets/TKS Desktop Watch.png";
import Logo from "../assets/Footer Company Logo.png";

const schedule = {
  S: {
    day: "SUNDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  M: { day: "MONDAY", available: false, startTime: "", endTime: "" },
  T: {
    day: "TUESDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  W: {
    day: "WEDNESDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  T2: {
    day: "THURSDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  F: {
    day: "FRIDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
  S2: {
    day: "SATURDAY",
    available: true,
    startTime: "09:00 AM",
    endTime: "05:00 PM",
  },
};

function Watch() {
  const [selectedDay, setSelectedDay] = useState("S");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const { day, available, startTime, endTime } = schedule[selectedDay];

  return (
    <div className="virtual-card-watch">
      <h2>Working Hours</h2>
      <div className="virtual-card-watch-container">
        <div className="virtual-card-watch-weeks">
          {Object.keys(schedule).map((dayKey, index) => (
            <button
              key={index}
              className={`${
                selectedDay === dayKey ? "virtual-card-watch-active-week" : ""
              }`}
              onClick={() => handleDayClick(dayKey)}
            >
              {dayKey.replace("2", "")}
            </button>
          ))}
        </div>
        <div className="virtual-card-watch-display">
          <img src={DesktopBackground} className="virtual-card-watch-frame" />
          <div
            className={`virtual-card-watch-content ${
              available ? "" : "virtual-card-watch-red"
            }`}
          >
            <h3>{day}</h3>
            <section>
              <div className="virtual-card-watch-available">
                <div className="virtual-card-watch-dot">
                  <sub></sub>
                </div>
                <span>{available ? "Available Now" : "Not Available"}</span>
              </div>
              {available ? (
                <p>
                  {startTime} <br />-<br />
                  {endTime}
                </p>
              ) : (
                <p>Not Working</p>
              )}
            </section>
            <img src={Logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
