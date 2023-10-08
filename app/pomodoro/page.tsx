"use client";

import React, { useEffect, useRef, useState } from "react";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { RiSettings4Fill } from "react-icons/ri";

import "react-circular-progressbar/dist/styles.css";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import PomodoroTimer from "@/components/Pomodoro/PomodoroTimer";
import PrimaryButton from "@/components/Pomodoro/PrimaryButton";
import SettingsModal from "@/components/Pomodoro/SettingsModal";
import usePomodoroStore from "@/utils/pomodoroStore";

type Props = {};

export type WorkModeType = "work" | "break";

const PomodoroPage = ({}: Props) => {
  const state = usePomodoroStore((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [workMins, setWorkMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState<WorkModeType>("work");
  const [secLeft, setSecLeft] = useState(0);
  const [sessions, setSessions] = useState(0);
  const secLeftRef = useRef(secLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const sessionsRef = useRef(sessions);

  const switchMode = (mode?: WorkModeType) => {
    if (mode) {
      modeRef.current = mode;
      secLeftRef.current = workMins * 60;
      setSecLeft(secLeftRef.current);
      setMode(modeRef.current);

      return;
    }

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
    }, 1000); // 1000ms = 1s, change it to 10/100 for running clock fast, and testing

    return () => clearInterval(interval);
  }, [workMins, breakMins]);

  useEffect(() => {
    setBreakMins(state?.breakMins);
    setWorkMins(state?.workMins);
  }, [state]);

  const totalSeconds = mode === "work" ? workMins * 60 : breakMins * 60;
  const percent = Math.round((secLeft / totalSeconds) * 100);

  const minutes = Math.floor(secLeft / 60);
  let sec: number | string = secLeft % 60;

  sec < 10 && (sec = "0" + sec);

  const displayTime = `${minutes}:${sec}`;

  return (
    <Flex justifyContent="center" maxW="100vw" py="4rem">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="4rem"
      >
        <PomodoroTimer percent={percent} text={displayTime} />

        <Text>
          {mode == "work"
            ? `Focus for ${workMins} minutes`
            : `Take a break for ${breakMins} minutes`}
        </Text>

        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          width="120%"
        >
          <Box
            bg="#2B2B34"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="full"
            className="group"
            _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
            onClick={onOpen}
          >
            <RiSettings4Fill className="w-10 group-hover:-rotate-[360deg] duration-300 transition-all group-hover:text-white text-[#646464] p-2 h-10" />
          </Box>
          <SettingsModal isOpen={isOpen} onClose={onClose} />
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
          <Box
            bg="#2B2B34"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="full"
            className="group"
            _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
            onClick={() => {
              switchMode("work");
            }}
          >
            <VscDebugRestart className="w-10 text-[#646464] group-hover:-rotate-[360deg] duration-300 transition-all group-hover:text-white p-2 h-10" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PomodoroPage;
