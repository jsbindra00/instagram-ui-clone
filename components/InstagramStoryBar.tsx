import React from "react";
import { ScrollView, View } from "react-native";
import InstagramStory, { InstagramStoryPost } from "./InstagramStory";

const instagramStories: InstagramStoryPost[] = [
  {
    accountIcon: require("../assets/headshot.png"),
    accountName: "Your Story",
    isMyStory: true,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/facebook_headshot.png"),
    accountName: "facebook",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/amazon_headshot.png"),
    accountName: "amazon",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/apple_headshot.png"),
    accountName: "apple",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/netflix_headshot.png"),
    accountName: "netflix",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/google_headshot.png"),
    accountName: "google",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/hormozi_headshot.png"),
    accountName: "hormozi",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/elon_headshot.png"),
    accountName: "elonmusk",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
  {
    accountIcon: require("../assets/einstein_headshot.png"),
    accountName: "einstein",
    isMyStory: false,
    isActiveStory: true,
    size: 70,
  },
];

const InstagramStoryBar = () => {
  return (
    <ScrollView
      style={{ width: "100%" }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 2,
        }}
      >
        {instagramStories.map((instagramStoryPost, index) => {
          return (
            <View style={{}}>
              <InstagramStory
                {...instagramStoryPost}
                key={index}
                size={130}
                showText
                isActiveStory={instagramStoryPost.isActiveStory}
                profileIconPadding={instagramStoryPost.isActiveStory ? 0 : 0}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default InstagramStoryBar;
