import React, {useState} from 'react';
import { View, Modal, TextInput, StyleSheet, Button, Text } from 'react-native';

const GoalInput = (props) =>
{
	const [enteredText, setEnteredText] = useState('');

addGoalHandler = () => {
  props.addGoal(enteredText);
  setEnteredText('');
  props.visible
}


  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.handlerStyle}>
        <Text style={{fontSize: 28, marginBottom: 40}}>Add a New Goal</Text>
     <TextInput
      placeholder="Enter Goals"
      onChangeText={(text) => setEnteredText(text)}
      value={enteredText}
      style={styles.textInputStyle}
     />

     <View style={styles.buttonView}>
      <Button title="Cancel" onPress={props.cancelPressed} />
      <Button
       title="Add"
       //onPress={() => { props.addGoal(enteredText) }} //Option 1
       onPress={addGoalHandler} //Option 2
      />
     </View>
    </View>
   </Modal>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: "lightblue",
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    width: "80%",
  },
  handlerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonView:
  {
    flexDirection: 'row'
  }
});

export default GoalInput;