import "./DailyLog.scss";
// import Date from "../../utils/Date";

// import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import formatDate from "../../utils/Date";

function DailyLog() {
  //------------- Slider --------------------------//
  const navigate = useNavigate();
  const emojiOptions = ["😪", "😐", "🙂", "😀", "😄"];
  const energyLevel = ["😴", "🥱", "😐", "😬", "🤪"];
  const hungerOptions = ["Starving", "Could eat", "Meh", "Full", "Can't move"]; // Capitalize "Full" for consistency

  // setting values
  const userId = "1"; // setting hardcoded userId for now
  const [content, setContentLog] = useState("");
  const [feelingValue, setFeelingValue] = useState("");
  const [hungerValue, setHungerValue] = useState("");
  const [energyValue, setEnergyValue] = useState("");
  const [sleep, setSleep] = useState("");

  // not sure what this does but I guess it sets the class?
  const [feelingClass, setFeelingClass] = useState("");
  const [hungerClass, setHungerClass] = useState("");
  const [energyClass, setEnergyClass] = useState("");

  // setting validation that the user inputted the answer
  const [isContentLog, setIsContentLog] = useState(true);
  const [isFeeling, setIsFeeling] = useState(true);
  const [isEnergy, setIsEnergy] = useState(true);
  const [isHunger, setIsHunger] = useState(true);
  const [isSleep, setIsSleep] = useState(true);

  // set error
  const [error, setError] = useState(false);

  // ----------------HandleSubmit -----------------//
  const handleSubmit = (e) => {
    e.preventDefault();

    let item = [content, feelingValue, energyValue, hungerValue, sleep];

    for (let i in item) {
      if (!item[i]) {
        setError(true);
      }
    }

    if (!content) {
      setIsContentLog(false);
    }
    if (!feelingValue) {
      setIsFeeling(false);
    }
    if (!energyValue) {
      setIsEnergy(false);
    }
    if (!hungerValue) {
      setIsHunger(false);
    }
    if (!sleep) {
      setIsSleep(false);
    }

    const newLog = {
      userId,
      content,
      feeling: feelingValue,
      energy: energyValue,
      hunger: hungerValue,
      hours_slept: sleep,
      date_column: new Date(),
    };

    console.log(newLog);
    axios
      .post("http://localhost:8080/users/1/logs", newLog)
      .then((response) => {
        console.log(response.data);
        alert("Added");
        navigate("/features/insight");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   -------------feeling------------- //
  useEffect(() => {
    setFeelingClass(getFeelingImage(feelingValue)); // Remove hardcoded "Poorly"
  }, [feelingValue]); // Include dependency array to run the effect when feelingValue changes

  const getFeelingImage = (feelingValue) => {
    switch (feelingValue) {
      case "0":
        return "Poorly";
      case "1":
        return "Fair";
      case "2":
        return "Good"; // Capitalize "Good" for consistency
      case "3":
        return "Very-good";
      case "4":
        return "Great";
      default:
        return "";
    }
  };

  //--------------- Energy -------------- //
  useEffect(() => {
    setEnergyClass(getEnergyImage(energyValue)); // Remove hardcoded "Exhausted"
  }, [energyValue]); // Include dependency array to run the effect when energyValue changes

  const getEnergyImage = (energyValue) => {
    switch (energyValue) {
      case "0":
        return "Exhausted";
      case "1":
        return "Tired";
      case "2":
        return "Moderate"; // Capitalize "Moderate" for consistency
      case "3":
        return "Energized";
      case "4":
        return "Wired";
      default:
        return "";
    }
  };

  // ------------- Hunger ----------------//
  useEffect(() => {
    setHungerClass(getHungerImage(hungerValue)); // Remove hardcoded "Starving"
  }, [hungerValue]); // Include dependency array to run the effect when hungerValue changes

  const getHungerImage = (hungerValue) => {
    switch (hungerValue) {
      case "0":
        return "Starving";
      case "1":
        return "Could eat";
      case "2":
        return "Meh";
      case "3":
        return "Full";
      case "4":
        return "Can't move";
      default:
        return "";
    }
  };

  const handleContentLog = (e) => {
    setContentLog(e.target.value);
    setIsContentLog(true);
  };

  const handleFeelingValue = (e) => {
    setFeelingValue(e.target.value);
    setIsFeeling(true);
  };
  const handleEnergyValue = (e) => {
    setEnergyValue(e.target.value);
    setIsEnergy(true);
  };
  const handleHungerValue = (e) => {
    setHungerValue(e.target.value);
    setIsHunger(true);
  };
  const handleSleep = (e) => {
    setSleep(e.target.value);
    setIsSleep(true);
  };

  return (
    <div className="features__daily-log">
      <div className="toggle-slider">
        <form onSubmit={handleSubmit}>
          <label className="form__label">
            <h2>Log your thoughts here</h2>
            <input
              name="content"
              className="content"
              placeholder="Please enter how you've feeling today..."
              onChange={handleContentLog}
              value={content}
            />
          </label>{" "}
          <h2>How do you feel today?</h2>
          <div className="container">
            <input
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="4"
              step="1"
              value={feelingValue}
              autoComplete="on"
              onChange={handleFeelingValue}
            />
            <div className={`feeling feeling-${feelingClass}`}></div>
            <ul className="options">
              {emojiOptions.map((option, index) => (
                <li
                  key={index}
                  className={`option ${index === feelingValue ? "active" : ""}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <h2>How much energy did you have today?</h2>
          <div className="container">
            <input
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="4"
              step="1"
              value={energyValue}
              autoComplete="on"
              onChange={handleEnergyValue}
            />
            <div className={`feeling feeling-${energyClass}`}></div>
            <ul className="options">
              {energyLevel.map((option, index) => (
                <li
                  key={index}
                  className={`option ${index === energyValue ? "active" : ""}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <h2>How was your hunger?</h2>
          <div className="container">
            <input
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="4"
              step="1"
              value={hungerValue}
              autoComplete="on"
              onChange={handleHungerValue}
            />
            <div className={`feeling feeling-${hungerClass}`}></div>
            <ul className="options">
              {hungerOptions.map((option, index) => (
                <li
                  key={index}
                  className={`option ${index === hungerValue ? "active" : ""}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <h2>How much did you sleep?</h2>
          <input
            name="sleep"
            className="hours" // Add "error" class when isSleep is false
            placeholder="Type in number of hours slept"
            type="number"
            onChange={handleSleep}
            value={sleep}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>{" "}
        </form>
      </div>
    </div>
  );
}

export default DailyLog;
