import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const calendarDays = [];
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  for (let i = 0; i < adjustedFirstDay; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="border h-20"></div>
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const isToday =
      i === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();

    calendarDays.push(
      <div
        key={i}
        className={`border h-20 flex items-center justify-center text-lg font-medium ${
          isToday
            ? "bg-blue-500 text-white rounded-full w-10 h-10 mx-auto my-auto"
            : "text-gray-700 hover:bg-blue-100 transition duration-200"
        }`}
      >
        {i}
      </div>
    );
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const formattedMonthYear = `${monthNames[currentMonth]} ${currentYear}`;

  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevMonth}
            className="text-gray-600 hover:text-blue-600 text-xl"
          >
            &lt;
          </button>
          <h2 className="text-2xl font-bold">{formattedMonthYear}</h2>
          <button
            onClick={handleNextMonth}
            className="text-gray-600 hover:text-blue-600 text-xl"
          >
            &gt;
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-1 bg-blue-600 text-white rounded-md">
            Month
          </button>
          <button className="px-4 py-1 text-gray-600 rounded-md hover:bg-gray-200">
            Week
          </button>
          <button className="px-4 py-1 text-gray-600 rounded-md hover:bg-gray-200">
            Day
          </button>
        </div>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-800 border-b pb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px mt-2">
        {calendarDays}
      </div>
    </div>
  );
};

export default Calendar;
