import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


const { width, height } = Dimensions.get('window');
const headerBar = height / 20;


export default class WaitApprove extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <ScrollView>
            <View style={styles.card}>
              <View style={styles.cardInfo}>

                <View style={styles.cardTitle}>
                  <Text style={{ fontSize: 16, color: '#005391', fontWeight: 'bold' }}>CP ăn trưa Q7</Text>
                  <Text style={{ fontSize: 14, color: 'orange', fontWeight: 'bold' }}>SH: 0201HRA</Text>
                </View>

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
                    <Text>Được duyệt bởi:</Text>
                    <Text style={styles.rightLine}>Trần Hoàng Duy</Text>
                  </View>

                  <View style={styles.line}>
                    <Text>Số tiền cần:</Text>
                    <Text style={[styles.rightLine, {}]}>695.000đ</Text>
                  </View>
                </View>

                <View style={styles.triangleContainer}>
                  <View style={styles.triangle}>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 20,
                      height: 20,
                    }}
                  >
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                      <View style={{ width: 20, height: 20, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 4 }}>
                        <View style={{ width: 8, height: 8, borderBottomColor: '#FFF', borderRightColor: '#FFF', borderBottomWidth: 1, borderRightWidth: 1 }}>

                        </View>
                      </View>
                    </View>
                  </View>
                </View>


              </View>
              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: headerBar * 2, borderBottomColor: '#DFDFDF', borderBottomWidth: 1 }}>
                  <View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                      <Text style={{ color: 'black' }}>Số tiền được đề nghị</Text>
                      <Text style={{ color: '#005391', fontSize: 20, fontWeight: 'bold' }}>695.000đ</Text>
                    </View>
                  </View>
                  <View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                      <Text style={{ color: 'black' }}>Số tiền đã tạm ứng</Text>
                      <Text style={{ color: '#005391', fontSize: 20, fontWeight: 'bold' }}>0đ</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    top: 2,
                    left: 10,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 1, height: 50, backgroundColor: '#DFDFDF' }}>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.paymentReturnContainer1}>
                <View style={styles.paymentReturn}>
                  <View>
                    <Text style={{color:'#FFF'}}>Số tiền còn</Text>
                    <Text style={{color:'#FFF'}}>được thanh toán</Text>
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={{color:'#FFF',fontSize:20,fontWeight:'bold'}}>695.000đ</Text>
                  </View>
                </View>
              </View>

              <View style={styles.paymentReturnContainer2}>
                <View style={styles.paymentReturn}>
                  <View>
                    <Text style={{color:'#FFF'}}>Số tiền phải</Text>
                    <Text style={{color:'#FFF'}}>trả lại công ty</Text>
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={{color:'#FFF',fontSize:20,fontWeight:'bold'}}>0đ</Text>
                  </View>
                </View>
              </View>

              <View style={styles.buttonContainer}>

                <View style={styles.leftButton}>
                <Text style={{color:'#FFF',fontSize:15,fontWeight:'bold'}}>Hủy Phiếu</Text>
                </View>

                <View style={styles.rightButton}>
                <Text style={{color:'#FFF',fontSize:15,fontWeight:'bold'}}>Duyệt Nhanh</Text>
                </View> 

              </View>
              <Text style={{marginLeft:10,fontStyle:'italic'}}>Phiếu mới được tạo</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  cardContainer: {
    marginHorizontal: 10,
    marginTop: 5,
    paddingBottom:5,
    backgroundColor: 'white'
  },
  card: {
    paddingBottom:5
  },
  cardInfo: {
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    paddingBottom:5,
    borderBottomColor: '#DFDFDF'
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF'
  },
  line: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightLine: {
    color: 'black',
    fontWeight: 'bold'
  },
  triangleContainer: {
    alignItems: 'flex-end'
  },
  triangle: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: 'green',
    transform: [
      { rotate: '180deg' }
    ]
  },
  paymentReturnContainer1:{
    marginTop:10,
    marginHorizontal:10,
    padding:10,
    backgroundColor:'#005391',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomWidth:1,
    borderBottomColor:'#DFDFDF'
  },
  paymentReturnContainer2:{
    marginHorizontal:10,
    padding:10,
    backgroundColor:'#005391',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomWidth:1,
    borderBottomColor:'#DFDFDF'
  },
  paymentReturn:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buttonContainer:{
    flexDirection:'row',
    marginHorizontal:10
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
    backgroundColor:'green',
    paddingVertical:15,
    marginLeft:5,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  }
})