import React, { Component } from 'react';
import { View , Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Card from './Card';
import Result from './Result'
import Score from './Score'
import { LocalNotification, setLocalNotification } from '../Util/Helper'

class Quiz extends Component {

    state={
        correctAnswers: 0,
        incorrectAnswers: 0,
        currCardIndex: 0,
    }


    //start the again quiz
    restartQuiz = () => {
        this.setState({
            correctAnswers: 0,
            incorrectAnswers: 0,
            currCardIndex: 0
        });
    }


    //calculate remain count questions
    getRemainingCount = () => {
        const { totalQuestions } = this.props;
        const { correctAnswers, incorrectAnswers } = this.state;
        const remainingQuestions = totalQuestions - (correctAnswers + incorrectAnswers + 1);
        return remainingQuestions;
    };

    recordCard = isCorrect => {
        let { correctAnswers, incorrectAnswers, currCardIndex } = this.state;
        if (isCorrect) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        currCardIndex++;
        this.setState(state => ({
            correctAnswers,
            incorrectAnswers,
            currCardIndex
        }));
    }

    render() {
        const { deck, totalQuestions } = this.props
        const currentCard = deck.cards[this.state.currCardIndex]

        if (this.state.currCardIndex >= totalQuestions) {
            LocalNotification();
            setLocalNotification();
            return (
                <Score
                correctAnswers={this.state.correctAnswers}
                incorrectAnswers={this.state.incorrectAnswers}
                restartQuiz={this.restartQuiz}
                navigation={this.props.navigation}
                />
            );
        }
        else {
            return (
                <View style={styles.container}>
                  <Card card={currentCard} />
                  <Text style={styles.text}>{this.getRemainingCount()} card remains</Text>
                  <Result recordCard={this.recordCard} />
                </View>
            );
        }  
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

function mapStateToProps(state, { navigation }){
    const { deck } = navigation.state.params
    return {
        deck: deck,
        totalQuestions: deck.cards.length
    }
}

export default connect(mapStateToProps)(Quiz)