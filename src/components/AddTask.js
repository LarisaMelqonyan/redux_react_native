import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    text: ""
  };

  addTask = text => {
    this.props.dispatch({ type: "ADD_TASK", text });
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Enter New Task"
          style={{
            borderWidth: 1,
            borderColor: "#f2f2e1",
            backgroundColor: "#eaeaea",
            height: 50,
            flex: 1,
            padding: 5
          }}
        />
        <TouchableOpacity
          onPress={() => this.addTask(this.state.text)}
          disabled={!this.state.text}
        >
          <View
            style={{
              height: 50,
              backgroundColor: "#eaeaea",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Ionicons
              name="md-add"
              size={30}
              style={{ color: "#de9595", padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTask);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
