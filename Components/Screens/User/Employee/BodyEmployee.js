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
import Global from '../../../../Global/Global';
import {connect} from 'react-redux';
import {getDashBoard} from '../../../../Api/dashBoard';
import { withNavigation } from 'react-navigation';
const { height } = Dimensions.get('window');

class BodyEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
              "DA_DUYET": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "DOI_DUYET": {
                "totalElement": 0,
                "totalAmount": 0
              },       
              "HUY": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "TRE_HAN": {
                "totalElement": 0,
                "totalAmount": 0
              }
              }
        }
    }
    componentDidMount(){
        getDashBoard(this.props.token).then(res=>{
            this.setState({data:res.data})
        })
    }
    render() {
        const {data}=this.state;
        return (
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.card}>
                        <View style={styles.subCard}>
                            <View style={styles.itemCard}>
                                <View style={styles.numCard}>
                                    <Image style={styles.backgroundNum}
                                        source={require('../../../../src/background/orange_background.png')}
                                        resizeMode='stretch'
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        >
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}>Số phiếu</Text>
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.TRE_HAN.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Trễ hạn</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391'}}>{data.TRE_HAN.totalAmount}</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <TouchableOpacity onPress={()=>Global.goToWaitApprove()}>
                                    <Image style={styles.menuicon}
                                        source={require('../../../../src/icon/forward.png')}
                                        resizeMode='contain'
                                        />
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.card}>
                        <View style={styles.subCard}>
                            <View style={styles.itemCard}>
                                <View style={styles.numCard}>
                                    <Image style={styles.backgroundNum}
                                        source={require('../../../../src/background/blue_background.png')}
                                        resizeMode='stretch'
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        >
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}>Số phiếu</Text>
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.DA_DUYET.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Đã duyệt chi</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391'}}>{data.DA_DUYET.totalAmount}</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <TouchableOpacity onPress={()=>{}}>
                                    <Image style={styles.menuicon}
                                        source={require('../../../../src/icon/forward.png')}
                                        resizeMode='contain'
                                        />
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.subCard}>
                            <View style={styles.itemCard}>
                                <View style={styles.numCard}>
                                    <Image style={styles.backgroundNum}
                                        source={require('../../../../src/background/purple_background.png')}
                                        resizeMode='stretch'
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        >
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}>Số phiếu</Text>
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.HUY.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Đã Hủy</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391'}}>{data.HUY.totalAmount}</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <Image style={styles.menuicon}
                                        source={require('../../../../src/icon/forward.png')}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.subCard}>
                            <View style={styles.itemCard}>
                                <View style={styles.numCard}>
                                    <Image style={styles.backgroundNum}
                                        source={require('../../../../src/background/light_blue_background.png')}
                                        resizeMode='stretch'
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        >
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}>Số phiếu</Text>
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.DOI_DUYET.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Chờ Duyệt</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391',fontWeight:'700'}}>{data.DOI_DUYET.totalAmount}</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <TouchableOpacity onPress={()=>{
                                        console.log('hello world')
                                        this.props.navigation.navigate('WaitApproveEmployee')
                                    }}>
                                    <Image style={styles.menuicon}
                                        source={require('../../../../src/icon/forward.png')}
                                        resizeMode='contain'
                                        />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#E3E6E7',
    },
    card: {
        height: height / 6,
    },
    subCard: {
        flex: 1,
        marginTop: height / 30,
    },
    itemCard: {
        marginHorizontal: 10,
        flex: 1,
        backgroundColor: 'orange',
        borderRadius: 10,
        flexDirection: 'row'
    },
    numCard: {
        width: height / 7,
        backgroundColor: 'black',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    backgroundNum:{
        flex:1,
        width: height / 7,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    content:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"#FFF",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    leftcontent:{
        justifyContent:'center',
    },
    rightcontent:{
        justifyContent:'center',
        alignItems:'center'
    }
});
function mapStateToProps(state){
    return{token:state.todos.token}
}
export default withNavigation(connect(mapStateToProps)(BodyEmployee));