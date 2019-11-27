import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal])
  }
  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.textContainer} 
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 50
  },
  textContainer:{
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  goalContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
