import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AddTask from "./components/AddTask";
import VisibleTasks from "./components/VisibleTasks";
import { KeyboardAvoidingView } from "react-native";

class TaskApp extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <AddTask />
            <View>
              <VisibleTasks />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
export default TaskApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  contentContainer: {
    paddingVertical: 10
  }
});
