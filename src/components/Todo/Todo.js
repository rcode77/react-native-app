import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Todo({ todo, todoComplete, handleDelete }) {
  return (
    <View
      style={[
        styles.todoContainer,
        { backgroundColor: todo.completed ? "#F5F5F5" : "white" },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => todoComplete(todo)}>
          <Ionicons
            name={todo.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            color="gray"
            style={{ width: 32 }}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "green",
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleDelete(todo.id)}>
          <Entypo name="cross" size={24} color="gray" style={{ width: 32 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    padding: 15,
    marginHorizontal: 32,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  todo: {
    maxWidth: "80%",
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});
