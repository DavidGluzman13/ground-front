import { useEffect, useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const emojiOptions = ["😪", "😐", "🙂", "😀", "😄!"];
  const energyLevel = ["😴", "🥱", "😐", "😬", "🤪"];
  const hungerOptions = ["Starving", "Could eat", "Meh", "full", "Can't move"];

  const [thumbValue, setThumbValue] = useState(0);
  const [thumbClass, setThumbClass] = useState("thumb-good");
  const [energyValue, setEnergyValue] = useState(0);
  const [energyClass, setEnergyClass] = useState("thumb-good");
  const [hungerValue, setHungerValue] = useState(0);
  const [hungerClass, setHungerClass] = useState("thumb-good");

  //   -------------thumb------------- //
  useEffect(() => {
    setThumbClass("Poorly");
  }, []);

  const updateThumbValue = (e) => {
    const inputThumbValue = e.target.thumbValue;
    setThumbValue(inputThumbValue);
    setThumbClass(`thumb-${getThumbImage(inputThumbValue)}`);
  };

  const getThumbImage = (thumbValue) => {
    switch (thumbValue) {
      case "0":
        return "Poorly";
      case "1":
        return "Fair";
      case "2":
        return "good";
      case "3":
        return "very-good";
      case "4":
        return "Great";
      default:
        return "";
    }
  };

  //--------------- Energy -------------- //
  useEffect(() => {
    setEnergyClass("Exhausted");
  }, []);

  const updateEnergyValue = (e) => {
    const inputEnergyValue = e.target.energyValue;
    setEnergyValue(inputEnergyValue);
    setEnergyClass(`thumb-${getEnergyImage(inputEnergyValue)}`);
  };

  const getEnergyImage = (energyValue) => {
    switch (energyValue) {
      case "0":
        return "Exhausted";
      case "1":
        return "Tired";
      case "2":
        return "moderate";
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
    setHungerClass("Starving");
  }, []);

  const updateHungerValue = (e) => {
    const inputHungerValue = e.target.hungerValue;
    setHungerValue(inputHungerValue);
    setHungerClass(`thumb-${getHungerImage(inputHungerValue)}`);
  };

  const getHungerImage = (hungerValue) => {
    switch (hungerValue) {
      case "0":
        return "Starving";
      case "1":
        return "Could eat";
      case "2":
        return "Meh";
      case "3":
        return "full";
      case "4":
        return "Can't move";
      default:
        return "";
    }
  };

  return (
    <div className="toggle-slider">
      <h2>How do you feel today?</h2>
      <div className="container">
        <input
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="4"
          step="1"
          value={thumbValue}
          autoComplete="on"
          onChange={updateThumbValue}
        />
        {/* <div className={`thumb thumb-${thumbClass}`}></div> */}
        <ul className="options">
          {emojiOptions.map((option, index) => (
            <li
              key={index}
              className={`option ${index === thumbValue ? "active" : ""}`}
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
          onChange={updateEnergyValue}
        />
        <div className={`thumb thumb-${energyClass}`}></div>
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
          onChange={updateHungerValue}
        />
        <div className={`thumb thumb-${hungerClass}`}></div>
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
    </div>
  );
};

export default Slider;
