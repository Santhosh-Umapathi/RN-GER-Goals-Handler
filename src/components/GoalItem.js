import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props =>
{
	return (
  <TouchableOpacity
   //onPress={props.deleteGoal.bind(this, props.id)} //Option 1
   onPress={props.deleteGoal} //Option 2 , Option 3
  >
   <View style={styles.rowStyle}>
    <Text style={styles.rowText}>{props.itemGoal}</Text>
   </View>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
  rowStyle: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "lightblue",
  },
  rowText: {
    fontSize: 25,
  },
});

export default GoalItem;