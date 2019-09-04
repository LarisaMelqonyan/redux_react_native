import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskApp from './src/TaskApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TaskApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
///////////////////
// import React, { Component } from 'react';
// import PostForm from './crud/PostForm';
// import AllPost from './crud/AllPost';
// import {reducer} from './crud/reducers'
//
// const store = createStore(reducer)
//
// class App extends Component {
//
// render() {
// return (
//  <Provider store={store}>
//     <PostForm />
//     <AllPost />
//   </Provider>
// );
// }
// }
// export default App;
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import {reducer} from './crud/reducers'
//
// const store = createStore(reducer)
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//          <PostForm />
//          <AllPost />
//        </Provider>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
