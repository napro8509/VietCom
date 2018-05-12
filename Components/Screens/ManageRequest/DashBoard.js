import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '../../Header/Header';
import Body from '../../Body/Body';
import Global from '../../../Global/Global';
import { connect } from 'react-redux';

class DashBoard extends Component {
    static navigationOptions = {
        drawerLabel: 'DashBoard',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../src/icon/docs.png')}
            style={[{width:20,height:20}, {tintColor: tintColor}]}
          />
        ),
      };
    openDrawer(){
        this.props.navigation.openDrawer();
    }   
    goToWaitApprove(){
        this.props.navigation.navigate('WaitApprove');
    }

    constructor(props){
        super(props);
        this.state={

        }
        Global.openDrawer=this.openDrawer.bind(this);
        Global.goToWaitApprove=this.goToWaitApprove.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="DashBoard" />
                <Body/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
function mapStateToProps(state){
    return{value:state.todos.isLogIn,
        profile:state.todos.profile
    };
}

export default connect(mapStateToProps)(DashBoard);