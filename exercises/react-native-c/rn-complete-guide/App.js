import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const {container}  = styles
  const [courseGoals, setCourseGoals] = useState([])
  const [addModal , setAddModal] = useState(false)

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {return}
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]) 
    setAddModal(false)
  }
  const delGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }
  const cancelGoalHandler = () => setAddModal(false)

  return (
    <View style={ container }>
      <Button title="Add New Goal" onPress={() => setAddModal(!addModal)}/>
      <GoalInput
        visible={addModal} 
        AddGoal={addGoalHandler} 
        cancel={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={ courseGoals } 
        renderItem={ itemData => {
          const {id, value} = itemData.item
          return (
          <GoalItem 
            id={id} 
            onDelete={delGoalHandler} 
            title={value} 
          />
          )}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});