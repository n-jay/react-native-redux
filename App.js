import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CounterApp from './src/CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return {
        counter: state.counter + 1
      }
    case 'DECREASE_COUNTER':
      return {
        counter: state.counter - 1
      }
  }
  return state;
}

const store = createStore(reducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store = {store}>
        <CounterApp/>
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

/**
 * Store - Holds our state (THERE IS ONLY 1 STATE)
 * Action - State stored in the Store can only be modified with actions
 * Dispatcher - Action needs to be sent to someone (KNOWN AS DISPATCHING AN ACTION)
 * Reducer - Recieves the action and modifies the state to give us a new state (STATE IS READ ONLY, IT IS MERELY)
 * Subscriber - Listens to state and updatest the UI
 */
