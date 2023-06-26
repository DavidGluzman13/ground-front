import React, { useState, useEffect } from "react";
import "./LineChart.scss";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LineChart() {
  const navigate = useNavigate();

  const url = "http://localhost:8080/users/1/logs";
  const [log, setLog] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        response.data.forEach((obj) => {
          obj.date_column = obj.date_column.split("T")[0];
        });
        setLog(response.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setLog({ item_name: "Item not found" });
        }
      });
  }, []);

  if (!log) {
    return <>loading...</>;
  }

  const dateArray = log.map((obj) => obj.date_column);
  const feelingArray = log.map((obj) => obj.feeling);
  const activityArray = log.map((obj) => obj.activity);
  const energyArray = log.map((obj) => obj.energy);
  const sleepArray = log.map((obj) => obj.hours_slept);
  const content = log.map((obj) => obj.content);

  function reassignLastFiveLogs(arr) {
    if (arr.length < 5) {
      return "Array length is less than 5.";
    }
    const newStringsArray = arr.slice(arr.length - 5);
    return newStringsArray;
  }

  const newContent = reassignLastFiveLogs(content);

  const averageArray = [];
  for (let i = 0; i < dateArray.length; i++) {
    const average =
      (feelingArray[i] + activityArray[i] + energyArray[i] + sleepArray[i]) / 4;
    averageArray.push(average);
  }

  const data = {
    labels: dateArray,
    datasets: [
      {
        label: "Feeling",
        data: feelingArray,
        borderColor: "#a3cfd9",
        fill: false,
      },
      {
        label: "Activity",
        data: activityArray,
        borderColor: "#8ebfa6",
        fill: false,
      },
      {
        label: "Energy",
        data: energyArray,
        borderColor: "#c4b7c5",
        fill: false,
      },
      {
        label: "Sleep",
        data: sleepArray,
        borderColor: "#d3c29a",
        fill: false,
      },
      {
        label: "Average",
        data: averageArray,
        borderColor: "blue",
        fill: false,
        lineTension: 0.4, // Adjust the line tension for a smoother curve
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  function calculateStreak() {
    let streak = 0;
    let currentStreak = 0;

    // Start from the most recent date and iterate backwards
    for (let i = dateArray.length - 1; i >= 0; i--) {
      const currentDate = new Date(dateArray[i]);
      const previousDate = new Date(dateArray[i - 1]);

      // Check if the current date is one day before the previous date
      if (
        previousDate &&
        currentDate.getTime() - previousDate.getTime() === 24 * 60 * 60 * 1000
      ) {
        currentStreak++;
      } else {
        // Reset the streak if there is a gap in the consecutive dates
        if (currentStreak > streak) {
          streak = currentStreak;
        }
        currentStreak = 0;
      }
    }

    return streak;
  }

  function handleFullLogNavigation(e) {
    e.preventDefault();
    navigate("/full-logs");
  }

  const streak = calculateStreak();

  return (
    <div className="insights-wrapper">
      <div className="insights-wrapper__chart">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Line data={data} options={options} />
      </div>
      <div className="insights-wrapper__logs">
        <h2>Last 5 Journal logs</h2>
        <ul>
          {newContent.map((string, index) => (
            <div key={index}>
              <li>
                ✍<p className="log-text">{string}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="streak">
        <h2>Current Streak: {streak} days</h2>
      </div>
      <motion.button
        className="nav-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleFullLogNavigation}
      >
        View all of your logs
      </motion.button>
    </div>
  );
}

export default LineChart;

// change hover button color
// create sorting functionality: week view, month view, year view
