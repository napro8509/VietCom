import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacticy,
    ScrollView,
    TextInput
} from 'react-native';
import Header from '../../Header/Header';
const { height, width } = Dimensions.get('window');

export default class CardDetail extends Component {
    static navigationOptions = {
        drawerLabel: 'Thông tin chi tiết phiếu',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../src/icon/docs.png')}
            style={[{width:20,height:20}, {tintColor: tintColor}]}
          />
        ),
      };
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.body}>
                    <ScrollView>
                    <View style={styles.headCard}>
                        <Text style={styles.title}>Quyết toán chi phí CT "100 triệu 1 phút" (bao gồm Phụ cấp nhân viên)</Text>
                        <Text style={{ fontSize: 14, color: 'orange', fontWeight: 'bold', marginTop: 10 }}>SH: 0201HRA</Text>

                        <View style={styles.cardDetail}>
                            <View style={styles.line}>
                                <Text>Ngày cần thanh toán:</Text>
                                <Text style={styles.rightLine}>15/06/2017</Text>
                            </View>

                            <View style={styles.line}>
                                <Text>Người đề nghị:</Text>
                                <Text style={styles.rightLine}>Nguyễn Minh Tâm</Text>
                            </View>

                            <View style={styles.line}>
                                <Text>Loại phiếu:</Text>
                                <Text style={styles.rightLine}>Thanh Toán</Text>
                            </View>

                            <View style={styles.line}>
                                <Text>Loại chi phí</Text>
                                <Text style={[styles.rightLine, {}]}>Công trình</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Nội dung và số tiền được đề nghị</Text>
                    </View>

                    <View style={styles.contextDetail}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingVertical: 10, }}>
                            <Text style={styles.contextDetailTitle}>1. Tổng CP ngày 15, 16, 17/7</Text>
                            <View style={styles.cardDetail}>
                                <View style={styles.line}>
                                    <Text>Tổng tiền:</Text>
                                    <Text style={styles.rightLine}>301.423.000đ</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Thuế GTGT:</Text>
                                    <Text style={styles.rightLine}>Nguyễn Minh Tâm</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Chi phí</Text>
                                    <Text style={styles.rightLine}>Thanh Toán</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Ghi chú</Text>
                                    <Text style={[styles.rightLine, {}]}>Công trình</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.contextDetail}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingVertical: 10, }}>
                            <Text style={styles.contextDetailTitle}>1. Tổng CP ngày 15, 16, 17/7</Text>
                            <View style={styles.cardDetail}>
                                <View style={styles.line}>
                                    <Text>Tổng tiền:</Text>
                                    <Text style={styles.rightLine}>301.423.000đ</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Thuế GTGT:</Text>
                                    <Text style={styles.rightLine}>Nguyễn Minh Tâm</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Chi phí</Text>
                                    <Text style={styles.rightLine}>Thanh Toán</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Ghi chú</Text>
                                    <Text style={[styles.rightLine, {}]}>Công trình</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.totalRequest}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Cộng</Text>
                        <Text style={{ fontSize: 18, color: '#FFF',fontWeight:'bold' }}>292.123.000đ</Text>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Số tiền tạm ứng</Text>
                    </View>

                    <View style={styles.contextDetail}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingVertical: 10, }}>
                            <Text style={styles.contextDetailTitle}>1. Ứng lần 1</Text>
                            <View style={styles.cardDetail}>
                                <View style={styles.line}>
                                    <Text>Số tiền:</Text>
                                    <Text style={styles.rightLine}>301.423.000đ</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Loại chứng từ:</Text>
                                    <Text style={styles.rightLine}>Nguyễn Minh Tâm</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Số chứng từ:</Text>
                                    <Text style={styles.rightLine}>Thanh Toán</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Ngày tháng:</Text>
                                    <Text style={[styles.rightLine, {}]}>14/07</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Ghi chú</Text>
                                    <Text style={[styles.rightLine, {}]}>Ăn cơm trưa</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.contextDetail}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFDF', paddingVertical: 10, }}>
                            <Text style={styles.contextDetailTitle}>2. Ứng lần 2</Text>
                            <View style={styles.cardDetail}>
                                <View style={styles.line}>
                                    <Text>Số tiền:</Text>
                                    <Text style={styles.rightLine}>301.423.000đ</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Loại chứng từ:</Text>
                                    <Text style={styles.rightLine}>Nguyễn Minh Tâm</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Số chứng từ:</Text>
                                    <Text style={styles.rightLine}>Thanh Toán</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Ngày tháng:</Text>
                                    <Text style={[styles.rightLine, {}]}>14/07</Text>
                                </View>

                                <View style={styles.line}>
                                    <Text>Ghi chú</Text>
                                    <Text style={[styles.rightLine, {}]}>Ăn cơm trưa</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.totalRequest}>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>Tổng Cộng</Text>
                        <Text style={{ fontSize: 18, color: '#FFF',fontWeight:'bold' }}>66.123.000đ</Text>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Lý do</Text>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Quyết toán MDM 15, 16, 17/07</Text>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Tổng tiền thanh toán</Text>
                    </View>

                    <View style={styles.paymentReturnContainer1}>
                        <View style={styles.paymentReturn}>
                            <View>
                                <Text style={{ color: '#FFF' }}>Số tiền còn</Text>
                                <Text style={{ color: '#FFF' }}>được thanh toán</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>695.000đ</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.paymentReturnContainer2}>
                        <View style={styles.paymentReturn}>
                            <View>
                                <Text style={{ color: '#FFF' }}>Số tiền phải</Text>
                                <Text style={{ color: '#FFF' }}>trả lại công ty</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>0đ</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/docs.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Nhận xét</Text>
                    </View>

                    <View style={{padding:10}}>
                    <Text style={{ fontSize: 16, color: '#005391' }}>Nội dung</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        multiline={true}
                        style={styles.contextInput}>
                    >
                    </TextInput>
                    </View>

                    <View style={styles.buttonContainer}>

                        <View style={styles.leftButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Hủy Phiếu</Text>
                        </View>

                        <View style={styles.rightButton}>
                            <Text style={{ color: '#FFF', fontSize: 15, fontWeight: 'bold' }}>Duyệt</Text>
                        </View>

                    </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1
    },
    headCard: {
        padding: 10
    },
    title: {
        fontSize: 20,
        color: '#005391',
        fontWeight: '500'
    },
    cardDetail: {
        marginTop: 5
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    rightLine: {
        color: 'black',
        fontWeight: 'bold'
    },
    contextTitle: {
        padding: 10,
        backgroundColor: '#DFDFDF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contextDetail: {
        paddingHorizontal: 10,

    },
    contextDetailTitle: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    totalRequest:{
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paymentReturnContainer1:{
        padding:10,
        backgroundColor:'#005391',
        borderBottomWidth:1,
        borderBottomColor:'#DFDFDF'
      },
      paymentReturnContainer2:{
        padding:10,
        backgroundColor:'#005391',
      },
      paymentReturn:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      contextInput:{
          height:height/6,
          borderWidth:1,
          borderColor:'#DFDFDF',
          borderRadius:5
      },
      buttonContainer:{
        flexDirection:'row',
        backgroundColor:'#DFDFDF',
        paddingHorizontal:10,
        paddingVertical:15
      },
      leftButton:{
        marginVertical:5,
        flex:1, 
        backgroundColor:'red',
        paddingVertical:15,
        marginRight:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      },
      rightButton:{
        marginVertical:5,
        flex:1,
        backgroundColor:'blue',
        paddingVertical:15,
        marginLeft:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
      }
})