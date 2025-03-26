import arrowIcon from "../assets/images/icon-arrow.svg";

function Button({ onClick }) {
  return (
    <div className="relative flex justify-center md:justify-end mt-4 md:mt-0">
      <button
        type="button"
        onClick={onClick}
        className="relative bg-purple-600 rounded-full p-4 hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 z-10"
        aria-label="Calculate Age"
      >
        <img src={arrowIcon} alt="Submit" className="w-6 h-6" />
      </button>
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 transform -translate-y-1/2"></div>
    </div>
  );
}

export default Button;
