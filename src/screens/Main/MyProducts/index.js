import React, {useEffect, useState} from 'react';
import {View, Text,TouchableOpacity,FlatList, ScrollView,Image} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../../../components/Loader';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';

const MyProducts = ({route}) => {
    const navigation=useNavigation()
    const selector=useSelector(state=>state.ProductList)
    const isFetching=useSelector(state=>state.isFetching)
    const dispatch=useDispatch()

const manageCategory=async(id)=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  console.log('1111~~~',id,srno);
  dispatch({
    type: 'Get_Category_Request',
    url: 'GetPartnerProductsByCatalogueCategory',
    PartnerSrno:srno,
    Category:id,
    navigation
  });
}

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
      {isFetching?<Loader/>:null}
      <ScrollView>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,marginTop:20}}>
             <TouchableOpacity style={{
                 backgroundColor:'#032e63',
                 width:'48%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8
                 }}>
                 <Text style={{color:'#fff',fontFamily:'Philosopher-Regular',fontSize:16}}>My Products</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{
                 borderColor:'#032e63',
                 width:'48%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8,
                 borderWidth:1
                 }}>
                 <Text style={{color:'#032e63',fontFamily:'Philosopher-Regular',fontSize:16}}>Partner Categories</Text>
             </TouchableOpacity>
        </View>
        <View style={{marginTop:10}}>
            <FlatList
            data={selector}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                disabled={item.type=='add'?true:false}
                onPress={()=>manageCategory(item.Id)}
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
                  <Text style={{fontSize:12,textAlign:'center'}}>{'No more\nresults'}</Text>
                  </View>:
                // <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
                <View 
                style={{
                  width:'100%',
                  height:160,
                  alignItems:'center',
                  // justifyContent:'center'
                  }}>
                <Image
                style={{height: 100, width: '100%', }}
                resizeMode={'stretch'}
                source={{
                  uri: `${ImagePath.Path}${item.CategoryImage}`,
                }}
              />
              <View style={{marginTop:5,alignItems:'center'}}>
              <Text style={{fontFamily:'Acephimere',fontSize:14,color:'#032e63',fontWeight:'700'}}>{item.CategoryName}</Text>
              <Text style={{fontFamily:'Acephimere',fontSize:14,color:'#0d0d0d'}}>{`${item.TotalItems} Items`}</Text>
              </View>
              </View>
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
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png'),type:'add'},
];
  

  
