import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import React from "react";

type Props = { colors: string[]; defaultValue: string; onChange?: any };

const ThemeSelect = ({
  colors,
  defaultValue,
  onChange = console.log,
}: Props) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",

    defaultValue: defaultValue,

    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} gap="2rem">
      {colors.map((value) => {
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
