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


async function editProject(id,code,name,projectTerms,token) {

    try {
      let response = await fetch('http://auto.500ae.vn:8089/api/project/edit',{
        method: 'POST',       
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
            PlatformType:'ADR',
            Authorization:'Bearer '+token
        },
        body:JSON.stringify({id,code,name,projectTerms})
    });
      let responseJson = await response.json();
      console.log('Edit Du An');
      console.log(responseJson);
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  }



class AddPaymentTerms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTerms: this.props.navigation.state.params.make?this.props.navigation.state.params.projectInfo.data.projectTerms:this.props.navigation.state.params.project.projectTerms,
        }
    }
    componentDidMount(){
        console.log(this.props.navigation.state.params.project.projectTerms)
    }
    pushPaymentTerms() {
        this.setState({ projectTerms: this.state.projectTerms.concat({ name: '' })});

    }

    btnEditProject(){
        console.log("Edit xong");
        const data=this.props.navigation.state.params.make?this.props.navigation.state.params.projectInfo.data:this.props.navigation.state.params.project;
        editProject(data.id,data.code,data.name,this.state.projectTerms,this.props.token).then(res=>console.log(res))
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBack title='Thêm Đợt Thanh Toán' goBack={()=>this.props.navigation.goBack()}/>
                <View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ marginBottom: 10, color: 'black', fontSize: 16, fontWeight: 'bold' }}>Thêm Các Đợt Thanh Toán</Text>
                        <FlatList
                            data={this.state.projectTerms}
                            renderItem={({ item, index }) =>
                                <View style={{ marginBottom: 10 }}>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        multiline={true}
                                        style={styles.contextInputDuAn}
                                        placeholder="Nhập tên dợt"
                                        onChangeText={(text)=>{
                                            let temp=this.state.projectTerms;
                                            temp[index].name=text;
                                            console.log(temp);
                                            this.setState({projectTerms:temp})
                                        }}
                                    >
                                    {item.name}
                                    </TextInput>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}>
                                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingVertical: 1,display:index?'flex':'none' }}>
                                        <TouchableOpacity onPress={()=>{
                                                    let tempArr=this.state.projectTerms;
                                                    console.log(index);
                                                    tempArr.splice(index,1);
                                                    console.log(tempArr)
                                                    this.setState({projectTerms:tempArr})
                                                }}>
                                            <View style={{ paddingHorizontal: 10, borderLeftWidth: 1, borderLeftColor: '#DFDFDF' }}>
                                                <Image
                                                    source={require('../../../src/icon/cancel.png')}
                                                    resizeMode='contain'
                                                    style={{ width: 20, height: 20 }}
                                                />

                                            </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            }
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#005391' }}>
                                <TouchableOpacity onPress={this.pushPaymentTerms.bind(this)}
                                >
                                    <Text style={{ fontSize: 16, color: '#005391', fontWeight: 'bold' }}>+ Thêm các khoản mục</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity  onPress={this.btnEditProject.bind(this)}>         
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
    buttonOK:{
        marginVertical:20,
        paddingVertical:15,
        backgroundColor:'#005391',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginHorizontal:10
    },
    buttonName:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18
    },
})

function mapStateToProps(state){
    return{token:state.todos.token};
}

export default connect(mapStateToProps)(AddPaymentTerms);