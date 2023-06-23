import React from "react";
import "./LineChart.scss";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Date from "../../utils/Date";
import formatDate from "../../utils/Date";

function LineChart() {
  const url = "http://localhost:8080/users/1/logs";
  //   const { id } = useParams();
  const [log, setLog] = useState(null);
  //   const [dateArray, setDateArray] = useState(null);
  //   const [isDateArray, setIsDateArray] = useState(true);

  useEffect(() => {
    axios
      .get(url) // add id later when you have authentication
      .then((response) => {
        response.data.forEach((obj) => {
          obj.date_column = obj.date_column.split("T")[0];
        });
        setLog(response.data);
        console.log(response.data);
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

  const dateArray = log.map((obj) => {
    return obj.date_column;
  });

  const feelingArray = log.map((obj) => {
    return obj.feeling;
  });

  const hungerArray = log.map((obj) => {
    return obj.hunger;
  });

  const energyArray = log.map((obj) => {
    return obj.energy;
  });

  const sleepArray = log.map((obj) => {
    return obj.hours_slept;
  });

  const data = {
    labels: dateArray,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Feeling",
        data: feelingArray,
        borderColor: "#a3cfd9",
        fill: false,
      },
      {
        label: "Hunger",
        data: hungerArray,
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

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}
export default LineChart;
