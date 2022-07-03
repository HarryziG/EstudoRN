import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function ButtonFont(props) {

  function buttonValue() {
    props.onPress(props.value);
  }

  

  return(
    <TouchableOpacity 
      onPress={buttonValue} 
      style={props.active ? {...styles.buttonFont, backgroundColor: '#6FCF97'} : {...styles.buttonFont, backgroundColor: '#D9D9D9'}}
    >
      <Text style={props.active && {color:"#fff"}}>{props.value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonFont: {
    width: 89,
    height: 34,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
})
