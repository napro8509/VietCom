import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import { TabNavigator ,TabBarBottom} from 'react-navigation';


const {width,height}=Dimensions.get('window');
const headerBar=height/20;


class WaitApprove extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}
class Approved extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}
class PaymentApprove extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}


class Paid extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const TongQuan = TabNavigator(
    {
        WaitApprove: {
            screen: WaitApprove,
            navigationOptions: ({ navigation }) => ({
                title: `Chờ Duyệt\n 20 Phiếu`,
                tabBarLabel:({ tintColor, focused }) => (
                  <View style={{flex:1}}>
                  <Text style={{ color: tintColor}}>
                    Chờ Duyệt
                  </Text>
                  <Text style={{ color: tintColor,textAlign:'center',fontSize:10 }}>
                  20 phiếu
                </Text>
                </View>
                )
            }),
            
        },
        Approved: {
            screen: Approved,
            navigationOptions: ({ navigation }) => ({
                title: `Đã Duyệt\n 20 Phiếu`,
                tabBarLabel:({ tintColor, focused }) => (
                  <View style={{flex:1}}>
                  <Text style={{ color: tintColor}}>
                  Đã Duyệt
                  </Text>
                  <Text style={{ color: tintColor,textAlign:'center',fontSize:10 }}>
                  20 phiếu
                </Text>
                </View>
                )
            }),
        },

        PaymentApprove: {
            screen: PaymentApprove,
            navigationOptions: ({ navigation }) => ({
                title: `Duyệt Chi\n 20 Phiếu`,
                tabBarLabel:({ tintColor, focused }) => (
                  <View style={{flex:1}}>
                  <Text style={{ color: tintColor}}>
                  Duyệt Chi
                  </Text>
                  <Text style={{ color: tintColor,textAlign:'center',fontSize:10 }}>
                  20 phiếu
                </Text>
                </View>
                )
            }),

        },
        Paid: {
            screen: Paid,
            navigationOptions: ({ navigation }) => ({
                title: `Đã Thanh Toán\n 20 Phiếu`,
                tabBarLabel:({ tintColor, focused }) => (
                  <View style={{flex:1}}>
                  <Text style={{ color: tintColor}}>
                    Đã thanh toán
                  </Text>
                  <Text style={{ color: tintColor,textAlign:'center',fontSize:10 }}>
                  20 phiếu
                </Text>
                </View>
                )
            }),
            
        },
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: '#FFF',
            inactiveTintColor: '#DFDFDF',
            labelStyle:{
              fontSize:10,
              textAlign:'left'
          },
          style:{
            padding:0,
            height:headerBar*1.5,
            justifyContent:'center',
          },
          tabStyle:{
            padding:0,
          },
          indicatorStyle: {
            opacity: 0
          }
        },
        animationEnabled: true,
        swipeEnabled: true,
    },
    
);

export default class OverViewScreen extends React.Component {

    render() {
        
    return (
      <View style={{ flex: 1}}>
        <TongQuan/>
      </View>
    );
  }
}