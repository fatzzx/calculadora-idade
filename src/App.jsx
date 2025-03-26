import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DateDisplay from "./components/DateDisplay";
import DatePicker from "./components/DatePicker";

function App() {
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [age, setAge] = useState({ years: null, months: null, days: null });
  const [error, setError] = useState("");

  const handleDateChange = (field) => (e) => {
    setDate({ ...date, [field]: e.target.value });
    setError("");
  };

  const calculateAge = () => {
    const day = parseInt(date.day);
    const month = parseInt(date.month);
    const year = parseInt(date.year);
    const today = new Date();

    if (!day || !month || !year) {
      setError("Please fill in all fields");
      return;
    }

    if (month < 1 || month > 12) {
      setError("Month must be between 1 and 12");
      return;
    }

    if (day < 1 || day > 31) {
      setError("Day must be between 1 and 31");
      return;
    }

    if (year > today.getFullYear()) {
      setError("Year cannot be in the future");
      return;
    }

    if (year < 1900) {
      setError("Nah, too old");
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    if (birthDate > today) {
      setError("Date cannot be in the future");
      return;
    }

    if (birthDate.getMonth() !== month - 1 || birthDate.getDate() !== day) {
      setError("Invalid date");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-br-[100px]">
        <DatePicker onChange={handleDateChange} />
        <Button onClick={calculateAge} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <DateDisplay years={age.years} months={age.months} days={age.days} />
      </div>
    </div>
  );
}

export default App;
