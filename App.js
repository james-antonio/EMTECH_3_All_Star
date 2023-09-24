import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App(props) {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalTitle) {
    if (goalTitle.trim().length > 0) {
      const newGoal = { text: goalTitle, key: Math.random().toString() };
      setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
    }
  }
  function resetGoalsHandler() {
    setCourseGoals([]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} onClearGoals={resetGoalsHandler}/>
      <View style={styles.goalListContainer}>
        <Text style={styles.goalTextStyle}>LIST OF GOALS</Text>
        <View style={styles.goalList}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => <GoalItem text={item.text} />}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f4f4f4',
  },
  goalTextStyle: {
    color: 'purple',
    fontSize: 30,
    letterSpacing: 8,
    textAlign: 'center',
  },
  goalListContainer: {
    flex: 1,
    padding: 20,
  },
  goalList: {
    maxHeight: 350,  
  },
});
