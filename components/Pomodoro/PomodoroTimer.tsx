import usePomodoroStore, { PomodoroState } from "@/utils/pomodoroStore";
import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type Props = { percent: number; text: string };

const PomodoroTimer = ({ percent, text }: Props) => {
  const themeColor = usePomodoroStore(
    (state: PomodoroState) => state.themeColor
  );

  return (
    <CircularProgressbar
      value={percent}
      text={text}
      strokeWidth={4}
      styles={buildStyles({
        pathColor: themeColor,
        trailColor: "transparent",
        textColor: "white",
      })}
    />
  );
};

export default PomodoroTimer;
