import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import DatePicker from 'react-native-datepicker';
const {height,width}=Dimensions.get('window');
export default class App extends Component { 
    constructor(props){
        super(props)
        this.state = {date:"2016-05-15"}
      } 
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
        style={styles.calendarContainer}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  calendarContainer:{
  marginTop:5,
  height:height/16,
  width:width/2-20,
  borderColor:'#DFDFDF',
  borderWidth:1,
  }
});
