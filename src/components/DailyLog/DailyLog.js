import { useState } from "react";

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

  return (
    <div className="features__daily-log">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label">
          <h2>Log your thoughts here</h2>
          <input className="log" />
        </label>
        <h2>How do you feel today?</h2>
        <div>
          <label>
            <input
              type="radio"
              value="Poorly"
              checked={selectedOption === "Poorly"}
              onChange={handleOptionChange}
            />
            Poorly
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Fair"
              checked={selectedOption === "Fair"}
              onChange={handleOptionChange}
            />
            Fair
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Good"
              checked={selectedOption === "Good"}
              onChange={handleOptionChange}
            />
            Good
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Very Good"
              checked={selectedOption === "Very Good"}
              onChange={handleOptionChange}
            />
            Very Good
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Great!"
              checked={selectedOption === "Great!"}
              onChange={handleOptionChange}
            />
            Great!
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DailyLog;
