import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Container, Content, Card, CardItem, Button, Icon,Right } from "native-base";

const TaskList = ({ tasks, toggleTask, editTask }) => (
  <View style={{ padding: 20 }}>
    {tasks.map(task => (
      <Card>
        <View
          pointerEvents={task.completed ? "none" : "auto"}
        >
          <CardItem>
            <TextInput
              onChangeText={() => editTask(task.text)}
              value={task.text}
              style={{
                fontSize: 24,
                textDecorationLine: task.completed ? "line-through" : "none"
              }}
            />
            <Right>
            <Button transparent
              key={task.id}
              onPress={() => toggleTask(task.id)}
            >
              <Icon
                name="trash"
                size={70}
                style={{ color: "#de9595"}}
              />
            </Button>
              </Right>
          </CardItem>
        </View>

      </Card>
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
