import { ImageBackground } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.RNJiQWTU}><Text style={styles.kqsGXVEj}>E-Commerce app</Text><View style={styles.tFtsHBXB}><Text style={styles.VGOAujRi}>Search Product Name</Text></View><ImageBackground style={styles.UPeIzkDb} source={require("./shopping-cart-3d-render-icon.jpg")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.FsXExfqx} source={require("./search.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.pmsnKcTp} source={require("./vector.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.YrbcXxYS} source={require("./Group 354.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.KJYaygBv} source={require("./Group 355.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  RNJiQWTU: {
    height: 631,
    width: 354,
    backgroundColor: "#fafafa",
    borderRadius: 0,
    color: "#777777",
    top: -8,
    left: -9
  },
  kqsGXVEj: {
    width: 158,
    height: 50,
    lineHeight: 50,
    fontSize: 20,
    borderRadius: 0,
    color: "#3669c9",
    textAlign: "right",
    position: "absolute",
    top: 22,
    left: 89,
    fontFamily: "Roboto",
    fontWeight: "700"
  },
  nKJSQeLJ: {
    width: 55,
    height: 16,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 78,
    left: 40
  },
  HLWLkcjn: {
    backgroundColor: "#dfd3d3",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 112,
    left: 42
  },
  yMnriBNB: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    left: 91,
    top: 219
  },
  LAqnHRMk: {
    position: "absolute",
    backgroundColor: "#ededed",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    left: 54,
    top: 142,
    transform: "rotate(0deg)"
  },
  aSOCnkQI: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  AftIhUfy: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  RgEOvcEp: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  tFtsHBXB: {
    height: 36,
    width: 300,
    backgroundColor: "#ededed",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 99,
    left: 27
  },
  timfvFws: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 291,
    height: 34,
    position: "absolute",
    top: 1,
    left: 4.5
  },
  zqxFycMc: {
    position: "absolute",
    backgroundColor: "#ededed",
    borderColor: "#cccccc",
    width: 248,
    height: 30,
    top: 104,
    left: 41
  },
  UPeIzkDb: {
    width: 46,
    height: 28,
    position: "absolute",
    top: 33,
    left: 27
  },
  FsXExfqx: {
    width: 16,
    height: 16,
    position: "absolute",
    top: 109,
    left: 301
  },
  VGOAujRi: {
    width: 249,
    height: 36,
    lineHeight: 37,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "left",
    color: "#c4c5c4",
    position: "absolute",
    left: 13,
    top: 0
  },
  pmsnKcTp: {
    width: 16,
    height: 17,
    position: "absolute",
    left: 303,
    top: 44
  },
  YrbcXxYS: {
    width: 235,
    height: 109,
    position: "absolute",
    left: 245,
    top: 157
  },
  KJYaygBv: {
    width: 210,
    height: 110,
    position: "absolute",
    left: 25,
    top: 157
  }
});
export default Untitled10;