import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class DestinationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <View style={styles.leftCol}>
          <Text style={{ fontSize: 8 }}>{"\u25A0"}</Text>
        </View>

        <View style={styles.centerCol}>
          <TextInput
            style={{ fontSize: 21, color: "#545454" }}
            placeholder="Enter your destination!"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          >
            {" "}
          </TextInput>
        </View>

        <View style={styles.rightCol}>
          <Ionicons
            name="md-man"
            color="#000000"
            size={25}
            style={{ alignSelf: "center" }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    zIndex: 9,
    position: "absolute",
    flexDirection: "row",
    width: WIDTH - 40,
    height: 60,
    top: 100,
    left: 20,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000000",
    elevation: 7,
    shadowRadius: 2,
    shadowOpacity: 0.1
  },
  leftCol: {
    flex: 1,
    alignItems: "center"
  },
  centerCol: {
    flex: 4
  },
  rightCol: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed"
  }
});
