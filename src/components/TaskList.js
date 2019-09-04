import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Right
} from "native-base";

const TaskList = ({ tasks, toggleTask, editTask }) => (
  <View style={{ padding: 20 }}>
    {tasks.map(task => (
      <View pointerEvents={task.completed ? "none" : "auto"}>
        {!task.completed ? (
          <View >
            <Card>
            <Right>
              <Button
                transparent
                key={task.id}
                onPress={() => toggleTask(task.id)}
              >
                <Icon name="close" size={70} style={{ color: "#de9595" }} />
              </Button>
            </Right>
              <CardItem>
                <TextInput
                  onChange={nativeEvent => editTask(task.id, nativeEvent.text)}
                  value={task.text}
                    style={{
                    fontSize: 24,
                    textDecorationLine: task.completed ? "line-through" : "none"
                  }}
                />
              </CardItem>

            </Card>
          </View>
        ) : null}
      </View>
    ))}
  </View>
);
export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
