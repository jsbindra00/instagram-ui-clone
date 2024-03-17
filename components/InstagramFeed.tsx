import React from "react";
import { View } from "react-native";
import InstagramPost, { InstagramPostProps } from "./InstagramPost";

const instagramPosts: InstagramPostProps[] = [
  {
    accountName: "hormozi",
    activeStory: false,
    description: "This is why you need to follow Jas Bindra on Instagram",
    likedByFirstAccount: "jsbindra00",
    numberOfComments: "342",
    numberOfLikes: "11,845",
    timePostedAgo: "4 days",
    verified: true,
    accountProfilePicture: require("../assets/hormozi_headshot.png"),
    imageSource: require("../assets/hormozi_post.png"),
    likedByAccount1: require("../assets/headshot.png"),
    likedByAccount2: require("../assets/einstein_headshot.png"),
    likedByAccount3: require("../assets/google_headshot.png"),
  },
  {
    accountName: "google",
    activeStory: false,
    description:
      "Congrats to Jas Bindra for having the most awesome Instagram account",
    likedByFirstAccount: "hormozi",
    numberOfComments: "3453",
    numberOfLikes: "893,423",
    timePostedAgo: "4 days",
    verified: true,
    accountProfilePicture: require("../assets/google_headshot.png"),
    imageSource: require("../assets/google_post.png"),
    likedByAccount1: require("../assets/hormozi_headshot.png"),
    likedByAccount2: require("../assets/netflix_headshot.png"),
    likedByAccount3: require("../assets/facebook_headshot.png"),
  },
  {
    accountName: "einstein",
    activeStory: false,
    description:
      "I built a time machine just so I could see @jsbindra00's posts",
    likedByFirstAccount: "hormozi",
    numberOfComments: "3453",
    numberOfLikes: "893,423",
    timePostedAgo: "4 days",
    verified: true,
    accountProfilePicture: require("../assets/einstein_headshot.png"),
    imageSource: require("../assets/einstein_post.png"),
    likedByAccount1: require("../assets/hormozi_headshot.png"),
    likedByAccount2: require("../assets/netflix_headshot.png"),
    likedByAccount3: require("../assets/facebook_headshot.png"),
  },
  {
    accountName: "facebook",
    activeStory: false,
    description: "Why aren't you follow jasbindra00 yet? You're missing out",
    likedByFirstAccount: "elonmusk",
    numberOfComments: "478",
    numberOfLikes: "221,423",
    timePostedAgo: "5 days",
    verified: true,
    accountProfilePicture: require("../assets/facebook_headshot.png"),
    imageSource: require("../assets/facebook_post.png"),
    likedByAccount1: require("../assets/elon_headshot.png"),
    likedByAccount2: require("../assets/netflix_headshot.png"),
    likedByAccount3: require("../assets/google_headshot.png"),
  },
];

const InstagramFeed = () => {
  return (
    <View style={{}}>
      {instagramPosts.map((instagramPost, index) => {
        return <InstagramPost {...instagramPost} />;
      })}
    </View>
  );
};

export default InstagramFeed;
