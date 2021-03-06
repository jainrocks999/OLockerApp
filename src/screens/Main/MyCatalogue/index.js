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
  const selector=useSelector(state=>state.ProductList)
  const selector1=useSelector(state=>state.CollectionList)
  const selector2=useSelector(state=>state.Categories)
  const isFetching=useSelector(state=>state.isFetching)
  console.log('this is user selector data',selector1);
  const [product,setProduct]=useState(true)
  const [partner,setPartner]=useState(false)
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
  // const images = [
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
  //   'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  // ];
  const renderPage = (image, index) => {
    return (
      <View style={{width: '100%'}} key={index}>
        <Image
          style={{
            width: BannerWidth,
            height: BannerHeight,
            borderWidth: 1,
            borderRadius: 15,
          }}
          source={{uri: image}}
        />
      </View>
    );
  };

const manageCategory=async(id)=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
    dispatch({
      type: 'Get_Category_Request',
      url: 'GetPartnerProductsByCatalogueCategory',
      PartnerSrno:srno,
      Category:id,
      navigation
    });
  }

const manageProduct=()=>{
  setProduct(true)
  setPartner(false)
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
          {/* <Carousel
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel> */}
           <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            // onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:10,marginLeft:20,marginRight:50}}
            indicatorContainerStyle={{position:'absolute', bottom: 10}}
            indicatorActiveColor={'#032e63'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={5}
            animation
            component={<Banner/>}
            separatorWidth={15}
            width={300}
            autoscroll={false}
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
            <View style={{marginLeft:40,alignItems:'center'}}>
            <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#fff',borderWidth:1}}>
            <Image style={{height:100,width:95}} source={require('../../../assets/Image/neck.png')}/>
            </View>
              <Text style={{color:'#fff',marginTop:10,fontFamily:'Acephimere'}}>{'MY COLLECTIONS'}</Text>
            </View>
            
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
        <View style={{marginTop:10}}>
            {product==true?<FlatList
            data={selector}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>manageCategory(item.Id)}
              style={{
                width: '33.3%',
                alignItems: 'center',
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
            />:null}
            {partner==true?<FlatList
            data={selector2}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                // onPress={()=>manageCategory(item.Id)}
              style={{
                width: '33.3%',
                alignItems: 'center',
                height: 160,
                backgroundColor:'#fff',
                borderWidth:0.3
              }}>
                 <View>
                {item.CategoryImage? <Image
                style={{height: 100, width: 118, }}
                // resizeMode={'stretch'}
                source={{
                  uri: `${ImagePath.Path}${item.CategoryImage}`,
                }}
              />:<View style={{height:100}}/>}
              <View style={{marginTop:5,alignItems:'center'}}>
              <Text style={{fontFamily:'Acephimere',fontSize:14,color:'#032e63',fontWeight:'700'}}>{item.CategoryName}</Text>
              <Text style={{fontFamily:'Acephimere',fontSize:14,color:'#0d0d0d'}}>{`${item.TotalItems} Items`}</Text>
              </View>
              </View>
              </TouchableOpacity>
            )}
            />:null}
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


   