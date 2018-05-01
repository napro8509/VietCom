import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
const { height, width } = Dimensions.get('window');
const headerBar = height / 20;
export default class HeaderManager extends Component {
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
          <TextInput style={styles.searchBox}
            underlineColorAndroid='transparent'
            placeholder='Tìm theo tên phiếu, số phiếu'
          >
          </TextInput>

          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image style={styles.searchIcon}
                source={require('../../src/icon/search.png')}
                resizeMode='contain'
              />
            </View>
          </View>
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
  head: {
    flexDirection: 'row',
    height: headerBar,
    justifyContent: 'space-between',
    backgroundColor: '#005391',
    paddingHorizontal: 10,
    alignItems: 'center'
  },

  menuicon: {
    width: height / 20,
    height: height / 20,
  },
  mid: {
    justifyContent: 'center',
  },
  dashboard: {
    color: 'white',
    fontSize: 20,
  },
  searchBox: {
    width: width * 2 / 3,
    flex: 1,
    backgroundColor: '#FFF',
    fontSize: 14,
    justifyContent: 'center',
    padding: 0,
    paddingLeft: 35,
    borderRadius: 5
  },
  menuicon: {
    height: 25,
    width: 25
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginLeft: 10
  }
});
