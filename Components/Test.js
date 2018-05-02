
import React, { Component } from 'react';
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
    Button
} from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import ManageRequestScreen from './Screens/ManageRequest/ManageRequestScreen';
import Accountant from './Screens/Accountant';
import DashBoard from './Screens/ManageRequest/DashBoard';
import CardEditHistory from './Screens/ManageRequest/CardEditHistory';
import CardDetail from './Screens/ManageRequest/CardDetail';
import Filter from './Screens/ManageRequest/Filter';
import Arlam from './Screens/ManageRequest/Arlam';
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../src/icon/back.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../src/icon/back.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}


const MyApp = DrawerNavigator({
  ManageRequestScreen: {
    screen: ManageRequestScreen,
  },
  Accountant: {
    screen: Accountant,
  },
  DashBoard: {
    screen: DashBoard,
  },
  CardEditHistory: {
    screen: CardEditHistory,
  },
  CardDetail:{
    screen:CardDetail,
  },
  Filter:{
    screen:Filter,
  },
  Arlam:{
    screen:Arlam,
  },
});

export default class Test extends Component{
  render(){
    return(
      <View style={{flex:1}}>
      <MyApp/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  icon:{

  }
})