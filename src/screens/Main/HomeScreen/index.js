import React,{useEffect,useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/CustomHeader';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import { useDispatch ,useSelector} from 'react-redux';
import Loader from '../../../components/Loader';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Banner from '../../../components/Banner';
import ImagePath from "../../../components/ImagePath";
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const [data,setData]=useState()
  const [collections,setCollecions]=useState()
  const isFetching=useSelector(state=>state.isFetching)
  const selector=useSelector(state=>state.NetworkList1)
  const selector1=useSelector(state=>state.Gold)
  console.log('this is gold location ',selector1);
  const BannerWidth = (Dimensions.get('window').width * 15) / 16;
  const BannerHeight = 180;
  // const images = [
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
  //   'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  // ];

  const [data1, setData1] = useState([
    {
      id:   1,
      name: 'john',
      gender: 'm'
    },
    {
      id:   2,
      name: 'mary',
      gender: 'f'
    }
  ]);

  var object = {
    dataAttribute: [
    {
      id: 1,
      title: 'A',
      data: [
        { id: '1', name: 'First Name', type: 'text' },
        { id: '2', name: 'Last Name', type: 'text' },
      ],
    },
    {
      id: 2,
      title: 'B',
      data: [
        { id: '1', name: 'Twitter', type: 'text' },
        { id: '2', name: 'Twitter follower', type: 'number' },
      ],
    }
  ]
  }

   // add statusSelected to the first item of the nested data array
   object.dataAttribute[0].data[0].statusSelected = true;
console.log('this is new array',object.dataAttribute[0].data[0]);

  useEffect(async()=>{
  const partnerSrNo=await AsyncStorage.getItem('Partnersrno')
  console.log('this is partner no',partnerSrNo);
    dispatch({
      type: 'Get_Product_Request',
      url: 'GetPartnerCatalogueCategories',
      PartnerSrno:partnerSrNo,
    });
    dispatch({
      type: 'Get_Collection_Request',
      url: 'GetCollections',
      PartnerSrno:partnerSrNo,
    });
    dispatch({
      type: 'Get_Categories_Request',
      url: 'GetCatalogueCategories',
      PartnerSrno:partnerSrNo,
    });

    dispatch({
      type: 'Get_Gold_Request',
      url: 'GetIBJAratesByPartnerId',
      PartnerId:partnerSrNo,
    });

    dispatch({
      type: 'Get_Network1_Request',
      url: 'GetMyNetworkByPartnerId',
      partnerSrNo:partnerSrNo,
      navigation
    });
  },[])

  const manageProfile=(id)=>{
    dispatch({
      type: 'Get_Profile_Request',
      url: 'GetSupplierProfile',
      supplierSrno:id,
      navigation
    });
  }

  const renderPage = (image, index) => {
    return (
      <View style={{width: '100%'}} key={index}>
        <Image
          style={{
            width: BannerWidth,
            height: BannerHeight,
            borderRadius: 15,
          }}
          source={{uri: image}}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {isFetching?<Loader/>:null}
      <ScrollView style={{flex: 1, backgroundColor: '#f0eeef'}}>
        <ImageBackground
          style={{
            height: 260,
            width: '100%',
          }}
          source={require('../../../assets/Image/1.png')}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Message')}>
                <Image
                  style={styles.img1}
                  source={require('../../../assets/Fo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 15}}>
                <Image
                  style={styles.img2}
                  source={require('../../../assets/La.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{width: 34, height: 22, marginLeft: 15}}
                  source={require('../../../assets/Image/menu-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                color: '#c6e0ff',
                fontFamily: 'Roboto-Medium',
              }}>
              Welcome to MyJeweller
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 24,
                fontFamily: 'Roboto-Medium',
              }}>
              {'Onestop solution\nfor you'}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{alignItems: 'center', height: 200, marginTop: -115}}>
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
          {/* <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel> */}
        </View>
        <View style={{marginTop: 10, paddingHorizontal: 12}}>
          <View
            style={{
              paddingHorizontal: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 102, height: 22, tintColor: '#032e63'}}
              source={require('../../../assets/Image/myjewlery.png')}
            />
            <TouchableOpacity onPress={()=>updateFieldChanged('1')}>
            <Text
              style={{
                marginLeft: 5,
                marginTop: 5,
                color: '#032e63',
                fontSize: 17,
                fontWeight: '700',
                fontStyle: 'italic',
                fontFamily:'Roboto-Medium'
              }}>
              Network
            </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={selector}
            style={{marginTop:7}}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={()=>manageProfile(item.SupplierSrNo)}
                style={{
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.6,
                  shadowRadius: 8,
                  elevation: 3,
                  borderRadius: 10,
                  width: 120,
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 120,
                  backgroundColor:'#fff'
                
                }}>
                <Image
                  style={{height: 120, width: '100%',borderRadius:15}}
                  resizeMode='stretch'
                  source={{uri: `${ImagePath.Path}${item.SupplierImage}`}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyCatalogue',{
                data:data,
                collections:collections
              })}
              style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../assets/Image/services.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 6,
                  color: '#032e63',
                  fontFamily: 'Roboto-Medium',
                }}>
                {'Catalogue'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Customers')}
              style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../assets/Image/custmer.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 6,
                  color: '#032e63',
                  fontFamily: 'Roboto-Medium',
                }}>
                {'Customers'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyNetwork')}
              style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../../../assets/Image/partner.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 6,
                  color: '#032e63',
                  fontFamily: 'Roboto-Medium',
                }}>
                {'My Network'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 35, height: 30,marginBottom:2}}
                source={require('../../../assets/Image/gold.png')}
              />
              <View
                style={{
                  marginLeft: 7,
                  marginTop: 9,
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000',
                    fontStyle: 'italic',
                    fontFamily:'Roboto-Medium',
                    fontWeight:'700',
                  }}>
                  {'Gold '}
                </Text>
                <Text
                  style={{
                    color: '#032e63',
                    fontSize: 17,
                    fontStyle: 'italic',
                    fontFamily: 'Roboto-Medium',
                    fontWeight:'700'
                  }}>
                  {'Price '}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: 4,
                paddingHorizontal: 14,
                backgroundColor: '#032e63',
                borderRadius: 12,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: 30, paddingHorizontal: 12}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={selector1}
            renderItem={({item}) => (
              <ImageBackground
              source={require('../../../assets/PartnerImage/goldIcon.png')}
                style={{
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.6,
                  shadowRadius: 8,
                  elevation: 3,
                  borderRadius: 15,
                  width: 120,
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 160,
                  marginHorizontal:5,
                  backgroundColor:'#fff'
                }}>
                 <Text style={{fontFamily:'Roboto-Medium',fontSize:16,marginBottom:20,fontWeight:'700'}}>{`${((item.Purity)*24/1000).toFixed(0)} K`}</Text>
                 <View style={{bottom:15,position:'absolute',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                   <Image style={{height:16,width:20}} source={require('../../../assets/Image/rupay.png')}/>
                 <Text style={{fontFamily:'Roboto-Medium',fontSize:18,fontWeight:'700',marginTop:3}}>{item.PM}</Text>
                 </View>
              </ImageBackground>
            )}
          />
        </View>
      </ScrollView>
      <TabView />
    </View>
  );
};
export default HomeScreen;
const data2 = [
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
  {title: require('../../../assets/Image/myjewlery.png')},
];
const data1 = [
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
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
