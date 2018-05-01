import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
const {height,width}=Dimensions.get('window');
const headerBar=height/20;
export default class FilterComponent extends Component {
  render() {
    return (
      <View style={styles.head}>

      <View style={styles.left}>
      <Text style={{color:'#FFF',fontSize:12}}>Tổng </Text>
      <Text style={{color:'yellow',fontSize:12}}>135 phiếu</Text>
      </View>

      <View style={styles.right}>
      <Image
      source={require('../../src/icon/filter.png')}
      style={{height:headerBar/2,width:headerBar/2}}
      resizeMode='contain'
      />
      <Text style={{color:'#FFF',fontSize:12}}> Bộ lọc</Text>
      </View>

      </View>
    )
}
}
const styles=StyleSheet.create({
    head:{
        height:headerBar,
        backgroundColor:'#005391',
        flexDirection:'row',
        paddingHorizontal:10
    },
    left:{
      flex:1,
      flexDirection:'row',
      alignItems:'center'
    },
    right:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center'
    }
})