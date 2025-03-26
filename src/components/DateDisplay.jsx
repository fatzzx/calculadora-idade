function DateDisplay({ years, months, days }) {
  return (
    <div className="mt-8">
      <div className="flex items-center">
        {years === null && (
          <span className="text-purple-600 text-6xl mr-3">{"--"}</span>
        )}
        <span className="text-purple-600 text-6xl mr-3">
          {years !== null ? years : "--"}
        </span>
        <span className="text-black text-6xl font-bold">years</span>
      </div>
      <div className="flex items-center">
        {months === null && (
          <span className="text-purple-600 text-6xl mr-3">{"--"}</span>
        )}
        <span className="text-purple-600 text-6xl mr-3">
          {months !== null ? months : "--"}
        </span>
        <span className="text-black text-6xl font-bold">months</span>
      </div>
      <div className="flex items-center">
        {days === null && (
          <span className="text-purple-600 text-6xl mr-3">{"--"}</span>
        )}
        <span className="text-purple-600 text-6xl mr-3">
          {days !== null ? days : "--"}
        </span>
        <span className="text-black text-6xl font-bold">days</span>
      </div>
    </div>
  );
}

export default DateDisplay;
