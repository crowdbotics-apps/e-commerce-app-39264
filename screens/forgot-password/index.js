import { Pressable } from "react-native";
import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const ForgotPassword = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.topHead}>
        <Text style={styles.mainHeading}>Forgot {"\n"} password</Text>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.newPassword}>
          <Text style={styles.newPassword}>
            Set new password for your account.
          </Text>
        </View>
        <View style={styles.passwordInput}>
          <Text style={styles.newPasswordLabel}>Password</Text>
          <Input placeholder="Enter"></Input>
        </View>
        <View style={styles.confirmInput}>
          <Text style={styles.newPasswordLabel}>Confirm Password</Text>
          <Input placeholder="Enter"></Input>
        </View>
      </View>
      <View style={styles.resetButton}>
        <Button onPress={pressed} style={styles.resetBtn} navigation={navigation}>
          Reset password
        </Button>
      </View>
      <View style={styles.back}>
        <Text style={styles.backText}>Back</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  topHead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    height: "100%"
  },
  inputSection: {
    paddingTop: 40
  },
  newPassword: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  passwordInput: {
    marginTop: 50
  },
  newPasswordLabel: {
    paddingLeft: 15,
    paddingBottom: 7
  },
  confirmInput: {
    paddingTop: 10
  },
  resetButton: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30
  },
  back: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30
  },
  backText: {
    fontWeight: "600",
    fontSize: 20
  },
  GcyKcfNj: {
    color: "#fafafa",
    textAlign: "center"
  }
});
export default ForgotPassword;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <Pressable onPress={{}}><Pressable onPress={() => {
        props.navigation.navigate("login2");
      }}><View style={[btnStyles.button, {
          backgroundColor: "#3669C9",
          height: props.height ? props.height : 49,
          borderWidth: props.borderWidth ? props.borderWidth : 0,
          borderColor: props.borderColor ? props.borderColor : "#000000",
          opacity: 1
        }]}>
        <Text style={[btnStyles.text, styles.GcyKcfNj]}>
          {props.children}
        </Text>
      </View></Pressable></Pressable>
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

const Input = props => {
  return <View>
      <TextInput style={inputStyles.input} placeholder={props.placeholder} value={props.value} onChangeText={num => props.setValue(num)} placeholderTextColor="#ddd" editable={props.editable !== false} />
      {props.errorText ? <Text style={inputStyles.error}>{props.errorText}</Text> : null}
    </View>;
};

const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: "#f1f1f1",
    height: 53,
    borderColor: "#C4C4C4",
    color: "#000",
    borderRadius: 10,
    fontSize: 14,
    borderWidth: 1,
    paddingHorizontal: 15
  },
  error: {
    fontSize: 13,
    color: "#FA060D",
    paddingTop: 8
  }
});