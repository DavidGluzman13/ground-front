import axios from "axios";
import { useState, useEffect } from "react";
import "./FullLogs.scss";

function FullLogs() {
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

  return (
    <div className="full-logs">
      <h2>All logs since you arrived</h2>
      <ul>
        {log.map((logItem, index) => (
          <li className="detailed-log" key={index}>
            <p className="detailed-log_date">Date: {logItem.date_column}</p>
            <p className="detailed-log_itm">✍ {logItem.content}</p>
            <div className="deets-wrapper">
              <p className="deets-wrapper_itm">Feeling: {logItem.feeling}</p>
              <p className="deets-wrapper_itm">Activity: {logItem.activity}</p>
              <p className="deets-wrapper_itm">Energy: {logItem.energy}</p>
              <p className="deets-wrapper_itm">Sleep: {logItem.hours_slept}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FullLogs;
