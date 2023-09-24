import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoal.trim().length > 0) {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }
  }

  function resetGoalsHandler() {
    if (props.onClearGoals) {
      props.onClearGoals();
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} 
      color={'green'}/>
      <Button title="CLEAR GOALS" onPress={resetGoalsHandler} 
      color={'black'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
    marginRight: 5
  },
  textInput: {
    flex:1,
    borderWidth: 1,
    color: 'black',
    borderColor: 'black',
    marginLeft: 10,
    padding: 13,
    width: '70%',
  },
});

export default GoalInput;
