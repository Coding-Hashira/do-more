import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type Props = { percent: number; text: string };

const PomodoroTimer = ({ percent, text }: Props) => {
  return (
    <CircularProgressbar
      value={percent}
      strokeWidth={50}
      text={text}
      styles={buildStyles({
        strokeLinecap: "butt",
        pathColor: "white",
        trailColor: "transparent",
        textColor: "#181820",
      })}
    />
  );
};

export default PomodoroTimer;
