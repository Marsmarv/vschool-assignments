import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const {goalContainer, textContainer} = styles
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = enteredText => setEnteredGoal(enteredText)

  return(
    <View style={ goalContainer }>
      <TextInput 
        placeholder="Course Goal" 
        style={ textContainer } 
        onChangeText={ goalInputHandler }
      />
      <Button title="ADD" onPress={ () => props.AddGoal(enteredGoal) }/>
      {/* <Button title="ADD" onPress={ props.AddGoal.bind(this, enteredGoal) }/> */}
      {/* alternatively but i don't like how this looks. */}
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default GoalInput