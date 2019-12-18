import React, { Component } from 'react'
import { View , Text, StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { pink, blue ,purple, orange,gray,white} from '../Util/Color'

class DeckEdit extends Component {
    render() {
      const { navigation, deck } = this.props;
      return (
      <View style={styles.container}>
          <View>
            <Text style={styles.title}>{deck.name}</Text>
            <Text style={styles.cardCount}>Card Counts:{deck.cards.length}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('CardAdd', { deckId: deck.id })} style={styles.button}>
            <Text style={styles.newCard}>Add New Card</Text>
            </TouchableOpacity>
          {deck.cards.length !== 0 && (
           <TouchableOpacity onPress={() => navigation.navigate('Quiz', { deck })} style={styles.button}>
           <Text style={styles.quiz}>Start Quiz</Text>
           </TouchableOpacity>)}
            </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color:orange
  },
  cardCount: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
    color:blue
  },
  quiz: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
    color:pink
  },
  newCard: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
    color:purple,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: gray,
    backgroundColor: white,
  }
});

const mapStateToProps = (state, {navigation}) => ({
    deck: state[navigation.getParam('deckId')]
});
  
export default connect(mapStateToProps)(DeckEdit);