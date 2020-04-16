import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
//Components
import GoalItem from '../components/GoalItem';
import GoalInput from "../components/GoalInput";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      isVisible: false
    };
  }

  saveGoal = (textVal) => {
    this.setState({
      goals: [...this.state.goals,
        {
          id: Math.floor(Math.random() * 999).toString(),
          goal: textVal
        }],
      isVisible: false
    });
  };

  deleteGoal = (itemID) =>
  {
    this.setState({
      goals: this.state.goals.filter(
        currentGoal => currentGoal.id !== itemID)
    })
  };

  modalExit = () =>
  {
    this.setState({ isVisible: false });
  }
  

  render() {
    return (
      <View style={styles.containerView}>
        
      <Button
       title="Add New Goal"
       onPress={() => {this.setState({ isVisible: true });}}
      />

      <GoalInput //Component
       addGoal={this.saveGoal}
       visible={this.state.isVisible}
       cancelPressed={this.modalExit}
      />

      <FlatList
       data={this.state.goals}
       keyExtractor={key => key.id}
       renderItem={({ item }) => {
        return (
         <GoalItem //Component
          itemGoal={item.goal}
          //deleteGoal={this.deleteGoal} id = {item.id}       // Option 1
          //deleteGoal={this.deleteGoal.bind(this, item.id)} //Option 2
          deleteGoal={() => {this.deleteGoal(item.id);}}    //Option 3
         />
        );
       }}
      />
     </View>
    );
  }
}



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});

export default HomeScreen;

