import React from 'react';    
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export function ButtonColor(props) {

  return (
    <TouchableOpacity 
      style={props.active ? {...styles.buttonColor, backgroundColor: '#6FCF97'} : {...styles.buttonColor, backgroundColor: '#D9D9D9'}}
      onPress={() => {
        props.onPress(props.value)
      }}
    >
      <Text 
        style={props.active ? {...styles.buttonText, color:"#fff"} : styles.buttonText}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  buttonColor: {
    width: 219,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 13,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18
  }
})