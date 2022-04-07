import React from 'react';
import { View,FlatList,TouchableOpacity,Text,Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from 'react-redux';
import ImagePath from '../../components/ImagePath';

const Catalogue=()=>{
  const navigation=useNavigation()
  const selector=useSelector(state=>state.ProductList)
  const dispatch=useDispatch()

  const manageCategory=(id)=>{
    dispatch({
      type: 'Get_Category1_Request',
      url: 'GetPartnerProductsByCatalogueCategory',
      PartnerSrno:575,
      Category:id,
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
  
  