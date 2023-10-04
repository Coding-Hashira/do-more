import usePomodoroStore from "@/utils/pomodoroStore";
import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import React from "react";

type Props = {
  onChange: (color: string) => void;
};

const ThemeSelect = ({ onChange }: Props) => {
  const [themeColor, themeColors] = usePomodoroStore((state) => [
    state.themeColor,
    state.themeColors,
  ]);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",

    defaultValue: themeColor,

    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} gap="2rem">
      {themeColors.map((value) => {
        const radio = getRadioProps({ value });

        return <ThemeColor key={value} {...radio} color={value} />;
      })}
    </HStack>
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
        _checked={{ border: "white solid 2px" }}
        rounded="full"
      ></Box>
    </Box>
  );
};

export default ThemeSelect;
