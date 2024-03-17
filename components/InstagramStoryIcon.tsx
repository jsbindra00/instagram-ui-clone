import React from "react";
import { Image, View } from "react-native";

type InstagramStoryIconProps = {
  width: string | number;
  image: string;
};
const InstagramStoryIcon = (props: InstagramStoryIconProps) => {
  return (
    <View
      style={{ width: props.width, aspectRatio: 1, backgroundColor: "purple" }}
    >
      <Image
        src={props.image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
};

export default InstagramStoryIcon;
