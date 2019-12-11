import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const {container}  = styles
  const [courseGoals, setCourseGoals] = useState([])
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]) 
  }
  // setCourseGoals( [...courseGoals, enteredGoal] ) ;; this would work as well.
  const delGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={ container }>
      <GoalInput AddGoal={addGoalHandler}/>
      <FlatList       
        keyExtractor={(item, index) => item.id}
        data={ courseGoals } 
        renderItem={ itemData => (
          <GoalItem 
            id={itemData.item.id} 
            onDelete={delGoalHandler} 
            title={itemData.item.value} 
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});