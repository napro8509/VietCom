import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    BackHandler,
    Alert
} from 'react-native';
import HeaderEmployee from './HeaderEmployee';
import BodyEmployee from './BodyEmployee';
import Global from '../../../../Global/Global';
import { connect } from 'react-redux';


class DashBoardEmployee extends Component {
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

    goBack(){
        Alert.alert(
            'Thông báo!',
            'Bạn có chắc muốn thoát!',
            [
              { text:   'Ok',onPress:()=>BackHandler.exitApp()},
              { text:   'Cancel'}
            ],
            { cancelable: false }
          )
    }

    componentDidMount(){
        //this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        //    this.goBack(); // works best when the goBack is async
        //    return true;
        //  });
    }
    componentWillMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderEmployee title="DashBoard" />
                <BodyEmployee/>
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

export default connect(mapStateToProps)(DashBoardEmployee);