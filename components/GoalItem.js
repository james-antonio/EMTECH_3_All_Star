import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={goalStyles.goalContainer}>
      <Text style={goalStyles.goalItem}>{props.text}</Text>
    </View>
  );
};

const goalStyles = StyleSheet.create({
  goalContainer: {
    flex: 1,
    maxHeight: 50,
  },
  goalItem: {
    backgroundColor: 'pink',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
  },
});

export default GoalItem;
