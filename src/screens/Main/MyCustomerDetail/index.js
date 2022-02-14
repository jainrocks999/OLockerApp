import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Header from '../../../components/CustomHeader';
import BottomTab from '../../../components/StoreButtomTab';
const Mycustomer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container1}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Customers '}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          height: 200,
          width: '100%',
          paddingHorizontal: 15,
          paddingVertical: 20,
          flexDirection: 'row',
        }}>
        <View style={{width: '30%', height: 100, borderWidth: 1}}></View>
        <View style={{width: '70%', paddingHorizontal: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#032e63', fontSize: 16}}>Milind Shethia</Text>
            <View
              style={{
                backgroundColor: '#918f90',
                marginLeft: 7,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 2,
              }}>
              <Text style={{fontSize: 12, color: '#fff'}}>PLATINUM</Text>
            </View>
          </View>
          <Text style={{fontSize: 12, fontWeight: '700', marginTop: 8}}>
            {'34,Atmosphere Tower\nNavi Mumbai 400000\nMaharashtra,India'}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginTop: 10, color: '#000'}}>+918765467834</Text>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../../assets/PartnerImage/16.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: '#032e63'}}>Birthday</Text>
              <Text>10 Sep 1989</Text>
            </View>
            <View>
              <Text style={{color: '#032e63'}}>Anniversary</Text>
              <Text>NA</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: 20,marginTop:20}}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            marginTop: 10,
            elevation: 5,
            borderRadius: 10,
          }}>
          <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#032e63'}}>
              Customer Management{' '}
            </Text>
          </View>
          <View style={{borderWidth: 0.5, borderColor: 'grey'}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feedback')}
              style={{
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{height: 35, width: 35}}
                  source={require('../../../assets/Image/handFeed.png')}
                />
              </View>
              <Text style={{fontSize: 11, marginTop: 5}}>Feedback</Text>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                height: '100%',
                borderColor: 'grey',
                marginTop: 0,
              }}
            />
            <TouchableOpacity
              onPress={()=>navigation.navigate('Messagebox')}
              style={{
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{height: 25, width: 30}}
                  source={require('../../../assets/Image/msge.png')}
                />
              </View>
              <Text style={{fontSize: 11, marginTop: 14}}>Message Box</Text>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                height: '100%',
                borderColor: 'grey',
                marginTop: 0,
              }}
            />

            <TouchableOpacity
              //    onPress={()=>navigation.navigate('SentRequest')}
              style={{
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{height: 27, width: 21}}
                  source={require('../../../assets/Image/userMy.png')}
                />
              </View>
              <Text style={{fontSize: 11, marginTop: 14}}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{fontSize: 16}}>Purchase History</Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Purchase')}
           style={{backgroundColor:'#032e63',paddingHorizontal:10,borderRadius:8,paddingVertical:3}}>
              <Text style={{color:'#fff'}}>View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{backgroundColor:'#fff',marginTop:10,flexDirection:'row',paddingHorizontal:15,paddingVertical:15}}>
                <View style={{width:'30%',height:90,borderWidth:1}}>

                </View>
                <View style={{width:'70%',paddingHorizontal:8}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#000'}}>{`ITEM ID   ${item.itemId}`}</Text>
                        <Text style={{color:'#000'}}>{item.price}</Text>
                    </View>
                    <Text style={{fontSize:12,marginTop:5}}>{`Purchase Date  ${item.date}`}</Text>
                    <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <Image style={{height:60,width:40}} source={require('../../../assets/Image/pdf.png')}/>
                    </View>
                </View>
            </View>
          )}
        />
      </View>
      <View style={{height: 180}} />
      </ScrollView>
      <View style={{bottom: 0, position: 'absolute', left: 0, right: 0}}>
        <BottomTab />
      </View>
    </View>
  );
};
export default Mycustomer;
const data = [
  {itemId: 'KJHIUY86H', price: '32000', date: '01-01-2020'},
  {itemId: 'KJHIUY86H', price: '32000', date: '01-01-2020'},
  {itemId: 'KJHIUY86H', price: '32000', date: '01-01-2020'},
];
