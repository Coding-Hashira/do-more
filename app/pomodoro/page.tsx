"use client";

import React, { useEffect, useRef, useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import { Box, Flex } from "@chakra-ui/react";
import PomodoroTimer from "@/components/Pomodoro/PomodoroTimer";

type Props = {};

type WorkModeType = "work" | "break";

const PomodoroPage = ({}: Props) => {
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState<WorkModeType>("work");
  const [secLeft, setSecLeft] = useState(0);
  const [workMins, setWorkMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);
  const [sessions, setSessions] = useState(0);

  const secLeftRef = useRef(secLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const sessionsRef = useRef(sessions);

  const switchMode = () => {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSecLeft = nextMode === "work" ? workMins * 60 : breakMins * 60;

    setMode(nextMode);

    modeRef.current = nextMode;

    setSecLeft(nextSecLeft);

    secLeftRef.current = nextSecLeft;

    nextMode === "work" && sessionsRef.current++;

    setSessions(sessionsRef.current);
  };

  const initTimer = () => {
    secLeftRef.current = workMins * 60;
    setSecLeft(secLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secLeftRef.current === 0) {
        switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  };

  const tick = () => {
    secLeftRef.current--;
    setSecLeft(secLeftRef.current);
  };

  useEffect(() => {
    initTimer();
  }, []);

  const totalSeconds = mode === "work" ? workMins * 60 : breakMins * 60;
  const percent = Math.round((secLeft / totalSeconds) * 100);

  const minutes = Math.floor(secLeft / 60);
  let sec: number | string = secLeft % 60;

  sec < 10 && (sec = "0" + sec);

  const displayTime = `${minutes}:${sec}`;

  return (
    <Flex justifyContent="center" py="8rem">
      <Box>
        <PomodoroTimer percent={percent} text={displayTime} />
      </Box>
      Total Sessipns: {sessions}
    </Flex>
  );
};

export default PomodoroPage;
