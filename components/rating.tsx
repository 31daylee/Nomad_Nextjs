import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressProps {
  value: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value }) => {
  return (
    <CircularProgressbarWithChildren value={value}>
      <img
        style={{ width: 40, marginTop: -5 }}
        src="https://i.imgur.com/b9NyUGm.png"
        alt="doge"
      />
      <div style={{ fontSize: 12, marginTop: -5 }}>
        <strong>{value}%</strong>
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgress;
