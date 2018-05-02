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
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Header from '../../Header/Header';
const { height, width } = Dimensions.get('window');
export default class Filter extends Component {

    static navigationOptions = {
        drawerLabel: 'Bộ lọc',
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
            date:"1"
    }
      } 
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.body}>
                    <Text style={styles.fieldName}>Tên nhân viên</Text>
                    <TextInput
                    style={styles.fieldInput}
                    underlineColorAndroid='transparent'
                    >
                    </TextInput>

                    <Text style={styles.fieldName}>Phòng ban</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={ {borderTopWidth:3} }
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Chọn phòng ban" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <Text style={styles.fieldName}>Loại phiếu</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={ {borderTopWidth:3} }
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Chọn loại phiếu" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <Text style={styles.fieldName}>Loại chi phí</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={ {borderTopWidth:3} }
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Chọn loại chi phí" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <Text style={styles.fieldName}>Từ ngày</Text>

                    <DatePicker
                        style={styles.fieldPicker}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
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

                    <Text style={styles.fieldName}>Đến ngày</Text>

                    <DatePicker
                        style={styles.fieldPicker}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
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
                    <TouchableOpacity>               
                    <View style={styles.buttonOK}> 
                    <Text style={styles.buttonName}>Xong</Text>
                    </View>            
                    </TouchableOpacity>      
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body:{
        padding:10,
    },
    fieldName:{
        color:'black',
        fontWeight:'bold'
    },
    buttonName:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18
    },
    fieldInput:{
        borderWidth:1,
        borderColor:'#DFDFDF',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:15,
        fontSize:16,
        marginVertical:5
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
    buttonOK:{
        marginVertical:20,
        paddingVertical:15,
        backgroundColor:'#03A0FF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
});