import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    CheckBox,
    TouchableOpacity,
    Alert
} from 'react-native';
import saveToken from '../../Api/saveToken';
import { connect } from 'react-redux';
import {StackActions,NavigationActions} from 'react-navigation';
const {height}=Dimensions.get('window');

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Employee' })],
  });


    async function getLogInStatus(email,password) {
        try {
          let response = await fetch('http://auto.500ae.vn:8089/api/auth/login',{
            method: 'POST',       
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                PlatformType:'ADR',
            },
            body:JSON.stringify({email,password})
        });
          let responseJson = await response.json();
          return responseJson;
        } catch(error) {
          console.error(error);
        }
      }

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state={
            check:true,
            userName:'nhanvien@gmail.com',
            passWord:'nhanvien',
            status:""
        }
    }
    dangnhap(){
        console.log("Dang Nhap");
        getLogInStatus(this.state.userName,this.state.passWord).then(res=>{
            if(res.status=="SUCCESS")
                {
                    saveToken(res.data.refeshToken);
                    this.props.dispatch({type:'TOKEN',token:res.data.token});
                    this.props.dispatch({type:'LOGIN',profile:res.data.profile});
                    switch(res.data.profile.role)
                    {
                        case 'GIAM_DOC':{
                            this.props.navigation.navigate('Director')
                            console.log('vao director')
                            break;
                        }
                        case 'ADMIN':{
                            this.props.navigation.navigate('Admin')
                            console.log('vao admin')
                            break;
                        }
                        case 'NHAN_VIEN':{
                            this.props.navigation.dispatch(resetAction);
                            console.log('vao nhan vien')
                            break;
                        }
                    }
                }
                else Alert.alert(
                    'Thông báo!',
                    'Nhập sai tài khoản hoặc mật khẩu!',
                    [
                      { text: 'OK'},
                    ],
                    { cancelable: false }
                  )
                

        })
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
                        value={this.state.userName}
                        onChangeText={(text)=>this.setState({userName:text})}
                        returnKeyType='next'
                        onSubmitEditing={()=>this.refs.txtPassWord.focus()}
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
                        value={this.state.passWord}
                        onChangeText={(text)=>this.setState({passWord:text})}
                        ref={"txtPassWord"}
                        secureTextEntry
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

                <TouchableOpacity onPress={this.dangnhap.bind(this)} >         
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
function mapStateToProps(state){
    return{};
}

export default connect(mapStateToProps)(Login);