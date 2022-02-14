import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';

const MyProducts = ({route}) => {
    const navigation=useNavigation()
    const datas=route.params.title
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={datas}
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
          }}>
          <View>
              <Text>87 Items</Text>
          </View>
          <View>
              <View>
              <Image style={{width:15,height:16,tintColor:'#2c2e2c'}} source={require('../../../assets/Image/karni.png')}/>
              </View>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={()=>navigation.navigate('SubCategory')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 160,
                  backgroundColor: '#fff',
                  flex:1,
                  margin:10,
                  borderRadius:10,
                  elevation:3
                }}>
                 <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{height: 70}} />
      </ScrollView>
      <View style={{bottom: 0, left: 0, right: 0, position: 'absolute'}}>
        <TabView />
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
//   {title: 'Hello', type: 'add'},
];
