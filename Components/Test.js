
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
    Button,
    ScrollView
} from 'react-native';

import { DrawerNavigator,DrawerItems, SafeAreaView } from 'react-navigation';
import ManageRequestScreen from './Screens/ManageRequest/ManageRequestScreen';
import Accountant from './Screens/Accountant';
import DashBoard from './Screens/ManageRequest/DashBoard';
import CardEditHistory from './Screens/ManageRequest/CardEditHistory';
import CardDetail from './Screens/ManageRequest/CardDetail';
import Filter from './Screens/ManageRequest/Filter';
import Arlam from './Screens/ManageRequest/Arlam';
import WaitApprove from './Screens/WaitApprove';
import ManageContract from './Screens/ManageContract';
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

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{padding:10,justifyContent:'center',alignItems:'center'}}>
      <Image
        source={require('../src/icon/profile.png')}
        style={{width:100,height:100,borderRadius:100,}}
      />
      <Text style={{color:'black'}}>Jonah Le</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image
        source={require('../src/icon/email.png')}
        style={{width:20,height:20}}
      />
      <Text style={{color:'black',padding:5}}>legiona14@gmail.con</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image
        source={require('../src/icon/phone.png')}
        style={{width:20,height:20}}
      />
      <Text style={{color:'black',padding:5}}>01665809097</Text>
      </View>
      </View>
      <DrawerItems {...props} />

    </SafeAreaView>
  </ScrollView>
);

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
  WaitApprove:{
    screen:WaitApprove
  },
  ManageContract:{
    screen:ManageContract
  }
},{contentComponent:CustomDrawerContentComponent});

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
  container:{
    flex:1
  }
})