import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
  const {listItem} = styles
  const {onDelete, title, id} = props
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDelete.bind(this, id)}>
      <View style={ listItem }>
        <Text>{ title }</Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
  }
})

export default GoalItem