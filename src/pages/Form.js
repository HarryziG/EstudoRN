import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

import {Header} from '../components/Header';
import {Card} from '../components/Card';


export function Form({navigation, route}) {

  return(
    <View style={styles.container}>
      <Header title="Segunda Tela" />
      <Text style={styles.title}>O que você está sentindo?</Text>
      <View style={styles.buttonsContainer}>
        <Card sintoma="Fraqueza" img={img1} />
        <Card sintoma="Formigamento" img={img2}/>
        <Card sintoma="Ansiedade" img={img3}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 61,
    marginBottom: 12
  }, 
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 40
  }
})