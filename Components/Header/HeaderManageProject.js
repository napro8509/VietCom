import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  DatePickerAndroid,
  TouchableOpacity,
} from 'react-native';
import Global from '../../Global/Global';
import {DrawerActions} from 'react-navigation';
import { connect } from 'react-redux';
const { height, width } = Dimensions.get('window');
const headerBar = height / 5;


class HeaderManageProject extends Component {
  constructor(props){
    super(props);
    this.state={
      title:this.props.title
    }
  }

  openDrawerFromHeader(){
    Global.openDrawer();
  }


  render() {
    return (
      <View style={{ height: headerBar/4, paddingHorizontal: 10, backgroundColor: '#005391' }}>
        <View>
          <View style={styles.head}>
          <TouchableOpacity onPress={this.openDrawerFromHeader.bind(this)}>
            <Image style={styles.menuicon}
              source={require('../../src/icon/menu_icon.png')}
              resizeMode='contain'
            />
            </TouchableOpacity>
            <View style={styles.mid}>
              <Text style={styles.dashboard}>
               Dự Án
              </Text>
            </View>
            <View>
              <Image style={styles.menuicon}
                source={require('../../src/icon/add_small.png')}
                resizeMode='contain'
              />
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, height: 1, borderColor: '#DFDFDF', marginVertical: 10 }}>
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
    width: height / 22,
    height: height / 22,
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
});



export default HeaderManageProject;