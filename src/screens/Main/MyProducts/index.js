import React, {useEffect, useState} from 'react';
import {View, Text,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';

const MyProducts = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Products '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,marginTop:20}}>
             <TouchableOpacity style={{
                 backgroundColor:'#032e63',
                 width:'46%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8
                 }}>
                 <Text style={{color:'#fff'}}>My Products</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{
                 backgroundColor:'#032e63',
                 width:'46%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8
                 }}>
                 <Text style={{color:'#fff'}}>Partner Catagories</Text>
             </TouchableOpacity>
        </View>
        <View style={{marginTop:10}}>
            <FlatList
            data={data}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>navigation.navigate('MyProductDetails',{
                    title:item.title
                })}
              style={{
                width: '33.3%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 160,
                backgroundColor:'#fff',
                borderWidth:0.3
              }}>
                  {item.type=='add'?
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,textAlign:'center'}}>{'No more\nresules'}</Text>
                  </View>:
                <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
                  }
              </TouchableOpacity>
            )}
            />

        </View>
        <View style={{height:70}}/>
        </ScrollView>
    <View style={{bottom:0,left:0,right:0,position:'absolute'}}>
        <TabView/>
    </View>
    </View>
  );
};
export default MyProducts;
const data = [
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello',type:'add'}
  ];
  
