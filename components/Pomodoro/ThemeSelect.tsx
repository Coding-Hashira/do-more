import usePomodoroStore from "@/utils/pomodoroStore";
import { themeColors } from "@/utils/utils";
import { Box, Grid, useRadio, useRadioGroup } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

type Props = {
  onChange: (color: string) => void;
};

const ThemeSelect = ({ onChange }: Props) => {
  const state = usePomodoroStore((state) => state);

  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    setThemeColor(state?.themeColor);
  }, [state]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",

    defaultValue: themeColor,

    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <Grid {...group} gridTemplateColumns="repeat(4, auto)" gap="2rem">
      {themeColors.map((value) => {
        const radio = getRadioProps({ value });

        return <ThemeColor key={value} {...radio} color={value} />;
      })}
    </Grid>
  );
};

const ThemeColor = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();

  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />

      <Box
        {...checkbox}
        cursor="pointer"
        w="10"
        h="10"
        bg={props.color}
        transition="filter 400ms"
        _hover={{ filter: "brightness(0.9)" }}
        _checked={{
          border: `${props.color === "#fff" ? "black" : "white"} 1px solid`,
        }}
        rounded="full"
      ></Box>
    </Box>
  );
};

export default ThemeSelect;
