import * as React from "react";
import { Text, Box, Pressable, useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.danger["300"]}
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text
        fontFamily="body"
        fontWeight="bold"
        fontStyle="italic"
        fontSize={30}
      >
        Welcome to My App
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Text
          fontFamily="body"
          fontWeight="bold"
          fontSize={18}
          textAlign="center"
        >
          Let's try this app features by click one of the two icons below
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => navigation.navigate("Calculator")}
          style={{
            backgroundColor: "#e11d48",
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            margin: 20,
          }}
        >
          <Ionicons name="calculator-sharp" size={48} color="#FFCDD2" />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Todo Lists")}
          style={{
            backgroundColor: "#e11d48",
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            margin: 20,
          }}
        >
          <Ionicons name="list-sharp" size={48} color="#FFCDD2" />
        </Pressable>
      </View>
    </Box>
  );
}
