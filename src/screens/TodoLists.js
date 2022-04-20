import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import AddTodo from "../components/Todo/AddTodo";
import Todo from "../components/Todo/Todo";
import { FlatList } from "native-base";
import AppLoading from "expo-app-loading";

export default function TodoLists() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const todoComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const renderList = (todo) => {
    return (
      <Todo
        todo={todo}
        todoComplete={todoComplete}
        handleDelete={handleDelete}
      />
    );
  };

  const taskCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Todo Lists</Text>
        <Text style={styles.taskRemaining}>
          Completed {completedCount} of {taskCount} tasks
        </Text>
      </View>

      <View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderList(item)}
        />
      </View>

      <View style={{ flex: 1 }}>
        <AddTodo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5E1A5",
  },
  title: {
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "green",
  },
  taskRemaining: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "green",
  },
});
