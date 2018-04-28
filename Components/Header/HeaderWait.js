import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  DatePickerAndroid,
  TouchableOpacticy,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
const {height,width}=Dimensions.get('window');
const headerBar=height/5;
export default class HeaderWait extends Component {
  constructor(props){
    super(props)
    this.state = {
      fromDate:"1-2-2017",
      toDate:"2-2-2017"
    }
  } 
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
        <DatePicker
        style={styles.calendarContainer}
        date={this.state.fromDate}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-05-2016"
        maxDate="02-02-2019"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginLeft: 0

          },
          dateInput: {
            alignItems:'flex-start'
          },
          dateText:{
            marginLeft:10,
            color:'white',
            textAlign:'left'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({fromDate: date})}}
      />
        </View>
        
        <View >
        <Text style={styles.text}>Đến ngày</Text>
        <DatePicker
        style={styles.calendarContainer}
        date={this.state.toDate}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-06-2018"
        maxDate="04-03-2020"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginLeft: 0

          },
          dateInput: {
            alignItems:'flex-start'
          },
          dateText:{
            marginLeft:10,
            color:'white',
            textAlign:'left'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({toDate: date})}}
      />
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
        width:width/2-50,
        borderColor:'#DFDFDF',
        borderWidth:1,
        borderRadius:5
    },
    calenderIcon:{
        height:height/22,
        width:height/22,
    },
    text:{
      color:'#DFDFDF'
    }
});
