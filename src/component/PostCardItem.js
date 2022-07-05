import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const Button = ({ onPress, style, icon }) => (
  <TouchableOpacity style={style} onPress={onPress}>
   
  </TouchableOpacity>
)

export default function PostCardItem({ username, email, password, onEdit, onDelete }) {

  return (
  
      <View style={styles.rowView}>
        <View>
          <Text>username: {username}</Text>

          <Text>email: {email}</Text>

        </View>

        
        <View style={styles.rowView}>
          <Button
            onPress={onEdit}
            icon="edit"
            style={{ marginHorizontal: 16 }} />
          <Button onPress={onDelete} icon='trash-2' />
        </View>
      </View>
   
  )
}

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    margin: 16,
    elevation: 4,
    borderRadius: 8
  },
  title: {
    fontSize: 18,
  },
})