import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Button, Flatlist } from 'react-native';

export default class HomeScreen extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			text: '',
			goals: []
		};
	}


	//TODO: method to handle user input
	enteredText = (text) => {
		this.setState({ text });
		console.log(this.state.text)
	};
	
	//TODO: method to save goals to array
	saveGoal = () => {

	};


	render()
	{
		return (
      <View style={styles.containerView}>
		<View style={styles.handlerStyle}>
          <TextInput
            placeholder="Enter Goals"
            onChangeText={(text) => { this.enteredText(text) }}
			value={this.state.text}
            style={styles.textInputStyle}
          />
          <Button title="Add" onPress={() => {}} />
				</View>
			
      </View>
    );
	}
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  textInputStyle: {
    borderColor: "lightblue",
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
	margin: 10,
	width: "80%"
  },
	handlerStyle: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems:'center'
  }
});