import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AddTask from "./components/AddTask";
import VisibleTasks from "./components/VisibleTasks";

class TaskApp extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <AddTask />
          <View>
            <VisibleTasks />
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default TaskApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  contentContainer: {
    paddingVertical: 20
  }
});
