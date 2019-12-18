import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { getDecks} from '../Actions/actionDml'
import { orange ,pink} from '../Util/Color'
import {  getDeckItem } from '../Util/Api'

class DeckList extends Component {
    componentDidMount() {
        console.log(this.props.decks);
        getDeckItem() //get decks
          .then(data => {
            this.props.getDecks(data);
          })
          .then(() =>
            this.setState(() => ({
              ready: true
            }))
          );
      }
      state = {
        ready: false
      };

   
      renderItem = ({ item }) => {
        const { navigation } = this.props;
        return (
          <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            onPress={() =>
            navigation.navigate('DeckEdit', { deckId: item.id, name: item.name })
             }>
            <Text style={styles.text}>Title: {item.name}</Text>
            <Text style={styles.text}>Card Counts: {item.cards.length}</Text>
            </TouchableOpacity>
          </View>
        );
      };
    
      render() {
        const { decks, navigation } = this.props
        //control deck is not null or null 
        return Object.values(decks).length > 0 ? (
          <View style={styles.container}>
            <FlatList
              data={decks && Object.values(decks)}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        ) :
        (
          <View style={styles.container}>
            <Text style={styles.title}>Please add a deck!</Text>
            <TouchableOpacity  onPress={() => { navigation.navigate('DeckAdd')}}>
            <Text style={styles.createbtn}>CREATE</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
      },
      title: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      createbtn: {
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: pink,
      },
      button: {
        borderRadius: 5,
        color:pink,
        borderColor:'purple', 
        borderWidth:2, 
        margin: 10,
        padding: 10,
        width: 200
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:orange
      }
    })
    
    function mapDispatchToProps(dispatch){
      return {
        receiveDecks: (decks) => dispatch(receiveDecks(decks))
      }
    }
    
    const mapStateToProps = decks => ({ decks });
    
    export default connect(mapStateToProps, mapDispatchToProps)(DeckList)