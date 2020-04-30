import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
//Components
import GoalItem from '../components/GoalItem';
import GoalInput from "../components/GoalInput";

const HomeScreen = () =>
{
  
  const [goals, setgoals] = useState([])
  const [isVisible, setisVisible] = useState(false)


  const saveGoal = (textVal) => {
  //Arrow function to set goals to be 100% guaranteed of current state snapshot
    setgoals(currentGoals => [...currentGoals,
        {
          id: Math.floor(Math.random() * 999).toString(),
          goal: textVal
        }])
      setisVisible(false)
  };

  const deleteGoal = (itemID) =>
  {
    setgoals(goals.filter(currentGoal => currentGoal.id !== itemID))
  };


  modalExit = () => { setisVisible(false) }

    return (
      <View style={styles.containerView}>
        
      <Button
       title="Add New Goal"
       onPress={() => setisVisible(true)}
      />

      <GoalInput //Component
       addGoal={saveGoal}
       visible={isVisible}
       cancelPressed={modalExit}
      />

      <FlatList
       data={goals}
       keyExtractor={key => key.id}
       renderItem={({ item }) => {
        return (
         <GoalItem //Component
          itemGoal={item.goal}
          //deleteGoal={deleteGoal} id = {item.id}       // Option 1
          //deleteGoal={deleteGoal.bind(this, item.id)} //Option 2
          deleteGoal={() => {deleteGoal(item.id)}}    //Option 3
         />
        );
       }}
      />
     </View>
    );
  }



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});

export default HomeScreen;

