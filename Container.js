import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import Welcome from "./src/screens/Welcome";
import CalcScreen from "./src/screens/CalcScreen";
import TodoLists from "./src/screens/TodoLists";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Welcome") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name == "Calculator") {
            iconName = focused ? "calculator-sharp" : "calculator-outline";
          } else if (route.name == "Todo Lists") {
            iconName = focused ? "list-sharp" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalcScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Todo Lists"
        component={TodoLists}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Container() {
  // Init Theme
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.primary["300"] },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Calculator"
          component={CalcScreen}
          options={{
            title: "Calculator",
          }}
        />
        <Stack.Screen
          name="Todo Lists"
          component={TodoLists}
          options={{
            title: "Todo Lists",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
