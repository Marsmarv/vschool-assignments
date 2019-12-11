import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'

export default function App() {
  const {container, goalContainer, textContainer}  = styles
  //destructuring the styles out of each styleSheet object
  
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => setEnteredGoal(enteredText)
  const addGoalHandler = () => {
  //setCourseGoals -- gauranteed to work because react gives git you the gauranteed latest state snapshot before applying state change
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]) 
  }
  // setCourseGoals( [...courseGoals, enteredGoal] ) ;; this would work as well.

  return (
    <View style={ container }>
      <View style={ goalContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ textContainer } 
          onChangeText={ goalInputHandler }
        />
        <Button title="ADD" onPress={ addGoalHandler }/>
      </View>
      <FlatList       
        keyExtractor={(item, index) => item.id}
        data={ courseGoals } 
        renderItem={ itemData => (
          <GoalItem title={itemData.item.value} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

//commenting on closing out this branch