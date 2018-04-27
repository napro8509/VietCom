import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
const {height,width}=Dimensions.get('window');
const headerBar=height/5;
export default class HeaderWait extends Component {
  render() {
    return (
    <View style={{height:headerBar,paddingHorizontal:10,backgroundColor:'#005391'}}>
      <View>
      <View style={styles.head}>
        <Image style={styles.menuicon}
             source={require('../../src/icon/forward.png')}
             resizeMode='contain'
             />

        <View style={styles.mid}>
        <Text style={styles.dashboard}>
          Trễ Hạn
          </Text>
        </View>
        <View>
        <Image style={styles.menuicon}
             source={require('../../src/icon/bell_icon.png')}
             resizeMode='contain'
             />
        <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: '50%',
                                            height: '50%',
                                        }}
                                        >
                                        <View style={{flex:1, backgroundColor:'red',borderRadius:4,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:10,color:'#FFF'}}>30
                                          </Text>
                                          </View>
                                        </View>
      </View>
      </View>
      <View style={{borderBottomWidth:1,height:1,borderColor:'#DFDFDF',marginVertical:10}}>

        </View> 
      </View>
      <View style={styles.formCalendar}>
        <View>
        <Text style={styles.text}>Từ ngày</Text>
        <View style={styles.calendarContainer}>
            <Text style={{margin:5,color:'#FFF',fontSize:17}}>01/03/2018</Text>
            <Image style={styles.calenderIcon}
                source={require('../../src/icon/calendar.png')}
                resizeMode='contain'>
            </Image>
        </View>
        </View>
        <View >
        <Text style={styles.text}>Đến ngày</Text>
        <View style={styles.calendarContainer}>
            <Text style={{margin:5,color:'#FFF',fontSize:17}}>01/03/2018</Text>
            <Image style={styles.calenderIcon}
                source={require('../../src/icon/calendar.png')}
                resizeMode='contain'>
            </Image>
        </View>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    head:{
        flexDirection:'row',
        height:headerBar/4,
        justifyContent:'space-between',
        backgroundColor:'#005391',
        alignItems:'center'
    },
    left:{
      width:headerBar/2,
      height:headerBar/2,
      justifyContent:'center',
      alignItems:'center'
    },
    menuicon:{
      width:height/20,
      height:height/20,
    },
    mid:{
      justifyContent:'center',
    },
    dashboard:{
      color:'white',
      fontSize:17,
      fontFamily:'Avevir',
      fontWeight:'bold'
    },
    right:{
      width:height/10,
      justifyContent:'center',
      alignItems:'center'
    },
    formCalendar:{
        flex:1,
        backgroundColor:'#005391',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    calendarContainer:{
        marginTop:5,
        height:height/16,
        width:width/2-20,
        borderColor:'#DFDFDF',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

    },
    calenderIcon:{
        height:height/22,
        width:height/22,
    },
    text:{
      color:'#DFDFDF'
    }
});
