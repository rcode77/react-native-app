import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={[styles.section, styles.footer]}>
        <TextInput
          style={[styles.input, { borderColor: "green" }]}
          value={title}
          onChange={handleChange}
        />
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: "green" }]}
          onPress={handleSubmit}
        >
          <AntDesign name="plus" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  section: {
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
    backgroundColor: "white",
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});
