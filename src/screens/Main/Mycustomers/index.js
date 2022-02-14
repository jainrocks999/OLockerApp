import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
 FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
       <View style={styles.blog}>
            <Image style={styles.img1}
              source={require('../../../assets/search1.png')}
            />
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Search by Name or Phone Number"
              placeholderTextColor='grey'
              style={{color: 'grey', width: '100%'}}
              returnKeyType="done"
            />
          </View>
          <View>
            <FlatList 
            data={User}
            renderItem={({item})=>(
              <TouchableOpacity
               onPress={()=>navigation.navigate('MyCustomerDetail')}
               style={{
                backgroundColor:'#fff',
                marginTop:10,
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
                alignItems:'center',
                paddingVertical:10
              }}>
                <View style={{height:40,borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Image
                style={{width:40,height:40,borderRadius:20}}
                source={item.image}/>
                <Text style={{marginLeft:20}}>{item.title}</Text>
                </View>
                <View>
                  <Text>{item.mobile}</Text>
                </View>
              </TouchableOpacity>
            )}
            />
          </View>
       <View style={{backgroundColor:'#032e63',width:60,height:60,
          position:'absolute',bottom:80,right:15,borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text style={{color:'#fff',fontSize:30,fontWeight:'500'}}>+</Text>
        </View>
      <View style={{bottom: 0, position: 'absolute', left: 0, right: 0}}>
        <BottomTab />
      </View>
     </View>
  );
};
export default Mycustomer ;
const User=[
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
]
Data = [
  { label: 'Milind Sethia', value: '+918765467834' },
  { label: 'Manish Ranka', value: '+918765467834' },
  { label: 'Atul Bhargawa', value: '+918765467834' },
]