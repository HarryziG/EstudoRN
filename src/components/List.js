import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

export function List(props) {
  return (
    <View style={styles.container}>
      <Text style={{color: props.color, fontSize: props.fontSize}}>{props.title}</Text>
      <FlatList
        data={props.list}
        renderItem={({item}) => <Text style={{color: props.color, fontSize: props.fontSize}}>{'\u2B24' + ' '}{item.key}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 292,
  }
})