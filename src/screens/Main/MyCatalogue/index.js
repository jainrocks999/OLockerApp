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
import styles from './styles';

const MyCatalogue = ({route}) => {
  const selector4 = useSelector(state => state.Catalogue.Categories)
  const selector=useSelector(state=>state.ProductList)
  const selector3 = useSelector(state => state.NetworkList1)
  const selector1=useSelector(state=>state.CollectionList)
  const selector2=useSelector(state=>state.Myproduct)
  const isFetching=useSelector(state=>state.isFetching)
  console.log("log102",selector4);
  console.log('this is user selector data210',selector);
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
      <View style={styles.container}>
         <View style={styles.container1}>
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
        <View style={styles.main}>
            <TouchableOpacity style={{alignItems:'center'}}
             onPress={()=>
              onPressTouch()
              // navigation.navigate('MyProducts')

            }
             >
            <View style={styles.main1}>
              <Image style={styles.img} source={require('../../../assets/Image/my.png')}/>
            </View>
             <Text style={styles.tt}>{'MY PRODUCTS'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>onPressTouch1()}            
            style={styles.touch}>
            <View style={styles.main1}>
            <Image style={styles.img1} source={require('../../../assets/Image/neck.png')}/>
            </View>
              <Text style={styles.tt}>{'MY COLLECTIONS'}</Text>
            </TouchableOpacity>
            
        </View>
        <View style={styles.main2}>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('SelectOption')}
                >
                    <LinearGradient
                    style={styles.liner}
                     colors={['#da062f', '#a90022']} >
                  <View style={styles.linerview}>
                  <Image style={{height:22,width:30}} source={require('../../../assets/plus.png')}/>
                    <Text style={styles.linert}>{'ADD'}</Text>
                    <View style={{width:30}}/>
                  </View>
                  </LinearGradient>
                </TouchableOpacity>
            </View>
         <View style={{height:28}}/>
        </View>
      
        <View style={styles.card}>
             <TouchableOpacity
             onPress={()=>manageProduct()}
            style={[styles.cardtouch, { backgroundColor: product == true ? '#032e63' : '#fff', }]}>
            <Text style={[styles.tcard, { color: product == true ? '#fff' : '#032e63' }]}>My Products</Text>
             </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>tabCategory()}
            style={[styles.cardtouch, { backgroundColor: partner == true ? '#032e63' : '#fff', }]}>
            <Text style={[styles.tcard, { color: partner == true ? '#fff' : '#032e63' }]}>Partner Categories</Text>
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
              style={styles.card1}>
                {console.log('zzz',item)}
                 <Image
                style={styles.card1img}
                // resizeMode={'stretch'}
                source={{
                  uri: `${ImagePath.Path}${item.CategoryImage}`,
                }}
              />
              <View style={styles.card1v}>
              <Text style={[styles.card1t,{color:'#032e63',fontWeight:'700'}]}>{item.CategoryName}</Text>
                  <Text style={[styles.card1t, {color: '#0d0d0d' }]}>{`${item.TotalItems} Items`}</Text>
              </View>
              </TouchableOpacity>
            )}
            />:null}

          {partner==true ?<Text style={styles.partnert}>MY Supplier List</Text>
          :null}
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
                  style={styles.card2}>
                    {console.log('abvds',item)}
                  <View style={styles.card2v}>
                    {item.SupplierImage == null ?
                    <Image
                        style={styles.card2img}
                        resizeMode='cover'
                        source={require('../../../assets/demo.png')} />:
                    <Image
                        style={styles.card2img}
                      resizeMode='stretch'
                      source={{ uri: `${ImagePath.Path}${item.SupplierImage}` }}
                      /> 
                  }
                  </View>
                  <View style={styles.card2v1}>
                    <Text
                      style={styles.card2v1t}
                    >{item.SupplierName}</Text>
                    {/* <Text style={{ fontFamily: 'Acephimere', color: '#666666', fontSize: 12 }}>{item.CityName}</Text> */}
                  </View>
                  {console.log('supplier id 3r', item)}
                </TouchableOpacity>
              )}

            />:null}
            
         {partner==true?  <Text style={styles.partnert}>Partner Categories List</Text>
         :null}

          {partner == true ? <FlatList
            data={selector4}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => manageCategory1(item.Id)}
                // onPress={() => navigation.navigate('MyProductDetails',{id:item.Id})}
                style={styles.card1}>
                {console.log('zzz', item)}
                <Image
                  style={styles.card1img}
                  // resizeMode={'stretch'}
                  source={{
                    uri: `${ImagePath.Path}${item.CategoryImage}`,
                  }}
                />
                <View style={styles.card1v}>
                  <Text style={[styles.card1t, { color: '#032e63', fontWeight: '700' }]}>{item.CategoryName}</Text>
                  <Text style={[styles.card1t, { color: '#0d0d0d' }]}>{`${item.TotalItems} Items`}</Text>
                </View>
              </TouchableOpacity>
            )}
          /> : null}
        </View>
        <View style={{backgroundColor:'#fff'}}>
          <View style={styles.card3}>
             <Text style={styles.card3t}>My Collections</Text>
          </View>
          <View style={{marginTop:10}}>
          <FlatList
            data={selector1}
            renderItem={({item})=>(
              <View style={styles.card3v}>
                <Text style={styles.card3vt}>{item.Name}</Text>
                {item.CollectionImage == null ?

                  <Image
                    style={{ width: '30%', height: 100, }}
                    resizeMode='center'
                    source={require('../../../assets/demo.png')} /> :
                  <Image
                    style={styles.card3vimg}
                     resizeMode='contain'
                    source={{ uri: `${ImagePath.Path}${item.CollectionImage}` }}

                  />
                }

                {/* {console.log('jkkk',`${ImagePath.Path}${item.CollectionImage}`)}  */}
                
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
        {/* <TabView /> */}
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


   