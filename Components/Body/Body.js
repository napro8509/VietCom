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
const { height } = Dimensions.get('window');
export default class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.card}>
                        <View style={styles.subCard}>
                            <View style={styles.itemCard}>
                                <View style={styles.numCard}>
                                    <Image style={styles.backgroundNum}
                                        source={require('../../src/background/blue_background.png')}
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
                                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}> Số phiếu</Text>
                                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'700'}}> 45</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:22,margin:5,marginBottom:0,color:'black'}}> Trễ hạn</Text>
                                        <Text style={{fontSize:30,margin:5, color:'#005391',fontWeight:'700'}}> 480.000.000 đ</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <TouchableOpacity>
                                    <Image style={styles.menuicon}
                                        source={require('../../src/icon/forward.png')}
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
                                        source={require('../../src/background/green_background.png')}
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
                                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}> Số phiếu</Text>
                                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'700'}}> 45</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:22,margin:5,marginBottom:0,color:'black'}}> Tổng Phải Trả</Text>
                                        <Text style={{fontSize:30,margin:5, color:'#005391',fontWeight:'700'}}> 650.000.000 đ</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <TouchableOpacity>
                                    <Image style={styles.menuicon}
                                        source={require('../../src/icon/forward.png')}
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
                                        source={require('../../src/background/orange_background.png')}
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
                                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}> Số phiếu</Text>
                                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'700'}}> 23</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:22,margin:5,marginBottom:0,color:'black'}}> Tổng Duyệt Chi</Text>
                                        <Text style={{fontSize:30,margin:5, color:'#005391',fontWeight:'700'}}> 180.000.000 đ</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <Image style={styles.menuicon}
                                        source={require('../../src/icon/forward.png')}
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
                                        source={require('../../src/background/blue_background.png')}
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
                                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}> Số phiếu</Text>
                                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'700'}}> 44</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:22,margin:5,marginBottom:0,color:'black'}}> Đã duyệt chi</Text>
                                        <Text style={{fontSize:30,margin:5, color:'#005391',fontWeight:'700'}}> 340.000.000 đ</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <Image style={styles.menuicon}
                                        source={require('../../src/icon/forward.png')}
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
                                        source={require('../../src/background/purple_background.png')}
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
                                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}> Số phiếu</Text>
                                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'700'}}> 77</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:22,margin:5,marginBottom:0,color:'black'}}> Đã Thanh Toán</Text>
                                        <Text style={{fontSize:30,margin:5, color:'#005391',fontWeight:'700'}}> 180.000.000 đ</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <Image style={styles.menuicon}
                                        source={require('../../src/icon/forward.png')}
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
                                        source={require('../../src/background/light_blue_background.png')}
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
                                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                                        <Text style={{fontSize:15,color:'#FFF'}}> Số phiếu</Text>
                                        <Text style={{fontSize:35, color:'#FFF',fontWeight:'700'}}> 123</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <View style={styles.leftcontent}>
                                        <Text style={{fontSize:22,margin:5,marginBottom:0,color:'black'}}> Chờ Duyệt</Text>
                                        <Text style={{fontSize:30,margin:5, color:'#005391',fontWeight:'700'}}> 423.000.000 đ</Text>
                                    </View>
                                    <View style={styles.rightcontent}>
                                    <Image style={styles.menuicon}
                                        source={require('../../src/icon/forward.png')}
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
        justifyContent:'center'
    },
    rightcontent:{
        justifyContent:'center',
        alignItems:'center'
    }
});
