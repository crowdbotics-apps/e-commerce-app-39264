import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SignIn from "../screens/signin1";
const YourApp = () => {
  return <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to your brand new app!</Text> */}
      <SignIn />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 13
  },
  text: {
    fontSize: 20
  }
});
export const YourAppModule = {
  name: "YourApp",
  path: "./",
  package: "@modules",
  value: {
    title: "Your App",
    navigator: YourApp
  }
};