import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar,
    Image,
    Dimensions,
    TextInput,
    CheckBox,
    TouchableOpacity
} from 'react-native';

const {height,weight}=Dimensions.get('window');

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            check:true
        }
    }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.dashboard}>
                Đăng nhập
              </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.email}>
                    <Image style={styles.icon}
                    source={require('../../src/icon/email.png')}
                    resizeMode='contain'
                    />
                    <View style={styles.emailInput}>
                    <Text>Email Address</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Nhập Email'
                        >                          
                        </TextInput>
                    </View>
                </View>
                <View>
                <View style={styles.email}>
                    <Image style={styles.icon}
                    source={require('../../src/icon/password.png')}
                    resizeMode='contain'
                    />
                    <View style={styles.emailInput}>
                        <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Mật khẩu'
                        >                          
                        </TextInput>
                    </View>
                </View>

                <View style={styles.remindPassword}>
                    <View style={styles.checkbox}> 
                        <CheckBox
                        value={this.state.check}
                        onValueChange={(check=>{this.setState({check})})}
                        />
                        <Text style={{color:'black'}}>Nhớ mật khẩu</Text>
                    </View>
                    <Text>Quên mật khẩu?</Text>
                </View>

                <TouchableOpacity>               
                    <View style={styles.buttonOK}> 
                    <Text style={styles.buttonName}>Đăng nhập</Text>
                    </View>            
                    </TouchableOpacity>      
                </View>
            </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        height:height/20,
        backgroundColor:'#005391',
        justifyContent:'center',
        alignItems:'center'
    },
    dashboard: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Avevir',
        fontWeight: 'bold'
      },
    body:{
        padding:10
    },
    icon:{
        height:40,
        width:40,
    },
    email:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:20
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#005391',
        color:'#005391',
        fontSize:16,
        paddingHorizontal:0
    },
    emailInput:{
        flex:1,
        marginHorizontal:10,
    },
    passwordInput:{
        borderBottomWidth:1,
        borderBottomColor:'#005391',
        color:'#005391',
        fontSize:16,
    },
    remindPassword:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10
    },
    checkbox:{
        flexDirection:'row',
        alignItems:'center'
    },
    buttonOK:{
        marginVertical:20,
        paddingVertical:15,
        backgroundColor:'#005391',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    buttonName:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18
    },
})