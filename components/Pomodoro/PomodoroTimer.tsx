import usePomodoroStore from "@/utils/pomodoroStore";
import { useState, useEffect } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type Props = { percent: number; text: string };

const PomodoroTimer = ({ percent, text }: Props) => {
  const state = usePomodoroStore((state: any) => state);

  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    setThemeColor(state?.themeColor);
  }, [state]);

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
