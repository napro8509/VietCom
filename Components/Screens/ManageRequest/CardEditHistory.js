import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacticy,

} from 'react-native';
import Header from '../../Header/Header';
const { height, width } = Dimensions.get('window');

export default class CardEditHistory extends Component {
    static navigationOptions = {
        drawerLabel: 'Lịch sử chỉnh sửa',
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
                    <View style={styles.contextTitle}>
                        <Image
                            source={require('../../../src/icon/clock.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20,margin:5 }}
                        />
                        <Text style={{ fontSize: 16, color: '#005391' }}>Hôm nay</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: 'black',margin:10,fontStyle:'italic' }}>Thời gian: 8:00 sáng</Text>
                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,marginHorizontal:10,paddingBottom:10,borderBottomColor:'#DFDFDF'}}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Chỉnh sửa tiêu đề phiếu
                    <Text style={{ fontSize: 16, color: '#005391' }}> Quyết toán chi phí CT 100 triệu 1 phút</Text>
                    <Text style={{ fontSize: 16, color: 'black' }}> thành tiêu đề phiếu </Text>
                    <Text style={{ fontSize: 16, color: '#005391' }}>CP ăn trưa tại quận 7</Text>
                    </Text>
                    </View>
                    <Text style={{ fontSize: 16, color: 'black',margin:10,fontStyle:'italic' }}>Thời gian: 8:25 sáng</Text>

                    <View style={{borderBottomWidth:1,marginHorizontal:10,paddingBottom:10,borderBottomColor:'#DFDFDF'}}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Chỉnh sửa tiêu đề phiếu
                    <Text style={{ fontSize: 16, color: '#005391' }}> Quyết toán chi phí CT 100 triệu 1 phút</Text>
                    </Text>

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
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,

    },
    contextTitle: {
        padding: 10,
        backgroundColor: '#DFDFDF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardDetail: {
        marginTop: 5,

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
});