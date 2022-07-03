import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { List } from '../components/List';

import {ConfigContext} from '../context/configs';

export function Home() {
  const {color,fontSize} = useContext(ConfigContext); 
  

  const participantesProj = [
    {key: 'Ana'},
    {key: 'Edney'},
    {key: 'Gabi'},
    {key: 'Jonas'},
    {key: 'Vinícius'}];

  return (
    <View style={styles.container}>
      <Header title= "Início"/>
      <View style={styles.content}>
        <Text style={{...styles.title, fontSize, color}}>Desenvolvimento do App</Text>
        <List 
          title = {"Lista de participantes do projeto:"}
          list = {participantesProj}
          color = {color}
          fontSize = {fontSize}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 40,
    marginBottom: 40
  }
})
