import React from 'react';
import { View,FlatList,TouchableOpacity,Text,Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from 'react-redux';
import ImagePath from '../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';
const Catalogue=()=>{
  const navigation=useNavigation()
  const selector = useSelector(state => state.Catalogue.Categories)
  const dispatch=useDispatch()
  console.log('this is user respons223',selector);
  const manageCategory=async(id)=>{
      const srno = await AsyncStorage.getItem('Partnersrno')
    const supplierid = await AsyncStorage.getItem('SupplierId')
  console.log('this is user category details',supplierid)
      dispatch({
        type: 'GetPartners_Catalogue_Request',
         url: 'GetPartnerProductsByCatalogueCategory',
        PartnerSrno: srno,
        Category: id,
        supplierId:supplierid,
        navigation
     
    });
  }
  

    return(
        <View>
             <View style={{backgroundColor:'#fff',alignItems:'center',justifyContent:'center',paddingVertical:14}}>
            <Text style={{fontSize:16,fontWeight:'700',fontFamily:'Roboto-Medium',color:'#032e63'}}>Categories </Text>
          </View>
          <FlatList
            data={selector}
            numColumns={3}
            renderItem={({item})=>(
              
              <TouchableOpacity
               // onPress={() => navigation.navigate('MyProductDetails', { id: item.Id })}
                onPress={()=>manageCategory(item.Id)}
              // onPress={()=>navigation.navigate('CategoryDetails')}
              style={{
                width: '33.3%',
                alignItems: 'center',
                // justifyContent: 'center',
                height: 160,
                backgroundColor:'#fff',
                borderWidth:0.3
              }}>
                {console.log('this is user respons2234',item)}

                 <Image
                style={{height: 100, width: '100%', }}
                // resizeMode={'stretch'}
                  source={{ uri: `${ImagePath.Path}${item.CategoryImage}`}}
              />
              <View style={{marginTop:5,alignItems:'center'}}>
                  <Text style={{ fontFamily: 'Acephimere', fontSize: 14, color: '#032e63', fontWeight: '700' }}>{item.CategoryName}</Text>
                  <Text style={{ fontFamily: 'Acephimere', fontSize: 14, color: '#0d0d0d' }}>{`${item.TotalItems} Items`}</Text>
              </View>
              </TouchableOpacity>
              
            )}
            />
           {/* <View style={{backgroundColor:'#fff'}}>
          <View style={{alignItems:'center',paddingVertical:20}}>
             <Text style={{fontSize:16,fontWeight:'700',fontFamily:'Roboto-Medium',color:'#032e63'}}>Collections</Text>
          </View>
           <View style={{width:'100%',height:180,borderTopWidth:1}}>

           </View>
           <View style={{width:'100%',height:180,borderTopWidth:1}}>

           </View>
           <View style={{width:'100%',height:180,borderWidth:1}}>

           </View>
        </View> */}
        </View>
    )
}
export default Catalogue;
const data1 = [
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png')},
  {title: require('../../assets/Image/myjewlery.png'),type:'add'},
  ];
  
  