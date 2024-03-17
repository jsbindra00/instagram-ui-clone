import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, Text, View } from "react-native";
import { ColorScheme } from "../ColorScheme";
import Gap from "./Gap";

export type InstagramStoryPost = {
  accountName: string;
  accountIcon: string;
  isMyStory: boolean;
  isActiveStory: boolean;
  size: number;
  blackStrokeWidth?: number;
  profileIconPadding?: number;
  showText?: boolean;
};

const InstagramStory = (props: InstagramStoryPost) => {
  return (
    <View
      style={{
        width: props.size,
        aspectRatio: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
          aspectRatio: 1,
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            padding: props.profileIconPadding ? props.profileIconPadding : 5,
          }}
        >
          <Image
            source={props.accountIcon}
            style={{
              width: "100%",
              height: "100%",
              borderColor: "black",
              borderWidth: props.blackStrokeWidth ? props.blackStrokeWidth : 3,
              borderRadius: "100%",
            }}
            resizeMode="contain"
          />
        </View>
        {props.isActiveStory && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: -2,
            }}
          >
            <Image
              source={require("../assets/instagram-gradient-circle.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
        )}

        {props.isMyStory && (
          <View
            style={{
              backgroundColor: ColorScheme.instagram.story_add_button,
              width: 30,
              aspectRatio: 1,
              position: "absolute",
              bottom: 4,
              right: 4,
              borderRadius: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "black",
              borderWidth: 4,
            }}
          >
            <FontAwesomeIcon icon={faPlus} color={"white"} />
          </View>
        )}
      </View>
      {props.showText && (
        <>
          <Gap marginTop={5} />
          <Text
            className="font-semibold"
            style={{
              color: props.isMyStory
                ? ColorScheme.instagram.gray_text
                : "white",
            }}
          >
            {props.accountName}
          </Text>
        </>
      )}
    </View>
  );
};

export default InstagramStory;
