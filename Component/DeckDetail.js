import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet ,TouchableOpacity} from "react-native";
import { green, gray, white, blue , orange} from "../Util/Color";

function Button({option, onPress, style = {}}) {
    return(
        <TouchableOpacity style = {[styles.btnStyle, style]} onPress = {onPress}>
            {option}
        </TouchableOpacity>
    )   
}

class DeckDetail extends Component {
  render() {
    const { deck, navigation } = this.props;
    const count = deck.cards?deck.cards.length:0
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.count}>{`${count} Card`}</Text>
        </View>
        <View style={styles.actions}>
          {count.length !== 0 && (
            <Button style={{ backgroundColor: blue }}
              onPress={() => {
                navigation.navigate("Quiz", { title:deck.title });
              }}>
              <Text style={styles.textButton}>Start Quiz</Text>
            </Button>
          )}
          <Button style={{ backgroundColor: count.length !== 0 ? orange : green }}
            onPress={() => {
              navigation.navigate("AddCard", { title: deck.title });
            }}>
            <Text style={styles.textButton}>Add Card</Text>
          </Button>
        </View>
      </View>
    );
  }
}


function mapStateToProps({decks}, {navigation}) {
   const title = navigation.state.params['title']
    return {
      deck:decks[title],
      navigation
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
      marginBottom: 5
    },
    count: {
      fontSize: 20,
      color: gray,
      textAlign: "center",
      marginBottom: 5
    },
    actions: {
      marginTop: 20
    },
    textButton:{
      fontSize: 15,
      paddingLeft:30,
      color: orange,
    },
    btnStyle: {
            height: 45,
            width:160,
            textAlign:"center",
            borderRadius:10,
            padding: 10,
            backgroundColor : blue,
            marginLeft :50,
            marginRight:50,
            marginTop :20
        },

});
export default connect(mapStateToProps)(DeckDetail)