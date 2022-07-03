import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Header } from '../components/Header';

export function Configs({navigation, route}) {

  console.log(route.params)

  return (
    <View style={styles.container}>
      <Header title="Configurações"/>
      <Text style={styles.title}>Opções</Text>
      <View style={styles.buttonsContent}>
        <TouchableOpacity 
          style={styles.button}
          onPress = {() => navigation.navigate("Fonts", {
            color: route.params.color, 
            fontSize: route.params.fontSize
          })}
        >
          <Text style={styles.buttonDescription}>Confirações de Fontes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress = {() => navigation.navigate("Colors")}
        >
          <Text style={styles.buttonDescription}>Confirações de Cores</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: { 
    fontSize: 24,
    marginTop: 88,
    marginBottom: 20,
    marginLeft: 15
  },

  buttonsContent:{ 
    width: Dimensions.get('screen').width,
    alignItems: 'center'
  },

  button: {
    width: 332,
    height: 50,
    borderRadius: 13,
    backgroundColor: '#d9d9d9',
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonDescription: {
    fontSize: 18
  }
})