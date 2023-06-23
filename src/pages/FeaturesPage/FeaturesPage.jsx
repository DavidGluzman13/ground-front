import "./FeaturesPage.scss";
import Log from "../../components/Log/Log";
import Insights from "../../components/Insights/Insights";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";


function FeaturesPage() {
  return (
    <Routes>
      <Route path="/" element={<Log />} />
      {/* <Route path="/features/1/log" element={<DailyLog />} /> */}
      <Route path="/:id/insights" element={<Insights />} />
    </Routes>
  );
}

export default FeaturesPage;
