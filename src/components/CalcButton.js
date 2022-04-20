import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class CalcButton extends React.Component {
  static defaultProps = {
    onPress: function () {},
    title: "",
    color: "black",
    backgroundColor: "white",
    style: {},
  };

  render() {
    let bc = this.props.backgroundColor;
    let color = this.props.color;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          { backgroundColor: bc },
          { ...this.props.style },
        ]}
      >
        <Text style={[styles.text, { color: color }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
    borderRadius: 10,
    margin: 5,
  },
  text: { fontSize: 50, fontWeight: "bold" },
});
