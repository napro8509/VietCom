import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
const {height}=Dimensions.get('window');
const headerBar=height/14;
export default class Header extends Component {
  render() {
    return (
      <View style={styles.head}>
        <View style={styles.left}>
        <Image style={styles.menuicon}
             source={require('../../src/icon/menu_icon.png')}
             resizeMode='contain'
             />
        </View>

        <View style={styles.mid}>
        <Text style={styles.dashboard}>
          Dashboard
          </Text>
        </View>

        <View style={styles.right}>
        <Image style={styles.menuicon}
             source={require('../../src/icon/bell_icon.png')}
             resizeMode='contain'
             />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    head:{
        flexDirection:'row',
        height:headerBar,
        justifyContent:'space-between',
        backgroundColor:'#005391'
    },
    left:{
      width:headerBar,
      height:headerBar,
      justifyContent:'center',
      alignItems:'center'
    },
    menuicon:{
      flex:1,
      width:height/20,
      height:height/20,
    },
    mid:{
      justifyContent:'center',
    },
    dashboard:{
      color:'white',
      fontSize:20,
    },
    right:{
      width:height/10,
      justifyContent:'center',
      alignItems:'center'
    },
});
