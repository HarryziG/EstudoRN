import React,{useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonColor } from '../components/ButtonColor';

import { Header } from '../components/Header';

import { ConfigContext } from '../context/configs';

export function Colors ({navigation}) {
  const {color,setColor} = useContext(ConfigContext);

  function buttonPress(value) {
    setColor(value);
  }


  return(
    <View>
     <Header title="Configurações de cores" />
     <TouchableOpacity 
        style={styles.button}
        onPress={() => {navigation.goBack()}}
      >
        <Icon  name="arrow-left" size={30} />
      </TouchableOpacity>

      <Text style={{...styles.title, color}}>Configurações de Cores</Text>

      <View style={styles.buttonContent}>
        <ButtonColor active={color === "#000" ? true : false} value={"#000"} onPress={buttonPress} title="Cores Escuras" />
        <ButtonColor active={color === "#787878" ? true : false} value={"#787878"} onPress={buttonPress} title="Cores Claras" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 43,
    height: 43, 
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5
  },

  title: {
    fontSize: 24,
    marginTop: 34,
    marginBottom: 15,
    marginLeft: 15
  },

  buttonContent: {
    marginLeft: 23
  },
})