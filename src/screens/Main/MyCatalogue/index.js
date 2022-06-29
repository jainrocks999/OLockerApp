import React, {useState, useEffect,useRef} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity} from 'react-native';
import TabView from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import Carousel from 'react-native-banner-carousel';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import Banner from '../../../components/Banner';
import {FlatListSlider} from 'react-native-flatlist-slider';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';

const MyCatalogue = ({route}) => {
  const selector4 = useSelector(state => state.Catalogue.Categories)
  const selector=useSelector(state=>state.ProductList)
  const selector3 = useSelector(state => state.NetworkList1)
  const selector1=useSelector(state=>state.CollectionList)
  const selector2=useSelector(state=>state.Myproduct)
  const isFetching=useSelector(state=>state.isFetching)
  console.log("log102",selector3);
  console.log('this is user selector data',selector);
  const [product,setProduct]=useState(true)
  const [partner,setPartner]=useState(false)
  const [data,setUserdata]=useState()
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const BannerWidth = (Dimensions.get('window').width * 8) / 9;
  const BannerHeight = 140;
  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 400,
      animated: true,
    });
  }
  const onPressTouch1 = () => {
    scrollRef.current?.scrollTo({
      y: 600,
      animated: true,
    });
  }
  const manageCategory1 = async (id) => {
    const srno = await AsyncStorage.getItem('Partnersrno')
    const supplierid = await AsyncStorage.getItem('SupplierId')
    console.log('this is user category details', supplierid)
    dispatch({
      type: 'GetPartners_Catalogue_Request',
      url: 'GetPartnerProductsByCatalogueCategory',
      PartnerSrno: srno,
      Category: id,
      supplierId: supplierid,
      navigation

    });
  }
  
const manageCategory=async(id)=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  console.log('this is user category details',id);

    dispatch({
      type: 'Get_Category_Request',
      url:'GetProductsByCatalogueCategory',
     // url: 'GetPartnerProductsByCatalogueCategory',
      PartnerSrno:srno,
      Category:id,
      navigation
    });
  }
 
  const Myproduct=async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://devappapi.olocker.in/api/Partner/GetCatalogueCategories',
      headers: { 
        'Content-Type': 'application/json', 
        'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
      },
       params:{
      PartnerSrno:srno
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log('response1zz',JSON.stringify(response.data.Categories));
      setUserdata(response.data.Categories);
      
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }
console.log('cvvvv',data);
  const manageProfile = async (id) => {
    AsyncStorage.setItem('SupplierId', JSON.stringify(id))
    console.log('storage id for supplier', id);
    dispatch({
      type: 'Partner_Catalogue_Request',
      url: 'GetPartnerCatalogueCategories',
      SupplierSrNo: id,
      navigation
    });
  }
const manageProduct=()=>{
  setProduct(true)
  setPartner(false)
 // Myproduct();
}
const tabCategory=()=>{
  setPartner(true)
  setProduct(false)
}
const scrollToInitialPosition = () => {
  this.scrollViewRef.scrollTo({ y: 100 });
}
  return (
    <View style={{flex: 1}}>
      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Catalogue '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      {isFetching?<Loader/>:null}
      <ScrollView 
       ref={scrollRef}
      >
      <View
          style={{
            backgroundColor: '#032e63',
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius:60,
          }}>
         <View style={{alignItems: 'center', height: 200,marginTop:5}}>
           <FlatListSlider
            data={images}
            height={200}
            timer={3000}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:30}}
            indicatorContainerStyle={{position:'absolute', bottom: 10}}
            indicatorActiveColor={'#032e63'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={5}
            animation
            component={<Banner/>}
            separatorWidth={15}
            width={300}
            autoscroll={false}
            loop={false}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:40,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity style={{alignItems:'center'}}
             onPress={()=>
              onPressTouch()
              // navigation.navigate('MyProducts')

            }
             >
            <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#fff',borderWidth:1}}>
              <Image style={{height:100,width:100}} source={require('../../../assets/Image/my.png')}/>
            </View>
             <Text style={{color:'#fff',marginTop:10,
             fontFamily:'Acephimere'
             }}>{'MY PRODUCTS'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>onPressTouch1()}            
            style={{marginLeft:40,alignItems:'center'}}>
            <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#fff',borderWidth:1}}>
            <Image style={{height:100,width:95}} source={require('../../../assets/Image/neck.png')}/>
            </View>
              <Text style={{color:'#fff',marginTop:10,fontFamily:'Acephimere'}}>{'MY COLLECTIONS'}</Text>
            </TouchableOpacity>
            
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('SelectOption')}
                >
                    <LinearGradient
                    style={{
                      paddingHorizontal:15,
                      paddingVertical:9,
                      borderRadius:25,
                      }}
                     colors={['#da062f', '#a90022']} >
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Image style={{height:22,width:30}} source={require('../../../assets/plus.png')}/>
                    <Text style={{
                      color:'#fff',
                      marginLeft:8,
                      fontFamily:'Roboto-Medium',
                      fontWeight:'700',
                      fontSize:16
                      }}>{'ADD'}</Text>
                    <View style={{width:30}}/>
                  </View>
                  </LinearGradient>
                </TouchableOpacity>
            </View>
         <View style={{height:28}}/>
        </View>
      
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,marginTop:20}}>
             <TouchableOpacity
             onPress={()=>manageProduct()}
              style={{
                 backgroundColor:product==true?'#032e63':'#fff',
                 width:'48%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8,
                 borderColor:'#032e63',
                 borderWidth:1
                 }}>
                 <Text style={{color:product==true?'#fff':'#032e63',fontFamily:'Philosopher-Regular',fontSize:16}}>My Products</Text>
             </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>tabCategory()}
             style={{
                 borderColor:'#032e63',
                 width:'48%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8,
                 borderWidth:1,
                 backgroundColor:partner==true?'#032e63':'#fff'
                 }}>
                 <Text style={{color:partner==true?'#fff':'#032e63',fontFamily:'Philosopher-Regular',fontSize:16}}>Partner Categories</Text>
             </TouchableOpacity>
        </View>
        {console.log('axxmmx',data)}

        <View style={{marginTop:10}}>
            {product==true?<FlatList
            data={selector2}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>manageCategory(item.Id)}
                // onPress={() => navigation.navigate('MyProductDetails',{id:item.Id})}
              style={{
                width: '33.3%',
                alignItems: 'center',
                height: 160,
                backgroundColor:'#fff',
                borderWidth:0.3
              }}>
                {console.log('zzz',item)}
                 <Image
                style={{height: 100, width: '100%', }}
                // resizeMode={'stretch'}
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
            />:null}
            {partner==true?  
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={selector3}
              //numColumns={2}
              style={{ margin: 10, marginTop:0, marginBottom:0 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => manageProfile(item.SupplierSrNo)}
                  style={{ width:120, margin: 5, borderRadius: 20, height: 145, marginTop: 0 }}>
                    {console.log('abvds',item)}
                  <View style={{ backgroundColor: 'red', height: 80, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    {item.SupplierImage == null ?
                    <Image
                        style={{ width: '100%', height: 80, borderRadius: 0 }}
                        resizeMode='cover'
                        source={require('../../../assets/Not.png')} />:
                    <Image
                      style={{ height: 80, width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                      resizeMode='stretch'
                      source={{ uri: `${ImagePath.Path}${item.SupplierImage}` }}
                      /> 
                  }
                  </View>
                  <View style={{
                    backgroundColor: '#fff',
                    //  height:80,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    padding: 10,
                    justifyContent: 'center',

                  }}>
                    <Text
                      style={{ color: '#032e63', fontSize: 15, fontFamily: 'Acephimere', }}
                    >{item.SupplierName}</Text>
                    {/* <Text style={{ fontFamily: 'Acephimere', color: '#666666', fontSize: 12 }}>{item.CityName}</Text> */}
                  </View>
                  {console.log('supplier id 3r', item)}
                </TouchableOpacity>
              )}

            />:null}
          {partner == true ? <FlatList
            data={selector4}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => manageCategory1(item.Id)}
                // onPress={() => navigation.navigate('MyProductDetails',{id:item.Id})}
                style={{
                  width: '33.3%',
                  alignItems: 'center',
                  height: 160,
                  backgroundColor: '#fff',
                  borderWidth: 0.3
                }}>
                {console.log('zzz', item)}
                <Image
                  style={{ height: 100, width: '100%', }}
                  // resizeMode={'stretch'}
                  source={{
                    uri: `${ImagePath.Path}${item.CategoryImage}`,
                  }}
                />
                <View style={{ marginTop: 5, alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Acephimere', fontSize: 14, color: '#032e63', fontWeight: '700' }}>{item.CategoryName}</Text>
                  <Text style={{ fontFamily: 'Acephimere', fontSize: 14, color: '#0d0d0d' }}>{`${item.TotalItems} Items`}</Text>
                </View>
              </TouchableOpacity>
            )}
          /> : null}
        </View>
        <View style={{backgroundColor:'#fff'}}>
          <View style={{alignItems:'center',paddingVertical:20}}>
             <Text style={{fontSize:20,fontFamily:'Philosopher-Regular',color:'#032e63'}}>My Collections</Text>
          </View>
          <View style={{marginTop:10}}>
          <FlatList
            data={selector1}
            renderItem={({item})=>(
              <View
              style={{
                // width: '100%%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 180,
                // backgroundColor:'#fff',
                borderWidth:.5
              }}>

                {item.Url == null ?

                  <Image
                    style={{ width: '100%', height: 160, }}
                    resizeMode='center'
                    source={require('../../../assets/Not.png')} /> :
                  <Image
                    style={{ height: 100, width: 160, }}
                    resizeMode='stretch'
                    source={{ uri: `${ImagePath.Path}${(item.Url).substring(2)}` }}

                  />
                }

                {console.log('jkkk',item)} 
                 <Text>{item.Name}</Text>
                {/* <Image
                  style={{height: 160, width: '100%', }}
                  resizeMode={'stretch'}
                  source={{
                    uri: `https://api.myjeweller.in${(item.Url).substring(2)}`,
                  }}
                /> */}
              </View>
            )}
            />
            
        </View>
        </View>
        <View style={{height:80}}/>

      </ScrollView>
      <View style={{bottom: 0, position: 'absolute', left: 0, right: 0}}>
        <TabView />
      </View>
    </View>
  );
};
export default MyCatalogue;
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
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  
   ]


   