function DatePicker() {
  return (
    <div className="flex flex-row gap-3 mb-6">
      <div className="w-20">
        <label className="block text-sm font-medium text-gray-700 uppercase mb-1">
          DAY
        </label>
        <input
          type="number"
          placeholder="DD"
          maxLength={2}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="w-20">
        <label className="block text-sm font-medium text-gray-700 uppercase mb-1">
          MONTH
        </label>
        <input
          type="number"
          placeholder="MM"
          maxLength={2}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="w-28">
        <label className="block text-sm font-medium text-gray-700 uppercase mb-1">
          YEAR
        </label>
        <input
          type="number"
          placeholder="YYYY"
          maxLength={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
}

export default DatePicker;
