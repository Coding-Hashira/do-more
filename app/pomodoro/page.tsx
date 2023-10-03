"use client";

import React, { useEffect, useRef, useState } from "react";

import { GiPauseButton } from "react-icons/gi";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import "react-circular-progressbar/dist/styles.css";
import { Box, Flex } from "@chakra-ui/react";
import PomodoroTimer from "@/components/Pomodoro/PomodoroTimer";
import PrimaryButton from "@/components/Pomodoro/PrimaryButton";

type Props = {};

export type WorkModeType = "work" | "break";

const PomodoroPage = ({}: Props) => {
  const [isPaused, setIsPaused] = useState(true);
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
  };

  const tick = () => {
    secLeftRef.current--;
    setSecLeft(secLeftRef.current);
  };

  useEffect(() => {
    initTimer();

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
  }, []);

  const totalSeconds = mode === "work" ? workMins * 60 : breakMins * 60;
  const percent = Math.round((secLeft / totalSeconds) * 100);

  const minutes = Math.floor(secLeft / 60);
  let sec: number | string = secLeft % 60;

  sec < 10 && (sec = "0" + sec);

  const displayTime = `${minutes}:${sec}`;

  return (
    <Flex justifyContent="center" py="8rem">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="4rem"
      >
        <PomodoroTimer percent={percent} text={displayTime} />

        {!isPaused ? (
          <PrimaryButton
            clickHandler={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          >
            <BsPauseFill className="w-16 p-2 h-16" />
          </PrimaryButton>
        ) : (
          <PrimaryButton
            clickHandler={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          >
            <BsPlayFill className="w-16 p-2 h-16" />
          </PrimaryButton>
        )}
      </Flex>
    </Flex>
  );
};

export default PomodoroPage;
