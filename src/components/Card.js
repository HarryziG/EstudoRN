import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';

function message(sintoma) {
  Alert.alert(
    "Botão acionado",
    `Estou sentindo ${sintoma}`
    )
}

export function Card (props) {
  const sintoma = props.sintoma;
  const img = props.img;
  return(
    <TouchableOpacity onPress={() => {message(sintoma)}} style={styles.button}>
      <Image 
        source={img}
        style={styles.image}
      />
      <Text style={styles.symptom}>{sintoma}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FAFAFA",
    width: 120,
    height: 120,
    marginBottom: 24,
    borderRadius: 8,
    alignItems: "center"
  },
  image: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  symptom: {
    fontSize: 13
  }
})