import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import HeaderDirector from './HeaderDirector';
import BodyDirector from './BodyDirector';
import Global from '../../../../Global/Global';
import { connect } from 'react-redux';

class DashBoardDirector extends Component {
    static navigationOptions = {
        drawerLabel: 'DashBoardDirector',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../../src/icon/docs.png')}
            style={[{width:20,height:20}, {tintColor: tintColor}]}
          />
        ),
      };
    openDrawer(){
        this.props.navigation.openDrawer();
    }   
    constructor(props){
        super(props);
        this.state={
        }
        Global.openDrawer=this.openDrawer.bind(this);
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderDirector title="DashBoard" />
                <BodyDirector/>
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

export default connect(mapStateToProps)(DashBoardDirector);