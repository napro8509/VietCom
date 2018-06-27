import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {withNavigation} from 'react-navigation';
const { height, width } = Dimensions.get('window');
const headerBar = height / 5;

class HeaderWaitEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromDate: "1-2-2017",
      toDate: "2-2-2017",
      title:this.props.title
    }
  }
  
  render() {
    return (
      <View style={{ height: height/6, paddingHorizontal: 10, backgroundColor: '#005391' }}>
        <View>
          <View style={styles.head}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Image style={[styles.menuicon]}
              source={require('../../../../src/icon/back.png')}
              resizeMode='contain'
            />
            </TouchableOpacity>

            <View style={styles.mid}>
              <Text style={styles.dashboard}>
                {this.state.title}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image style={[styles.menuicon,{marginRight:10}]}
                source={require('../../../../src/icon/filter.png')}
                resizeMode='contain'
              />
              <Image style={styles.menuicon}
                source={require('../../../../src/icon/bell_icon.png')}
                resizeMode='contain'
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '25%',
                  height: '50%',
                }}
              >
                <View style={{ flex: 1, backgroundColor: 'red', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#FFF' }}>30</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, height: 1, borderColor: '#DFDFDF', marginVertical: 2 }}>
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
                  alignItems: 'flex-start'
                },
                dateText: {
                  marginLeft: 10,
                  color: 'white',
                  textAlign: 'left'
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ fromDate: date }) }}
            />
          </View>
            <View style={{justifyContent:'center'}}>
            <Text style={styles.text}></Text>
            <Image
            style={{height:30,width:30}}
            source={require('../../../../src/icon/right_arrow.png')}
            resizeMode='contain'
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
              androidMode="spinner"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 0,
                  top: 4,
                  marginLeft: 0

                },
                dateInput: {
                  alignItems: 'flex-start'
                },
                dateText: {
                  marginLeft: 10,
                  color: 'white',
                  textAlign: 'left'
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ toDate: date }) }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    height: headerBar / 4,
    justifyContent: 'space-between',
    backgroundColor: '#005391',
    alignItems: 'center'
  },
  left: {
    width: headerBar / 2,
    height: headerBar / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuicon: {
    width: height / 25,
    height: height / 25,
  },
  mid: {
    justifyContent: 'center',
  },
  dashboard: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Avevir',
    fontWeight: 'bold'
  },
  right: {
    width: height / 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formCalendar: {
    flex: 1,
    backgroundColor: '#005391',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarContainer: {
    marginTop: 5,
    height: height / 16,
    width: width / 2 - 50,
    borderColor: '#DFDFDF',
    borderWidth: 1,
    borderRadius: 5
  },
  calenderIcon: {
    height: height / 22,
    width: height / 22,
  },
  text: {
    color: '#DFDFDF'
  }
});

export default withNavigation(HeaderWaitEmployee);