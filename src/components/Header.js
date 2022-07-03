import React from 'react';
import {View, StyleSheet, Dimensions, StatusBar, Text} from 'react-native';

export function Header(props) {
  return(
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get('screen').width,
    height: 50 + StatusBar.currentHeight,
    backgroundColor: '#6FCF97',
    paddingTop: StatusBar.currentHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#ffff",
    fontSize: 18
  }
})