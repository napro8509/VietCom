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
const { height } = Dimensions.get('window');

class BodyDirector extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{"CON_PHAI_TRA": {
                "totalElement": 4,
                "totalAmount": 14000000
              },
              "DA_DUYET": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "DA_THANH_TOAN": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "DOI_DUYET": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "DOI_THANH_TOAN": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "DS_DUYET_CHI": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "HUY": {
                "totalElement": 0,
                "totalAmount": 0
              },
              "LEN_DUYET_CHI": {
                "totalElement": 4,
                "totalAmount": 14000000
              },
              "TONG_THANH_TOAN": {
                "totalElement": 4,
                "totalAmount": 14000000
              },
              "TRE_HAN": {
                "totalElement": 1,
                "totalAmount": 1833000
              },
              "XIN_HUY": {
                "totalElement": 0,
                "totalAmount": 0
              }}
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
                                        source={require('../../../../src/background/green_background.png')}
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
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.CON_PHAI_TRA.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Tổng Phải Trả</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391'}}>{data.CON_PHAI_TRA.totalAmount}</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <TouchableOpacity>
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
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.DS_DUYET_CHI.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Tổng Duyệt Chi</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391'}}>{data.DS_DUYET_CHI.totalAmount}</Text>
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
                                        <Text style={{fontSize:30,color:'#FFF'}}>{data.DA_THANH_TOAN.totalElement}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:20,margin:5,marginBottom:0,color:'black'}}>Đã Thanh Toán</Text>
                                        <Text style={{fontSize:25,margin:5, color:'#005391'}}>{data.DA_THANH_TOAN.totalAmount}</Text>
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
                                    <Image style={styles.menuicon}
                                        source={require('../../../../src/icon/forward.png')}
                                        resizeMode='contain'
                                        />
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
export default connect(mapStateToProps)(BodyDirector);