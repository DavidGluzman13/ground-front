import "./FeaturesPage.scss";
import Menu from "../../components/Menu/Menu";
import DailyLog from "../../components/DailyLog/DailyLog";
// import cactus from "../../assets/images/download.jpeg";

function FeaturesPage() {
  return (
    <div className="features">
      <Menu />
      <DailyLog />
    </div>
  );
}

export default FeaturesPage;
