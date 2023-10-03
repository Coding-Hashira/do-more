import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type Props = { percent: number; text: string };

const PomodoroTimer = ({ percent, text }: Props) => {
  return (
    <CircularProgressbar
      value={percent}
      text={text}
      strokeWidth={4}
      styles={buildStyles({
        pathColor: "#AC6DDD",
        trailColor: "transparent",
        textColor: "white",
      })}
    />
  );
};

export default PomodoroTimer;
