import "./App.css";
import Button from "./components/Button";
import DatePicker from "./components/DatePicker";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-br-[48px]">
          <DatePicker />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
