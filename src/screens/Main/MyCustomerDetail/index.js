import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Linking
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Header from '../../../components/CustomHeader';
import BottomTab from '../../../components/StoreButtomTab';
import { useSelector,useDispatch } from "react-redux";
import Loader from '../../../components/Loader';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';

const Mycustomer = () => {
  const navigation = useNavigation();
  const isFetching=useSelector(state=>state.isFetching)
  const selector=useSelector(state=>state.User)
  const selector1=useSelector(state=>state.PurchaseHistory)
  console.log('this is selector data',selector1);
  const dispatch=useDispatch()
const manageFeedback=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
    dispatch({
      type: 'Get_Feedback_Request',
      url: 'GetCustomerFeedbackByPartnerId',
      PartnerSrno:srno,
      navigation
    });
  }


  return (
    <View style={styles.container1}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Customers Profile'}
        onPress={() => navigation.goBack()}
      />
      {isFetching?<Loader/>:null}
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
        <View style={{width: '30%', height: 100, }}>
          <Image 
          style={{height: '100%', width: 100 }}
          source={{
            uri: `${ImagePath.Path}${selector.ImageLocation}`,
          }}
          />
        </View>
        <View style={{width: '70%', paddingHorizontal: 10}}>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Text style={{
              color: '#032e63', 
              fontSize: 16,
              fontFamily:'Acephimere',
              }}>{`${selector.FirstName} ${selector.LastName}`}</Text>
            <View
              style={{
                backgroundColor: '#595758',
                marginLeft: 7,
                paddingHorizontal: 10,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:1,
                paddingVertical:2,
                borderRadius:10
              }}>
              <Text style={{fontSize: 9, color: '#fff',fontFamily:'Acephimere'}}>PLATINUM</Text>
            </View>
          </View>
          <Text style={{fontSize: 12, fontFamily: 'Acephimere', marginTop: 8,color:'#343434'}}>
            {/* {'34,Atmosphere Tower\nNavi Mumbai 400000\nMaharashtra,India'} */}
            {` ${selector.Address1}\n ${selector.City} ${selector.Pin}\n ${selector.State} ${selector.Country}`}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginTop: 10, color: '#313131',fontFamily:'Acephimere'}}>{`+91${selector.MobileNo}`}</Text>
            <TouchableOpacity
            onPress={()=>Linking.openURL(`tel:${selector.MobileNo}`)}
            >
            <Image
              style={{height: 28, width: 29,}}
              resizeMode={'contain'}
              source={require('../../../assets/PartnerImage/16.png')}
            />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: '#032e63',fontFamily:'Acephimere'}}>Birthday</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:15,width:15}} source={require('../../../assets/calender.png')}/>
              <Text style={{marginLeft:6,fontFamily:'Acephimere'}}>{selector.DOB}</Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#032e63',fontFamily:'Acephimere'}}>Anniversary</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{height:15,width:15}} source={require('../../../assets/calender.png')}/>
              <Text style={{marginLeft:6,fontFamily:'Acephimere'}}>NA</Text>
              </View>

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
            <Text style={{fontSize: 18, fontFamily: 'Philosopher-Regular', color: '#032e63'}}>
              {'Customer Management '}
            </Text>
          </View>
          <View style={{borderWidth: 0.4, borderColor: 'grey'}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => manageFeedback()}
              style={{
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{height: 35, width: 35,tintColor:'#032e63'}}
                  source={require('../../../assets/Image/handFeed.png')}
                />
              </View>
              <Text style={{fontSize: 11, marginTop: 5,color:'#343434',fontFamily:'Acephimere'}}>Feedback</Text>
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
              <Text style={{fontSize: 11, marginTop: 14,fontFamily:'Acephimere',color:'#343434'}}>Message Box</Text>
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
              <Text style={{fontSize: 11, marginTop: 14,fontFamily:'Acephimere',color:'#343434'}}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{fontSize: 16,color:'#565656',fontFamily:'Acephimere'}}>Purchase History</Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Purchase')}
           style={{backgroundColor:'#032e63',paddingHorizontal:10,borderRadius:8,paddingVertical:3}}>
              <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:11}}>View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={selector1}
          renderItem={({item}) => (
            <View style={{backgroundColor:'#fff',marginTop:10,flexDirection:'row',paddingHorizontal:15,paddingVertical:15}}>
              {console.log('xmv',item)}
                <View style={{width:100,height:90,borderWidth:1}}>
                  
                  <Image 
                        style={{height: '100%', width: 100 }}
                        source={{
                          uri: `${ImagePath.Path}${item.CategoryImage}`,
                        }}
                      >

                      </Image>
                      <View style={{width:'100%',alignItems:'flex-end',marginTop:-89}}>
                    <View style={{
                      backgroundColor:'#24a31e',
                      borderBottomLeftRadius:13,
                      paddingVertical:2,
                      paddingHorizontal:10,
                      alignItems:'center',
                      justifyContent:'center'
                    }}>
                      <Text style={{fontFamily:'Roboto-Medium',fontSize:11,color:'#fff',marginBottom:1}}>INSURED</Text>
                      
                    </View>

                  </View>
                </View>
                <View style={{width:'70%',paddingHorizontal:8}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#343434',fontFamily:'Acephimere',fontSize:12}}>{`ITEM ID   ${item.PolicyNo}`}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Image style={{width:16,height:16}} source={require('../../../assets/Image/rupay.png')}/>
                        <Text style={{color:'#343434',fontFamily:'Acephimere'}}>{item.EstValue}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:12,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>{`Purchase Date  ${item.PurchaseDate}`}</Text>
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
