import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const {goalContainer, textContainer} = styles
  const {visible, cancel} = props
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = enteredText => setEnteredGoal(enteredText)
  const addGoalHandler = () => {
    props.AddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return(
    <Modal visible={visible} animationType="slide">
      <View style={ goalContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ textContainer } 
          onChangeText={ goalInputHandler }
        />
        <Button title="CANCEL" color="red" onPress={ cancel } />
        <Button title="ADD" onPress={ addGoalHandler }/>
        {/* <Button title="ADD" onPress={ props.AddGoal.bind(this, enteredGoal) }/> */}
        {/* alternatively but i don't like how this looks. */}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  },
  goalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default GoalInput