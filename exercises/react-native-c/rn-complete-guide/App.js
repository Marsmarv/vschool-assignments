import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const {container, goalContainer, listItem, textContainer}  = styles
  //destructuring the styles out of each styleSheet object

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => setEnteredGoal(enteredText)
  const addGoalHandler = () => setCourseGoals(currentGoals => [...currentGoals, enteredGoal]) 
  //gauranteed to work because react gives you the gauranteed latest state snapshot before applying state change
  // setCourseGoals([...courseGoals, enteredGoal]) ; this works fine though 

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
        data={ courseGoals } 
        renderItem={ itemData => (
          <View style={ listItem }>
            <Text>{ itemData.item }</Text>
          </View>
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
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
  }
});
