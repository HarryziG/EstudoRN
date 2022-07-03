import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {ConfigContext} from '../context/configs';

import { Header } from '../components/Header';
import {ButtonFont} from '../components/ButtonFont';

export function Fonts ({navigation}) {
  const {fontSize, setFontSize} = useContext(ConfigContext);
  
  function buttonPress(value) {
    setFontSize(value);
  }

  return(
    <View>
      <Header title="Configurações de fontes" />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {navigation.goBack()}}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>

      <Text style= {{...styles.title, fontSize: fontSize}}>Tamanho das Fontes</Text>

      <View style= {styles.buttonsContent}>
        <ButtonFont active={fontSize==16 ? true : false} onPress={buttonPress} value={16} />
        <ButtonFont active={fontSize==20 ? true : false} onPress={buttonPress} value={20}/>
        <ButtonFont active={fontSize==24 ? true : false} onPress={buttonPress} value={24}/>
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
    marginTop: 34,
    marginBottom: 15,
    marginLeft: 15
  },

  buttonsContent: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  buttonFont: {
    width: 89,
    height: 34,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9'
  }
})  