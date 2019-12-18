import React from 'react';
import { Platform, View, StatusBar } from 'react-native';
import { blue,pink } from './Util/Color'
import { Provider } from 'react-redux'
import reducer from './Reducer/Main'
import middleware from './Middleware'
import { createStore } from 'redux'
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import { setLocalNotification } from  './Util/Helper'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import DeckList from "./Component/DeckList";
import DeckAdd from "./Component/DeckAdd";
import CardAdd from "./Component/CardAdd";
import DeckEdit from "./Component/DeckEdit";
import DeckDetail from "./Component/DeckDetail";
import Deck from './Component/Decks';
import Quiz from "./Component/Quiz";
import { AsyncStorage } from 'react-native'

const MainStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

//Storage clenan
AsyncStorage.clear();

const Tabs = createBottomTabNavigator({
      DeckList: {
        screen: DeckList,
        navigationOptions: {
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        },
      },
      DeckAdd: {
        screen: DeckAdd,
        navigationOptions: {
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
      },
    }, 
    {
      navigationOptions: {
        header: null
      },
      tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? blue : pink,
        style: {
          height: 60,
          padding:10,
          backgroundColor: Platform.OS === 'ios' ? pink : blue,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 2
        }
      }
    }
  );

  //declare navigation and screen
  const MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs,
    }, 
    Deck:{
      screen: Deck,
    },
    DeckDetail:{
      screen: DeckDetail,
    },
    DeckEdit:{
      screen: DeckEdit,
    },
    CardAdd: {
      screen: CardAdd,
    },
    Quiz: {
      screen: Quiz,
    }
  }
);
 
const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
      <MainStatusBar backgroundColor={blue}/>
      <View style={{ flex: 1 }}>
        <AppContainer /> 
      </View>
    </Provider>

   
    )
  }  

  //set the notification
  componentDidMount(){
    setLocalNotification()
  }
}

export default App;