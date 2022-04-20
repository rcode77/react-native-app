import * as React from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

//Import React Native Gesture Handler
import "react-native-gesture-handler";

// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
// import AppLoading from "expo-app-loading";

import Container from "./Container";

export default function App() {
  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  );
}
