import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const {goalContainer, textContainer, buttonContainer, button} = styles
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
        <View style={buttonContainer}>
          <View style={button}>
          <Button title="CANCEL" color="red" onPress={ cancel } />
          </View>
          
          <View style={button}>
          <Button title="ADD" onPress={ addGoalHandler }/>
          </View>
        </View>

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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
  },
  button: {
    width: "60%",
  }
})

export default GoalInput