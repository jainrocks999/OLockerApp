import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from "../../../components/Preview";

const SubCategory = ({route}) => {
    const navigation=useNavigation()
  return (
    <View style={{flex: 1,backgroundColor:'#032e63'}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'Neclace'}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
            flex:1
          }}>
          <View>
              <Text style={{color:'#fff'}}>Icon</Text>
          </View>
          <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Filter')}>
              <Image style={{width:15,height:16,tintColor:'#fff'}} source={require('../../../assets/Image/karni.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:10}}>
        <FlatListSlider
          data={images}
          width={205}
          timer={5000}
          component={<Preview />}
          onPress={item => alert(JSON.stringify(item))}
          indicatorActiveWidth={40}
          contentContainerStyle={{paddingHorizontal: 16}}
          animation
          indicator={false}
          autoscroll={false}
        />
      </View>
      
        <View style={{alignItems:'center',marginTop:20}}>
        <Text style={{color:'#fff'}}>{'5,25,000.00 (Approximate price)'}</Text>
        </View>
        <View style={{padding:20}}>
          <View style={{
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingVertical: 10,
        width:'100%',
        paddingHorizontal:10
        }}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:15,color:'#000'}}>PRODUCT DESCRIPTION</Text>
        </View>
        <View style={{marginLeft:20}}>
          <Text style={{color:'#000',marginTop:8}}>{'Collection :      Kangan'}</Text>
          <Text style={{color:'#000',marginTop:8}}>{'Stock No :        45UYTR-8UYTR'}</Text>
          <Text style={{color:'#000',marginTop:8}}>{'Metal :              Gold 999 - 50.00 Gms'}</Text>
        </View>
          </View>
          <View style={{
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20,
            flexDirection:'row',
            }}>
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20,
                width:'48%',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{color:'#fff',fontSize:12}}>ADD TO CATALOGUE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20,
                width:'48%',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{color:'#fff',fontSize:12}}>ENQURE NOW</Text>
              </TouchableOpacity>
          </View>


      </View>
      <View style={{height:100}}/>
      </ScrollView>
      <View style={{bottom: 0, left: 0, right: 0, position: 'absolute'}}>
        <TabView />
      </View>
    </View>
  );
};
export default SubCategory;

const images = [
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 {
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
 ]