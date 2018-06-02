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
    TouchableOpacity,
    Picker,
    ScrollView
} from 'react-native';
import HeaderBack from '../../Header/HeaderBack';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

async function addPaymentTerms(code,name,token) {
    console.log('Day la token');
    console.log(token);
    console.log(name+'  '+code);
    const projectTerms=[
        {
            name:''
        }
    ];
    try {
      let response = await fetch('http://auto.500ae.vn:8089/api/project/create',{
        method: 'POST',       
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
            PlatformType:'ADR',
            Authorization:'Bearer '+token
        },
        body:JSON.stringify({code,name,projectTerms})
    });
      let responseJson = await response.json();
      console.log('Tao du an');
      console.log(responseJson);
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  }
class MakeProject extends React.Component {


    constructor(props){
        super(props);
        this.state={
            projectName:'',
            projectCode:'',
            info:{}
        }
    }

    makeProject(){
        console.log('Make projects');
        addPaymentTerms(this.state.projectCode,this.state.projectName,this.props.token).then(res=>{
            if(res.status=="SUCCESS")
                {
                    this.setState({info:res})
                    console.log('Thanh cong');
                    this.props.navigation.navigate('AddPaymentTerms',{ projectInfo:this.state.info,make:true });
                }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBack title='Tạo Dự Án' />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                value={this.state.projectName}
                                onChangeText={(text)=>this.setState({projectName:text})}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.contextInputDuAn}
                                placeholder="Nhập tên..."
                            >

                            </TextInput>
                        </View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                value={this.state.projectCode}
                                onChangeText={(text)=>this.setState({projectCode:text})}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                style={styles.contextInputDuAn}
                                placeholder="Nhập mã dự án..."
                            >
                            </TextInput>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>
                        {
                            this.makeProject();
                            console.log(this.props.token);
                        }
                        }>
                        <View style={styles.Button}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FFF' }}>Xong</Text>
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
        justifyContent: 'space-between'
    },
    contextInputDuAn: {
        height: height / 14,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5
    },
    Button: {
        marginBottom: 5,
        backgroundColor: '#005391',
        paddingVertical: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

function mapStateToProps(state){
    return{token:state.todos.token};
}

export default connect(mapStateToProps)(MakeProject);