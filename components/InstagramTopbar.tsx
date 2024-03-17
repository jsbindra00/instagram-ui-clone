import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, Text, View } from "react-native";

const InstagramDMIcon = "../assets/dm_icon.png";

const InstagramLogo = () => {
  return (
    <View style={{ width: 170, height: 60 }}>
      <Image
        source={require("../assets/instagram-logo-white.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
};

type InstagramTopIconProps = {
  icon?: IconDefinition;
  img?: string;
  numDMs?: number;
};
const InstagramTopIcon = (props: InstagramTopIconProps) => {
  return (
    <View
      style={{
        width: 60,
        aspectRatio: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.icon && (
        <FontAwesomeIcon icon={props.icon} color="white" size={28} />
      )}
      {props.img && (
        <View style={{ width: 27, height: 27, position: "relative" }}>
          <Image
            source={require("../assets/dm_icon.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />

          <View
            style={{
              width: 27,
              aspectRatio: 1,
              backgroundColor: "#ff002b",
              position: "absolute",
              right: -15,
              top: -13,
              borderRadius: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-white font-black">5</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const InstagramTopBarRight = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <InstagramTopIcon icon={faHeart} />
      <InstagramTopIcon img={InstagramDMIcon} />
    </View>
  );
};

const InstagramTopbar = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      }}
    >
      <InstagramLogo />
      <InstagramTopBarRight />
    </View>
  );
};

export default InstagramTopbar;
