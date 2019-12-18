import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, View, Text, StyleSheet,TouchableOpacity,Picker} from 'react-native'
import { white, gray, red ,purple} from '../Util/Color'
import { connect } from 'react-redux'
import { addCard } from '../Actions/actionDml'
import { saveCard } from '../Util/Api'

class CardAdd extends Component {
  state = {
      question: '',
      answer: '',
      message: ''
  };
  

  //submit card of decks
  handleSave = () => {
    if (this.state.question !== '' && this.state.answer !== '' ) {
      deckId = this.props.navigation.getParam('deckId');
      const { question, answer } = this.state;

      this.props.addCard(deckId, question, answer);
      saveCard(deckId, { question, answer });

      this.props.navigation.goBack();

      this.setState({
          question: '',
          answer: ''
      })
    }
    //validation control
    else {
      this.setState({
        message: 'Please fill the form',
        question: '',
        answer: '',
        correct: true
        
      });
    }
  };

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <TextInput
            placeholder='Question'
            style={styles.input}
            value={question}
            onChangeText={question => this.setState({ question })}
          />
          <TextInput
            placeholder='Answer'
            style={styles.input}
            value={answer}
            onChangeText={answer => this.setState({ answer })}
          />                
          </View>
          <View>
              <Text style={styles.message}>{this.state.message}</Text>
          </View>
          <View>
              <TouchableOpacity onPress={this.handleSave}>
             <Text  style={styles.save}>Save</Text>
           </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  message: {
    color: red,
    textAlign: 'center'
  },
  save: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
    color:purple,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: gray,
    backgroundColor: white,
  },
  input: {
    height: 40, 
    width: 320, 
    borderColor:'gray', 
    borderWidth:1, 
    margin: 15, 
    textAlign:'center'
  }
});
  
const mapDispatchToProps = dispatch => ({
    addCard: (deckId, question, answer) => dispatch(addCard(deckId, question, answer))
});
  
export default connect(null, mapDispatchToProps)(CardAdd);