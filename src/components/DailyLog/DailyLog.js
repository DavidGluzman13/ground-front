import { useState } from "react";
import "./DailyLog.scss";
import Slider from "../Slider/Slider";

function DailyLog() {
  const [selectedOption, setSelectedOption] = useState("");

  // Likert and form handlers
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired action with the selected option
    console.log("Selected option:", selectedOption);
  };

  // const handleEmoLog = (event) => {
  //   setEmoLog(event.target.value);
  //   setIsEmoLog(true);
  // };

  return (
    <div className="features__daily-log">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label">
          <h2>Log your thoughts here</h2>
          <input
            name="emoLog"
            className="elog"
            placeholder="Please enter how you've feeling today..."
            // onChange={handleEmoLog}
            // value={emoLog}
          />
        </label>

        <Slider />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DailyLog;
