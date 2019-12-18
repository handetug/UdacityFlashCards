import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { blue,orange, pink,red} from "../Util/Color";
import { addDeck} from '../Actions/actionDml'
import { connect } from 'react-redux'
import { saveDeck } from '../Util/Api'


class DeckAdd extends Component {
    state = {
        input: ''
      };
    
      //generate random number
      RandomFunct() {
        return Math.floor(Math.random()*(100000-0+1)+0).toString()
      }
    

     //change the input function
      handleChange = input => {
        this.setState(() => ({
          input
        }));
      };
    

      //submit deck
      handleSave = () => {
        if (this.state.input !== '') {
    
          deck = {
            id: this.RandomFunct(),
            name: this.state.input,
            cards: []
          }
          this.props.addDeck(deck.id, deck.name);
          saveDeck(deck)
    
          this.props.navigation.navigate('DeckEdit', {
            deckId: deck.id
          });
    
          this.setState({
            input: ''
          });
    
        } else {
          this.setState({
            input: ''
          });
        }
      };
    
      render() {
        const { input } = this.state
    
        return(
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View>
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
            style={styles.input}
            placeholder='Title of New Deck'
            onChangeText={this.handleChange}
            value={input}
            />
            <View>
              <Text style={styles.message}>{this.state.message}</Text>
            </View>
            <TouchableOpacity onPress={this.handleSave}>
            <Text style={styles.btn}>Add Deck</Text>
          </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        )
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
      },
      title: {
        fontSize: 25, 
        color: 'black', 
        textAlign: 'center',
        color: orange,
      },
      input: {
        height: 60, 
        width: 350, 
        borderColor:'gray', 
        borderWidth:1, 
        margin: 15, 
        textAlign:'center',
        color: blue,
        fontSize: 18, 
      },
      message: {
        color: red,
        textAlign: 'center'
      },
      btn: {
        color: pink,
        fontSize: 25, 
        textAlign: 'center'
      }
    });
    
    const mapDispatchToProps = dispatch => ({
      addDeck: (id, name) => dispatch(addDeck(id, name))
    });
    
    export default connect(null, mapDispatchToProps)(DeckAdd)