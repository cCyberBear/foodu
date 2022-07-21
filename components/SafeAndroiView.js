import { StyleSheet, Platform, StatusBar, View } from "react-native";

import React from "react";

const SafeAndroiView = ({ children }) => {
  return <View style={styles.AndroidSafeArea}>{children}</View>;
};

export default SafeAndroiView;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 0,
    paddingBottom: 110,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
