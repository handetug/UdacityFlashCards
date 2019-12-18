import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { green, red, white, purple} from '../Util/Color'

export default function Result({ recordCard }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>True or False?</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnTrue} onPress={() => recordCard(true)}>
          <Text style={styles.correctBtnText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFalse} onPress={() => recordCard(false)}>
          <Text style={styles.incorrectBtnText}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color:purple
    },
    actions: {
      marginTop: 10
    },
    correctBtnText: {
      textAlign: 'center',
      color: green,
    },
    incorrectBtnText: {
      textAlign: 'center',
      color: red,
    },
    btnTrue: {
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'pink',
      borderColor: 'white',
      margin: 10,
      width: 100
    },
    btnFalse: {
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'white',
      borderColor: 'red',
      margin: 10,
      width: 100
    },
});