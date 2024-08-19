import React, { useState, useEffect } from "react";

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDay = days[currentDateTime.getDay()];
  const currentMonth = months[currentDateTime.getMonth()];
  const currentDate = currentDateTime.getDate();
  const currentYear = currentDateTime.getFullYear();
  let currentHour = currentDateTime.getHours();
  const currentMinute = currentDateTime.getMinutes();
  const currentSecond = currentDateTime.getSeconds();
  let ampm = currentHour >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  currentHour = currentHour % 12;
  currentHour = currentHour ? currentHour : 12;

  return (
    <div>
      <h5 className="font-bold mb-2 text-2xl lg:text-2xl">
        Today's date and time:
      </h5>
      <p>
        {currentDay}, {currentMonth} {currentDate}, {currentYear}
      </p>
      <p className="mt-2 mb-6">
        {currentHour < 10 ? "0" + currentHour : currentHour}:
        {currentMinute < 10 ? "0" + currentMinute : currentMinute}:
        {currentSecond < 10 ? "0" + currentSecond : currentSecond} {ampm}
      </p>
    </div>
  );
}

export default CurrentDateTime;
