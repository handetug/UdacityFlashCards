import React from 'react';
import { View , Text, StyleSheet,TouchableOpacity} from 'react-native';
import { red,pink,orange } from '../Util/Color'

export default function Score({ correctAnswers, incorrectAnswers, restartQuiz, navigation }) {
    const score = Math.round((correctAnswers * 100) / (correctAnswers + incorrectAnswers));
    return (
    <View style={styles.container}>
        <Text style={styles.header}>Your score:</Text>
        <Text style={styles.result}>{score}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => restartQuiz()}>
             <Text style={styles.back}>Restart</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.goBack()}>
             <Text style={styles.back}>Back to Deck</Text>
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
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    back: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:pink,
        borderColor:'purple', 
        borderWidth:2, 
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color:orange
    },
    result: {
        fontSize: 50,
        color: red,
        textAlign: 'center'
    },
    actions: {
        marginTop: 50
    }
});