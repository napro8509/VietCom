import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Picker,
    TouchableOpacity,
    Image,
    Switch
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Header from '../../Header/Header';
const { height, width } = Dimensions.get('window');
export default class Arlam extends Component {

    static navigationOptions = {
        drawerLabel: 'Đặt báo thức',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../src/icon/docs.png')}
            style={[{width:20,height:20}, {tintColor: tintColor}]}
          />
        ),
      };
    constructor(props){
        super(props)
        this.state = {
            language:"",
            date:"1",
            hour:"9:55",
            switch:false
    }
      } 
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.body}>
                    <Text style={styles.fieldName}>Chọn ngày</Text>
                    <DatePicker
                        style={styles.fieldPicker}
                        date={this.state.date}
                        mode="time"
                        placeholder="select time"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />

                    <Text style={styles.fieldName}>Chọn giờ</Text>
                    <DatePicker
                        style={styles.fieldPicker}
                        date={this.state.hour}
                        mode="time"
                        placeholder="select time"
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(hour) => { this.setState({ hour: hour }) }}
                    />
                    </View>
                    <View style={styles.setArlam}>
                    <Text style={{color:'black'}}>Lặp lại báo thức</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ color: '#03A0FF' }}>Mỗi ngày</Text>
                        <Image style={styles.menuicon}
                            source={require('../../../src/icon/forward.png')}
                            resizeMode='contain'
                        />
                    </View>
                    </View>

                    <View style={styles.setArlam}>
                    <Text style={{color:'black'}}>Bật báo thức</Text>
                    <View style={{flexDirection:'row'}}>
                        <Switch
                        value={this.state.switch}
                        onValueChange={(bool) => { this.setState({ switch: bool }) }}
                        />
                    </View>
                    </View>
                    <TouchableOpacity>               
                    <View style={styles.buttonOK}> 
                    <Text style={styles.buttonName}>Xong</Text>
                    </View>            
                    </TouchableOpacity>  
                    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body:{
        marginHorizontal:10,
        marginTop:10,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#DFDFDF'
    },
    fieldName:{
        color:'black',
        fontWeight:'bold'
    },
    fieldPicker:{
        borderWidth:3,
        borderColor:'#DFDFDF',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:5,
        marginHorizontal:0,
        width:300
    },
    setArlam:{
        marginHorizontal:10,
        paddingHorizontal:15,
        paddingVertical:15,
        borderBottomWidth:1,
        borderBottomColor:'#DFDFDF',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    menuicon:{
        width: 20,
        height: 20,
    },
    buttonOK:{
        marginVertical:20,
        marginHorizontal:10,
        paddingVertical:15,
        backgroundColor:'#03A0FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    buttonName:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18
    },
});