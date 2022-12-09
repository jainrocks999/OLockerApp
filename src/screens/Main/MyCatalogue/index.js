import React, {useState, useEffect,useRef} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity,} from 'react-native';
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
import Toast from "react-native-simple-toast";
import { useIsFocused } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const MyCatalogue = ({route}) => {
  const selector4 = useSelector(state => state.Catalogue.Categories)
  const selector=useSelector(state=>state.ProductList)
  const selector3 = useSelector(state => state.NetworkList1)
  const selector1=useSelector(state=>state.CollectionList)
  const selector2=useSelector(state=>state.Myproduct)
  const isFetching=useSelector(state=>state.isFetching)
  const [product,setProduct]=useState(true)
  const [partner,setPartner]=useState(false)
  const [userdata,setUserdata]=useState(false)
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const BannerWidth = (Dimensions.get('window').width * 8) / 9;
  const BannerHeight = 140;
  // const scrollRef = useRef();
  const win = Dimensions.get('window');
  const isFocused = useIsFocused();
  const [tc, setTc] = useState(0);
  const [tc1, setTc1] = useState(0);
  console.log('item122ef',selector1)
  const scrollViewRef = useRef();

  useEffect(()=>{
  //  setUserdata(true)
  },[tc1])
  const onPressTouch1 = () => {
    scrollRef.current?.scrollTo({
    
      y: 199,
      animated: true,
    });
  }
 useEffect(()=>{
  if(isFocused){ 
   
    collectionDataR()
  
  }
  },[isFocused])
  const collectionDataR=async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
    dispatch({
      type: 'Get_Collection_Request',
      url: 'GetCollections',
      PartnerSrno:srno,
    });
  }
  const manageCategory1 = async (id,name) => {
    const srno = await AsyncStorage.getItem('Partnersrno')
    const supplierid = await AsyncStorage.getItem('SupplierId')
     console.log('this is user category details233', supplierid)
     console.log('this is user category details23345', id)
    dispatch({
      type: 'GetPartners_Catalogue_Request',
      url: 'GetPartnerProductsByCatalogueCategory',
      PartnerSrno: srno,
      Category: id,
      supplierId: supplierid,
      name1:name,
      navigation

    });
  }
  
const manageCategory=async(id,name)=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  console.log('this is user category details',id);

    dispatch({
      type: 'Get_Category_Request',
      url:'GetProductsByCatalogueCategory',
     // url: 'GetPartnerProductsByCatalogueCategory',
      PartnerSrno:srno,
      Category:id,
      name:name,
      navigation
    });
  }
  const manageProfile = async (id) => {
    AsyncStorage.setItem('SupplierId', JSON.stringify(id))
    // console.log('storage id for supplier', id);
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
  setUserdata(false)
 // Myproduct();
}
const tabCategory=()=>{
  setUserdata(false)
  setPartner(true)
  setProduct(false)
}
// const scrollToInitialPosition = () => {
//   this.scrollViewRef.scrollTo({ y: 100 });
// }
  return (
    <View style={{flex: 1}}>
      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/Image/dil.png')}
        title={'My Catalogue '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={()=>navigation.navigate('FavDetails')}
      />
      

      <ScrollView ref={scrollViewRef}

          contentOffset={{
            x: 0,
            y: userdata ? tc :tc1,
          }}
          // onLayout={(event) => {
          //   const layout = event.nativeEvent.layout;
          //   setTc1(layout.height-tc);
          // }}
          >
            {/* {console.log('distence............',(layout.height-tc))} */}
       <ScrollView  ref={scrollViewRef}
 
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          setTc(layout.height);
        }}
           >
       {isFetching?<Loader/>:null}
     
      <View style={styles.container}>
         <View style={styles.container1}>
           <FlatListSlider
            data={images}
            height={170}
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
        <View ref={scrollViewRef} 
        // ref={scrollViewRef}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
           setTc1(layout.height);
        }}
        style={styles.main}>
            <TouchableOpacity style={{alignItems:'center'}}
             onPress={()=>setUserdata (false)
              // navigation.navigate('MyProducts')
            }
             >
            <View  style={styles.main1}>
              <Image style={styles.img} source={require('../../../assets/Image/my.png')}/>
            </View>
             <Text style={styles.tt}>{'MY PRODUCTS'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=> setUserdata(true)}            
            style={styles.touch}>
            <View style={styles.main1}>
            <Image style={styles.img1} source={require('../../../assets/Image/neck.png')}/>
            </View>
              <Text style={styles.tt}>{'MY COLLECTIONS'}</Text>
            </TouchableOpacity>
            
        </View>
        <View  style={styles.main2}>
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
      
        <View  style={styles.card}>
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
        {/* {console.log('axxmmx',data)} */}

        <View 
        
        style={{marginTop:10}}>
            {product==true?<FlatList
            data={selector2}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>manageCategory(item.Id,item.CategoryName)}
                // onPress={() => navigation.navigate('MyProductDetails',{id:item.Id})}
              style={styles.card1}>
                {/* {console.log('zzz2222',`${ImagePath.Path}${item.CategoryImage}`)} */}
                 <Image
                style={{ width: win.width * 0.33,
                  height: '74%',
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  // borderWidth: 5,
                }}
                // resizeMode={'stretch'}
                source={{
                  uri: `${ImagePath.Path}${item.CategoryImage}`,
                }}
              />
              <View style={styles.card1v}>
              <Text style={[styles.card1t,{color:'#032e63',fontWeight:'700'}]}>{item.CategoryName}</Text>
                  {item.TotalItems==1? <Text style={[styles.card1t, {color: '#0d0d0d' }]}>{`${item.TotalItems} Item`}</Text>:
                  <Text style={[styles.card1t, {color: '#0d0d0d' }]}>{`${item.TotalItems} Items`}</Text>}
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
                  onPress={() => 
                    manageProfile(item.SupplierSrNo)}
                  style={styles.card2}>
                  
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
                 
                </TouchableOpacity>
              )}

            />:null}
          
         {partner==true? <Text style={styles.partnert}>Partner Categories List</Text> :null}
       
         {/* {selector4 !=undefined ? */}
          {/* (partner === true? selector4.length>0?  */}
          {partner== true?
         ( <FlatList
            data={selector4}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity

                onPress={() => 
                  manageCategory1(item.Id,item.CategoryName)}
                // onPress={() => navigation.navigate('MyProductDetails',{id:item.Id})}
                style={styles.card1}>
            
                <Image
                  style={styles.card1img}
                 
                  source={{
                    uri: `${ImagePath.Path}${item.CategoryImage}`,
                  }}
                />
                <View style={styles.card1v}>
                  <Text style={[styles.card1t, { color: '#032e63', fontWeight: '700' }]}>{item.CategoryName}</Text>
                 {/* {item.TotalItems==1?  */}
                 <Text style={[styles.card1t, { color: '#0d0d0d' }]}>{item.TotalItems==1?`${item.TotalItems} Item`:`${item.TotalItems} Items`}</Text>
                  {/* <Text style={[styles.card1t, { color: '#0d0d0d' }]}>{`${item.TotalItems} Items`}</Text>} */}
                </View>
              </TouchableOpacity>
            )}
          />)
          
          // :(Toast.show('dddd')):null)
          :null}
        </View>
        </ScrollView>
       
        {product==true?
        <View ref={scrollViewRef} style={{backgroundColor:'#fff'}}>
          <View style={styles.card3}>
             <Text style={styles.card3t}>My Collections</Text>
          </View>
          <View style={{marginTop:-10}}>
          <FlatList
            data={selector1}
            renderItem={({item})=>(
          //     <View style={ {
          //       width: '100%',
          //     alignItems: 'center',
          //         height:230,
          //     borderWidth: .5
          // }}>
          //       {console.log('item122ef',`${ImagePath.Path}/${item.CollectionImage}`)}
          //       <Text style={styles.card3vt}>{item.Name}</Text>

          //       <View style={{width:'100%',height:'70%',borderWidth:2,borderColor:'blue'}}>
          //       {item.CollectionImage == null ?

          //         <Image
          //           style={{ width: '30%', height: 100, }}
          //           source={require('../../../assets/demo.png')} /> :
          //         <Image
          //           style={styles.card3vimg}
          //           //  resizeMode='contain'
          //           source={{ uri: `${ImagePath.Path}${item.CollectionImage}` }}

          //         />
          //       }
          //       </View>
          //     </View>
          <View
          style={{
            height: hp('23%'),
            width: '99%',
            // marginTop: '50%',
            alignSelf: 'center',
            borderWidth: 0.5,
          }}>
           
          <View style={{height: hp('3%'), width: '100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.card3vt}>{item.Name}</Text>
          </View>
          <View
            style={{height: hp('19%'), width: wp('95%'), maxHeight: hp('21.5%'),}}>
            <Image
              style={{
                width: win.width * 0.93,
                height: '100%',
                resizeMode: 'contain',
                alignSelf: 'center',
                // borderWidth: 5,
              }}
              source={{
                uri: `${ImagePath.Path}${item.CollectionImage}`,
              }}
              // source={{uri:'https://devappapi.olocker.in///images/CollectionImages/2021/8/59902037.jpg'}}
              // source={{uri:'https://devappapi.olocker.in///images/CollectionImages/2021/8/20366130.jpg'}}
              // source={{uri:'https://devappapi.olocker.in///images/rss/no-image.jpg'}}
            />
          </View>
        </View>
            )}
            />
            
        </View>
        </View>
           :null}  
          
        <View style={{height:0}}/>

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


   