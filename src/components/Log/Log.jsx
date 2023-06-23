import "./Log.scss";
import Menu from "../../components/Menu/Menu";
import DailyLog from "../../components/DailyLog/DailyLog";

function Log() {
  return (
    <div className="log">
      <Menu />
      <DailyLog />
    </div>
  );
}

export default Log;
