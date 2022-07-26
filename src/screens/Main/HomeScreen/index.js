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
  console.log('networklist21',selector);
  const GraphicalNotification=useSelector(state=>state.GraphicalNotification)
  console.log('this is graphical notification data',GraphicalNotification);
  const selector1=useSelector(state=>state.Gold)
  const BannerWidth = (Dimensions.get('window').width * 15) / 16;
  const BannerHeight = 180;
console.log("goldprice......",selector1);
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
   object.dataAttribute[0].data[0].statusSelected = true;

   useEffect( ()=>{
     Demo();
    (async() => {
      const partnerSrNo=await AsyncStorage.getItem('Partnersrno');
      const Supplier=await AsyncStorage.getItem('SuppliesnrNo')
      console.log('fffhhhf',partnerSrNo);
      console.log("aaahhaaa",Supplier);
      dispatch({
        type: 'Get_Allsupplier_Request',
        url:'GetAllSupplier',
        PartnerSrno:partnerSrNo
      });
      dispatch({
        type:'Get_SupplierProducts_Request',
        url:'GetSupplierProducts',
        PartnerSrno:partnerSrNo
      })
      dispatch({
        type:'Get_Products_Request',
        url:'GetProducts',
        PartnerSrno:partnerSrNo
      });
      dispatch({
        type:'Get_Catalogcategories_Request',
        url:'GetCatalogueCategories',
        PartnerSrno:partnerSrNo,
      });
      dispatch({
        type: 'Get_Graphical_Request',
        url: 'GetGraphicalNotifications',
      });
      dispatch({
        type: 'Get_Allnotification_Request',
        url: 'GetAllNotification',
        PartnerSrno: partnerSrNo
      });
      dispatch({
        type: 'Get_Product_Request',
        url: 'GetPartnerCatalogueCategories',
        SupplierSrNo:12,
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
  } ) ();
 },[]);
 const Demo=()=>{

  var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://devappapi.olocker.in/api/Supplier/GetAllSupplier?partnerSrno=483',
  headers: { 
    'Content-Type': 'application/json', 
    'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
  }
};

axios(config)
.then(function (response) {
  console.log('aaaaaaaaaaaaaaa',JSON.stringify(response.data.Suppliers));
  
})
.catch(function (error) {
  console.log(error);
});

 }

  const manageProfile= async(id)=>{

    dispatch({
      type: 'Get_Profile_Request',
      url: 'GetSupplierProfile',
      supplierSrno:id,
      navigation
    });
     AsyncStorage.setItem('SupplierId', JSON.stringify(id))
    console.log('storage id for supplier', id);
    dispatch({
      type: 'Partner_Catalogue_Request',
      url: 'GetPartnerCatalogueCategories',
      SupplierSrNo: id,
      navigation
    });
  }

  return (
    <View style={{flex: 1}}>
      {isFetching?<Loader/>:null}
      <ScrollView style={styles.scroll}>
        <ImageBackground
          style={styles.imgback}
          source={require('../../../assets/Image/1.png')}>
          <View style={styles.container}>
            <View
              style={styles.headertouch}>
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
                  style={styles.img3}
                  source={require('../../../assets/Image/menu-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={styles.text1}>
              Welcome to MyJeweller
            </Text>
            <Text
              style={styles.text2}>
              {'Onestop solution\nfor you'}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={styles.main}>
            <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            // onPress={item => alert(JSON.stringify(item))}
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
        <View style={styles.itemview}>
          <View style={styles.itemview1}>
            <Image
              style={{width: 102, height: 22, tintColor: '#032e63'}}
              source={require('../../../assets/Image/myjewlery.png')}
            />
            <TouchableOpacity
            //  onPress={()=>updateFieldChanged('1')}
             >
            <Text style={styles.text4}>
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
                style={styles.cardview}>
                {item.SupplierImage == null ? <Image
                  style={{ width: 80, height: 60, borderRadius: 0 }}
                  source={require('../../../assets/demo.png')} /> :
                  <Image
                    style={styles.cardimg}
                    resizeMode='stretch'
                    source={{ uri: `${ImagePath.Path}${item.SupplierImage}` }}
                  />
                }
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.middle1}>
          <View style={styles.middle}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyCatalogue',{
                data:data,
                collections:collections
              })}
              style={{alignItems: 'center'}}>
              <View style={styles.card1}>
                <Image style={styles.img4}
                  source={require('../../../assets/Image/services.png')}
                />
              </View>
              <Text style={styles.textc}>
                {'Catalogue'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Customer1',{screen:'Customers'})}
              style={{alignItems: 'center'}}>
              <View style={styles.card1}>
                <Image style={styles.img4}
                  source={require('../../../assets/Image/custmer.png')}
                />
              </View>
              <Text style={styles.textc}>
                {'Customers'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyNetwork1',{screen:'MyNetwork'})}
              style={{alignItems: 'center'}}>
              <View style={styles.card1}>
                <Image style={styles.img4}
                  source={require('../../../assets/Image/partner.png')}
                />
              </View>
              <Text style={styles.textc}>
                {'My Network'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <View style={styles.Gold}>
              <Image style={styles.Goldimg}
                source={require('../../../assets/Image/gold.png')}
              />
              <View  style={styles.Goldview}>
                <Text style={styles.Goldt}>
                  {'Gold '}
                </Text>
                <Text style={styles.Goldtt}>
                  {'Price '}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.touch}>
              <Text style={{color: '#fff', fontSize: 12}}>MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomv}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={selector1}
            renderItem={({item}) => (
              <ImageBackground
              source={require('../../../assets/PartnerImage/goldIcon.png')}
                style={styles.Bimg}>
                 <Text style={styles.Bt}>{`${((item.Purity)*24/1000).toFixed(0)} K`}</Text>
                 <View style={styles.Bv}>
                   <Image style={{height:16,width:20}} source={require('../../../assets/Image/rupay.png')}/>
                 <Text style={styles.Btt}>{item.PM}</Text>
                 </View>
              </ImageBackground>
            )}
          />
        </View>
      </ScrollView>
      {/* <TabView /> */}
    </View>
  );
};
export default HomeScreen;


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



 