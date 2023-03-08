import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const SignIn = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Sign in</Text>
      </View>
      <View>
        <View style={styles.textBox}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.text}> Buy Everything You Need</Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.mb35}>
          <Button onPress={pressed} height={50} borderWidth={1} backgroundColor="#FFF" color="#000" navigation={navigation}>
            Log In
          </Button>
          </View>
          <Button onPress={pressed} height={50} navigation={navigation}>
            Sign Up
          </Button>
        </View>
      </View>
    <ImageBackground style={styles.vTKfFnfS} source={require("./shopping-cart-3d-render-icon.jpg")} resizeMode="cover"></ImageBackground></View>;
};

const styles = StyleSheet.create({
  mb35: {
    marginBottom: 15
  },
  footerContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center"
  },
  text: {
    fontSize: 12,
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: "20%",
    width: 304,
    height: 23
  },
  welcomeText: {
    fontSize: 26,
    color: "#2F2F2F",
    marginBottom: 16
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 40
  },
  signinText: {
    fontSize: 42,
    fontWeight: "500"
  },
  signinContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 20,
    height: "100%"
  },
  DyDrzUmc: {
    width: 107,
    height: 62
  },
  lworacUg: {
    color: "#fafafa"
  },
  vTKfFnfS: {
    width: 301,
    height: 218,
    position: "absolute",
    top: 79,
    left: 28
  }
});
export default SignIn;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <Pressable onPress={{}}><Pressable onPress={{}}><Pressable onPress={{}}><Pressable onPress={{}}><Pressable onPress={() => {
              props.navigation.navigate("signup");
            }}><View style={[btnStyles.button, {
                backgroundColor: "#3669c9",
                height: props.height ? props.height : 49,
                borderWidth: props.borderWidth ? props.borderWidth : 0,
                borderColor: props.borderColor ? props.borderColor : "#000000"
              }]}>
        <Pressable onPress={{}}><Pressable onPress={() => {
                    props.navigation.navigate("login2");
                  }}><Text style={[btnStyles.text, styles.lworacUg]}>
          {props.children}
        </Text></Pressable></Pressable>
      </View></Pressable></Pressable></Pressable></Pressable></Pressable>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});