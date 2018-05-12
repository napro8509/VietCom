import React, {Component} from 'react';
import {AppRegistry,TouchableOpacity,View,ScrollView,Text,Image,StyleSheet} from 'react-native';
import { connect } from 'react-redux';

  const url="http://auto.500ae.vn:8089/";
class DrawerComponent extends Component {

  componentDidMount(){
    console.log('drawer component');
    console.log(this.props.profile);
  }
  render () {
    return (
          <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{uri:`${url}${this.props.profile.avatar}`}}
              style={{ width: 100, height: 100, borderRadius: 100, }}
            />
            <TouchableOpacity >
              <Text style={{ color: 'black' }}>{this.props.profile.fullName}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../../src/icon/email.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ color: 'black', padding: 5 }}>{this.props.profile.email}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../../src/icon/phone.png')}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ color: 'black', padding: 5 }}>{this.props.profile.phone}</Text>
            </View>
          </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})

function mapStateToProps(state){
  return{value:state.todos.isLogIn,
      profile:state.todos.profile.profile
  };
}


export default connect(mapStateToProps)(DrawerComponent);