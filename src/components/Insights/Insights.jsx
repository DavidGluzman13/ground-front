import "./Insights.scss";
import LineChart from "../../components/LineChart/LineChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

Chart.register(CategoryScale);

function Insights() {
  const [chartData, setChartData] = useState({
    // ...chart data
  });
  return (
    <div className="features">
      <LineChart chartData={chartData} />
    </div>
  );
}

export default Insights;
