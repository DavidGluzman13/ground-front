import "./DailyLog.scss";
// import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DailyLog() {
  // const [selectedOption, setSelectedOption] = useState("");

  // Likert and form handlers
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform any desired action with the selected option
  //   console.log("Selected option:", selectedOption);
  // };

  // const handleEmoLog = (event) => {
  //   setEmoLog(event.target.value);
  //   setIsEmoLog(true);
  // };

  //------------- Slider --------------------------//
  const navigate = useNavigate();
  const emojiOptions = ["😪", "😐", "🙂", "😀", "😄"];
  const energyLevel = ["😴", "🥱", "😐", "😬", "🤪"];
  const hungerOptions = ["Starving", "Could eat", "Meh", "Full", "Can't move"]; // Capitalize "Full" for consistency

  // setting values
  const [feelingValue, setFeelingValue] = useState("");
  const [hungerValue, setHungerValue] = useState("");
  const [energyValue, setEnergyValue] = useState("");
  const [sleep, setSleep] = useState("");

  // not sure what this does but I guess it sets the class?
  const [feelingClass, setFeelingClass] = useState("");
  const [hungerClass, setHungerClass] = useState("");
  const [energyClass, setEnergyClass] = useState("");

  // setting validation that the user inputted the answer
  const [isFeeling, setIsFeeling] = useState(true);
  const [isEnergy, setIsEnergy] = useState(true);
  const [isHunger, setIsHunger] = useState(true);
  const [isSleep, setIsSleep] = useState(true);

  // set error
  const [error, setError] = useState(false);

  // ----------------HandleSubmit -----------------//
  const handleSubmit = (e) => {
    e.preventDefault();

    let item = [feelingValue, energyValue, hungerValue, sleep];

    for (let i in item) {
      if (!item[i]) {
        setError(true);
      }
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
      feelingValue,
      energyValue,
      hungerValue,
      sleep,
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

  const handleFeelingValue = (e) => {
    setFeelingValue(e.target.value);
    setIsFeeling(true);
  };
  const handleEnergyValue = (e) => {
    setEnergyValue(e.target.value);
    setIsEnergy(true);
  };
  const handleHungerValue = (event) => {
    setHungerValue(event.target.value);
    setIsHunger(true);
  };
  const handleSleep = (event) => {
    setSleep(event.target.value);
    setIsSleep(true);
  };

  return (
    <div className="features__daily-log">
      <div className="toggle-slider">
        <form onSubmit={handleSubmit}>
          <label className="form__label">
            <h2>Log your thoughts here</h2>
            <input
              name="emoLog"
              className="elog"
              placeholder="Please enter how you've feeling today..."
              // onChange={handleEmoLog}
              // value={emoLog}
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
            className={`input ${isSleep ? "" : "error"}`} // Add "error" class when isSleep is false
            placeholder="0"
            type="number"
            onChange={handleSleep}
            value={sleep}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>{" "}
          {/* Add submit button */}
        </form>
      </div>
    </div>
  );
}

export default DailyLog;
