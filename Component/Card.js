import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { lightPurp,pink } from '../Util/Color'

class Card extends Component {
  state = {
    showQuestion: true
  };
  

  //Question - Answer animation show
  toggleQuesAns = () => {
    this.setState(state => ({
      showQuestion: !state.showQuestion
    }));
  };
  
  render() {
    const { showQuestion } = this.state;
    const { card } = this.props;
    let showText = 'See the question'
    if (showQuestion) {
      showText = 'See the answer'
    }
      
    return (
      <View style={styles.container}>
        <View>
          {this.state.showQuestion ? (
          <Text style={styles.text}>{card.question}</Text>
          ) : (
          <Text style={styles.text}>{card.answer}</Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.toogle} onPress={this.toggleQuesAns}>
            <Text style={styles.showText}>{showText}</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}


//styles 
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
    color: lightPurp
  },
  showText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: pink
  },
  toogle: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'orange',
    borderColor: 'orange',
    margin: 10,
    width: 250
  },
});
  
export default Card;