import { Button, Flex, Input, useNumberInput } from "@chakra-ui/react";
import { on } from "events";
import React from "react";

type Props = {
  value: number;
  onPlusButtonClick: any;
  onMinusButtonClick: any;
  onChange: any;
};

const MinuteInput = ({
  onPlusButtonClick,
  onMinusButtonClick,
  onChange,
  value,
}: Props) => {
  return (
    <Flex bg="secondaryDarkBg" rounded="md" w="min-content">
      <Button onClick={onPlusButtonClick}>+</Button>
      <Input
        outline="none"
        border="none"
        value={value}
        width="2rem"
        padding="0"
        onChange={onChange}
        _focusVisible={{
          boxShadow: "none",
          border: "0px",
          outline: "none",
        }}
      />
      <Button onClick={onMinusButtonClick}>-</Button>
    </Flex>
  );
};

export default MinuteInput;
