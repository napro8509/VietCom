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
import HeaderManageProject from '../../Header/HeaderManageProject';
import { connect } from 'react-redux';
import {showList} from '../../../Api/contractApi';
const {width,height} =Dimensions.get('window');



class ManageProject extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        showList(this.props.token).then(res=>this.setState({list:res.data.dataList}))
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderManageProject />
                <View style={{flex:1,paddingHorizontal:10}}>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item,index }) =>
                    <View style={{paddingVertical:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#DFDFDF'}}>
                        
                        <TouchableOpacity onPress={()=>
                            {
                                console.log('Tesinghgggggggggggggggggggggggg');
                                this.props.navigation.navigate('AddPaymentTerms',{ project:this.state.list[index],make:false })
                                console.log(this.state.list[index])
                            }}>
                        
                        <Text style={{fontSize:16,color:'#005391',fontWeight:'bold'}}>{item.name}</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.icon}
                            source={require('../../../src/icon/text_edit.png')}
                            resizeMode='contain'
                        />
                    </View>
                    }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between'
    },
    icon:{
        width:25,
        height:25
    }
})

function mapStateToProps(state){
    return{token:state.todos.token};
}

export default connect(mapStateToProps)(ManageProject);