import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalcButton from "./../components/CalcButton";

export default class CalcScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  calculate = (value) => {
    if (this.state.count == 0) {
      this.setState({ count: value });
    } else {
      this.setState({ count: this.state.count + "" + value });
    }
  };

  countResult = () => {
    let result = eval(this.state.count);
    this.setState({ count: result });
  };

  percentResult = () => {
    this.setState({ count: this.state.count / 100 });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 50,
              fontWeight: "bold",
              color: "#0D47A1",
            }}
          >
            Calculator
          </Text>
        </View>

        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{this.state.count}</Text>
        </View>

        <View style={styles.button}>
          <CalcButton
            title="1"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(1)}
          />
          <CalcButton
            title="2"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(2)}
          />
          <CalcButton
            title="-"
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.calculate("-")}
          />
          <CalcButton
            title="+"
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.calculate("+")}
          />
        </View>

        <View style={styles.button}>
          <CalcButton
            title="3"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(3)}
          />
          <CalcButton
            title="4"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(4)}
          />
          <CalcButton
            title="/"
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.calculate("/")}
          />
          <CalcButton
            title="*"
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.calculate("*")}
          />
        </View>

        <View style={styles.button}>
          <CalcButton
            title="5"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(5)}
          />
          <CalcButton
            title="6"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(6)}
          />
          <CalcButton
            title="%"
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.percentResult()}
          />
          <CalcButton
            title="="
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.countResult()}
          />
        </View>

        <View style={styles.button}>
          <CalcButton
            title="7"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(7)}
          />
          <CalcButton
            title="8"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(8)}
          />
          <CalcButton
            title="9"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(9)}
          />
          <CalcButton
            title="0"
            color="white"
            backgroundColor="#1E88E5"
            onPress={() => this.calculate(0)}
          />
        </View>

        <View style={styles.button}>
          <CalcButton
            title="."
            color="white"
            backgroundColor="#0D47A1"
            onPress={() => this.calculate(".")}
          />
          <CalcButton
            title="Clear"
            color="white"
            backgroundColor="#0D47A1"
            style={{ flex: 1 }}
            onPress={() => this.setState({ count: 0 })}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#90CAF9",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayContainer: {
    flex: 0.8,
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  displayText: {
    textAlign: "right",
    fontSize: 50,
    fontWeight: "bold",
    color: "#0D47A1",
  },
});
