import arrowIcon from "../assets/images/icon-arrow.svg";
function Button() {
  return (
    <div className="flex flex-row-reverse pr-7">
      <button type="submit" className="bg-purple-600 rounded-3xl p-2">
        <img src={arrowIcon} className="" />
      </button>
    </div>
  );
}

export default Button;
