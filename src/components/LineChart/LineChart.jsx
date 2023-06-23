import React from "react";
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
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setLog({ item_name: "Item not found" });
        }
      });
  }, []);

  if(!log) {
    return <>loading...</>
  }

  const dateArray = log.map((obj) => {
    return obj.date_column;
  });

  const data = {
    labels: dateArray,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96, 100, 12, 67, 53],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
