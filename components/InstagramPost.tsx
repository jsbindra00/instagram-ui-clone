import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBadgeCheck, faEllipsis } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, Text, View } from "react-native";
import { ColorScheme } from "../ColorScheme";
import Gap from "./Gap";
import InstagramStory from "./InstagramStory";
export type InstagramPostProps = {
  accountName: string;
  activeStory: boolean;
  verified: boolean;
  likedByFirstAccount: string;
  description: string;
  timePostedAgo: string;
  numberOfComments: string;
  numberOfLikes: string;
  accountProfilePicture: string;
  imageSource: string;
  likedByAccount1: string;
  likedByAccount2: string;
  likedByAccount3: string;
};

type InstagramPostTopBarProps = {
  image: string;
  accountName: string;
  isVerified: boolean;
};
const InstagramPostTopBar = (props: InstagramPostTopBarProps) => {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 1,
        paddingRight: 10,
        borderTopColor: "black",
        borderTopWidth: 2,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 0,
        }}
      >
        <InstagramStory
          accountIcon={props.image}
          accountName="test"
          isMyStory={false}
          size={70}
          blackStrokeWidth={2}
          profileIconPadding={3}
          isActiveStory={true}
        />
        <View style={{}}></View>

        <Text className="text-white font-bold" style={{ fontSize: 16 }}>
          {props.accountName}
        </Text>
        <Gap marginRight={4} />

        {props.isVerified && (
          <FontAwesomeIcon icon={faBadgeCheck} color={"white"} size={13} />
        )}
      </View>
      <View>
        <FontAwesomeIcon icon={faEllipsis} color={"white"} size={20} />
      </View>
    </View>
  );
};

type InstagramPostImageProps = {
  image: string;
};

const InstagramPostImage = (props: InstagramPostImageProps) => {
  return (
    <View style={{ width: "100%", aspectRatio: 1 }}>
      <Image
        source={props.image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="fit"
      />
    </View>
  );
};

type InstagramPostEngagementIconProps = {
  icon?: IconDefinition;
  img?: string;
};
const InstagramPostEngagementIcon = (
  props: InstagramPostEngagementIconProps
) => {
  return (
    <View
      style={{
        height: "100%",
        aspectRatio: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.icon && (
        <FontAwesomeIcon icon={props.icon} color="white" size={26} />
      )}
      {props.img && (
        <View style={{ width: 25, aspectRatio: 1, position: "relative" }}>
          <Image
            source={props.img}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};
const InstagramPostEngagementBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: 38,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 12,
        }}
      >
        <InstagramPostEngagementIcon icon={faHeart} />
        <InstagramPostEngagementIcon img={require("../assets/comment.png")} />
        <InstagramPostEngagementIcon img={require("../assets/dm_icon.png")} />
      </View>
      <InstagramPostEngagementIcon icon={faBookmark} />
    </View>
  );
};

type InstagramPostLikedByBarProps = {
  likedByFirstAccount: string;
  numberOfLikes: string;
  likedByAccount1: string;
  likedByAccount2: string;
  likedByAccount3: string;
};
const InstagramPostLikedByBar = (props: InstagramPostLikedByBarProps) => {
  const sampleIcons = [
    props.likedByAccount1,
    props.likedByAccount2,
    props.likedByAccount3,
  ];

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: 72,
        }}
      >
        {sampleIcons.map((icon, index) => {
          return (
            <View
              style={{
                width: 27,
                aspectRatio: 1,
                borderRadius: "100%",
                borderWidth: 2,
                borderColor: "black",
                left: index != 0 ? -(index + 1) * 7 + 7 : 0,
                zIndex: -index,
              }}
            >
              <Image
                source={icon}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </View>
      <Text style={{ color: "white", fontSize: 16 }}>
        Liked by <Text className="font-bold">{props.likedByFirstAccount} </Text>
        and <Text className="font-bold">{props.numberOfLikes} </Text>others
      </Text>
    </View>
  );
};

type InstagramPostDescriptionProps = {
  description: string;
  accountName: string;
  numberOfComments: string;
};
const InstagramPostDescription = (props: InstagramPostDescriptionProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text style={{ marginRight: 3, color: "white", fontSize: 16 }}>
        <Text className="font-bold" style={{}}>
          {props.accountName}{" "}
        </Text>
        <Text className="font-semibold">{props.description}...</Text>
        <Text style={{ color: ColorScheme.instagram.gray_text }}> more</Text>
      </Text>
      <Gap marginTop={5} />
      <Text
        style={{ color: ColorScheme.instagram.gray_text, fontSize: 16 }}
        className="font-semibold"
      >
        View all {props.numberOfComments} comments
      </Text>
    </View>
  );
};

type InstagramPostAddACommentProps = {
  image: string;
};
const InstagramPostAddAComment = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <InstagramStory
        accountIcon={require("../assets/headshot.png")}
        accountName="foo"
        isMyStory={false}
        isActiveStory={false}
        size={58}
      />
      <Text style={{ color: ColorScheme.instagram.gray_text, fontSize: 16 }}>
        Add a comment...
      </Text>
    </View>
  );
};

const InstagramPost = (props: InstagramPostProps) => {
  return (
    <View style={{ width: "100%", minHeight: 500 }}>
      <InstagramPostTopBar
        accountName={props.accountName}
        isVerified={props.verified}
        image={props.accountProfilePicture}
      />
      <Gap marginTop={5} />
      <InstagramPostImage image={props.imageSource} />
      <Gap marginTop={5} />
      <View style={{ padding: 10, paddingTop: 0, paddingHorizontal: 15 }}>
        <InstagramPostLikedByBar
          likedByFirstAccount={props.likedByFirstAccount}
          numberOfLikes={props.numberOfLikes}
          likedByAccount1={props.likedByAccount1}
          likedByAccount2={props.likedByAccount2}
          likedByAccount3={props.likedByAccount3}
        />
        <Gap marginTop={5} />
        <InstagramPostDescription
          accountName={props.accountName}
          description={props.description}
          numberOfComments={props.numberOfComments}
        />
        <Gap marginTop={5} />
        <InstagramPostAddAComment />
        <Gap marginTop={5} />
        <Text
          className={"font-semibold"}
          style={{ color: ColorScheme.instagram.gray_text }}
        >
          {props.timePostedAgo} ago
        </Text>
      </View>
    </View>
  );
};

export default InstagramPost;
