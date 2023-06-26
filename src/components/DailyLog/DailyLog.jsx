import "./DailyLog.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
// import formatDate from "../../utils/Date";

function DailyLog() {
  //------------- Slider --------------------------//
  const navigate = useNavigate();
  const emojiOptions = ["😪", "🙁", "😐", "🙂", "😄"];
  const energyLevel = ["😴", "🥱", "😐", "😬", "🤪"];
  const activityOptions = [
    "Sedentary",
    "Lightly active",
    "Moderate",
    "Very active",
    "Extremely active",
  ]; // Capitalize "Full" for consistency

  // setting values
  const userId = "1"; // setting hardcoded userId for now
  const [content, setContentLog] = useState("");
  const [feelingValue, setFeelingValue] = useState("");
  const [activityValue, setActivityValue] = useState("");
  const [energyValue, setEnergyValue] = useState("");
  const [sleep, setSleep] = useState("");

  // not sure what this does but I guess it sets the class?
  const [feelingClass, setFeelingClass] = useState("");
  const [activityClass, setActivityClass] = useState("");
  const [energyClass, setEnergyClass] = useState("");

  // setting validation that the user inputted the answer
  const [isContentLog, setIsContentLog] = useState(true);
  const [isFeeling, setIsFeeling] = useState(true);
  const [isEnergy, setIsEnergy] = useState(true);
  const [isActivity, setIsActivity] = useState(true);
  const [isSleep, setIsSleep] = useState(true);

  // set error
  const [error, setError] = useState(false);

  // ----------------HandleSubmit -----------------//
  const handleSubmit = (e) => {
    e.preventDefault();

    let item = [content, feelingValue, energyValue, activityValue, sleep];

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
    if (!activityValue) {
      setIsActivity(false);
    }
    if (!sleep) {
      setIsSleep(false);
    }

    const newLog = {
      userId,
      content,
      feeling: feelingValue,
      energy: energyValue,
      activity: activityValue,
      hours_slept: sleep,
      date_column: new Date(),
    };

    console.log(newLog);
    axios
      .post("http://localhost:8080/users/1/logs", newLog)
      .then((response) => {
        console.log(response.data);
        alert("Added");
        navigate("/features/1/insights");
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

  // ------------- activity ----------------//
  useEffect(() => {
    setActivityClass(getActivityImage(activityValue)); // Remove hardcoded "Starving"
  }, [activityValue]); // Include dependency array to run the effect when activityValue changes

  const getActivityImage = (activityValue) => {
    switch (activityValue) {
      case "0":
        return "Sedentary";
      case "1":
        return "Lightly active";
      case "2":
        return "Moderate";
      case "3":
        return "Very active";
      case "4":
        return "Extremely active";
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
  const handleActivityValue = (e) => {
    setActivityValue(e.target.value);
    setIsActivity(true);
  };
  const handleSleep = (e) => {
    setSleep(e.target.value);
    setIsSleep(true);
  };

  return (
    <motion.div
      className="features__daily-log"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
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
          <h2>How was your activity level today?</h2>
          <div className="container">
            <input
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="4"
              step="1"
              value={activityValue}
              autoComplete="on"
              onChange={handleActivityValue}
            />
            <div className={`feeling feeling-${activityClass}`}></div>
            <ul className="options">
              {activityOptions.map((option, index) => (
                <li
                  key={index}
                  className={`option ${
                    index === activityValue ? "active" : ""
                  }`}
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
          <motion.button
            className="submit-button"
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>{" "}
        </form>
      </div>
    </motion.div>
  );
}

export default DailyLog;
