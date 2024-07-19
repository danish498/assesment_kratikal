import React from "react";

const Countdown = () => {
  return (
    <div
      id="countdown"
      className="countdown"
    >
      <ul className="d-flex">
        <li>
          <span id="days">{20}</span>Days
        </li>
        <li>
          <span>:</span>{" "}
        </li>
        <li>
          <span id="hours">{56}</span>Hours
        </li>
        <li>
          <span>:</span>{" "}
        </li>
        <li>
          <span id="minutes">{30}</span>Minutes
        </li>
        <li>
          <span>:</span>{" "}
        </li>
        <li>
          <span id="seconds">{56}</span>Seconds
        </li>
      </ul>
    </div>
  );
};

export default Countdown;
