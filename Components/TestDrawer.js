import Accountant from './Screens/Accountant';
import CardEditHistory from './Screens/ManageRequest/CardEditHistory';
import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Picker,
    TouchableOpacity,
    Image,
    Switch,
    Button,
    ScrollView
} from 'react-native';
import { createDrawerNavigator ,createStackNavigator,DrawerNavigator} from 'react-navigation';
import DashBoard from './Screens/ManageRequest/DashBoard';
import Arlam from './Screens/ManageRequest/Arlam';
import Login from './Login/Login';
const MyApp = createDrawerNavigator({
    Accountant: {
      screen: Accountant,
    },
    CardEditHistory: {
        screen: CardEditHistory,
      },
      Arlam:{
        screen:Arlam,
      },
});

const TestLogIn=createStackNavigator({
    Hey:{
      screen:Login,
    },
    Hello: {
      screen: MyApp,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  })
export default class TestDrawer extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
            <MyApp/>
            </View>
        );
    }
}