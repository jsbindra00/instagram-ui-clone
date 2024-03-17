import React from "react";
import { View } from "react-native";

type GapProps = {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Gap = (props: GapProps) => {
  return (
    <View
      style={{
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginBottom: props.marginBottom,
        marginTop: props.marginTop,
      }}
    ></View>
  );
};

export default Gap;
