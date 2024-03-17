import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Gap from "../components/Gap";
import InstagramFeed from "../components/InstagramFeed";
import InstagramStoryBar from "../components/InstagramStoryBar";
import InstagramTopbar from "../components/InstagramTopbar";

const instagramLogoWhite = require("../assets/instagram-logo-white.png");

const InstagramScreen = () => {
  // Set your desired width here
  const logoWidth = 200;
  const aspectRatio = 1;

  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView>
          <InstagramTopbar />
          <Gap marginTop={10} />
          <InstagramStoryBar />
          <Gap marginTop={10} />
          <InstagramFeed />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default InstagramScreen;
