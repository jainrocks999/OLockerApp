import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/CustomHeader';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../components/Loader';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Banner from '../../../components/Banner';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [collections, setCollecions] = useState();
  const win = Dimensions.get('window');
  const isFetching = useSelector(state => state.isFetching);
  const selector = useSelector(state => state.NetworkList1);
  const BannerData = [];
  const [sliderdata, setSlider] = useState();
  console.log('networklist21', selector);
  const selector1 = useSelector(state => state.Gold);
  const BannerWidth = (Dimensions.get('window').width * 15) / 16;
  const BannerHeight = 180;
  const GraphicalNotification = useSelector(
    state => state.GraphicalNotification.Notifications,
  );
  console.log('graphical Notification........e.e', GraphicalNotification);
  GraphicalNotification?.map(item => {
    const url = `${ImagePath.Path}${item.ImageLocation.substring(1)}${
      item.ImageName
    }`;
    BannerData.push({
      image: url,
      desc: 'Red fort',
    });
  });
  const date = new Date();
  let ToDAY = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  console.log('change formate', ToDAY);
  useEffect(() => {
    Demo();
    //  banner();
    dispatch({
      type: 'Get_LookupData_Request',
      url: 'GetLookupData',
      GroupName: 'MetalTypes',
    });
    dispatch({
      type: 'Get_State_Request',
      url: 'GetStates',
    });
    // dispatch({
    //   type: 'Get_Graphical_Request',
    //   url: 'GetGraphicalNotifications',
    // });
  }, []);
  const Demo = async () => {
    const partnerSrNo = await AsyncStorage.getItem('Partnersrno');
    const Supplier = await AsyncStorage.getItem('SuppliesnrNo');
    // console.log('fffhhhf',partnerSrNo);
    // console.log("aaahhaaa",Supplier);
    dispatch({
      type: 'Get_Request_GetReportForAppDownload',
      url: 'GetReportForAppDownload',
      PartnerSrNo: partnerSrNo,
      FromDate: ToDAY,
      ToDate: ToDAY,
    });
    dispatch({
      type: 'Get_Request_GetReportForAppDownload1',
      url: 'GetReportForAppDownload',
      PartnerSrNo: partnerSrNo,
      FromDate: '1/1/2010',
      ToDate: ToDAY,
    });
    dispatch({
      type: 'Get_PartnerFavProduct_Request',
      url: 'GetPartnerFavProduct',
      PartnerId: partnerSrNo,
      // navigation
    });

    dispatch({
      type: 'Get_Allsupplier_Request',
      url: 'GetAllSupplier',
      PartnerSrno: partnerSrNo,
    });
    dispatch({
      type: 'Get_SupplierProducts_Request',
      url: 'GetSupplierProducts',
      PartnerSrno: partnerSrNo,
    });
    dispatch({
      type: 'Get_Products_Request',
      url: 'GetProducts',
      PartnerSrno: partnerSrNo,
    });
    dispatch({
      type: 'Get_Catalogcategories_Request',
      url: 'GetCatalogueCategories',
      PartnerSrno: partnerSrNo,
    });
    dispatch({
      type: 'Get_Pending_Request',
      url: 'GetSupplierRequest',
      partnerSrNo: partnerSrNo,
      navigation,
    });
    dispatch({
      type: 'Get_Allnotification_Request',
      url: 'GetAllNotification',
      PartnerSrno: partnerSrNo,
    });
    // dispatch({
    //   type: 'Get_Product_Request',
    //   url: 'GetPartnerCatalogueCategories',
    //   SupplierSrNo:12,
    // });
    // dispatch({
    //   type: 'Get_Collection_Request',
    //   url: 'GetCollections',
    //   PartnerSrno:partnerSrNo,
    // });
    dispatch({
      type: 'Get_Categories_Request',
      url: 'GetCatalogueCategories',
      PartnerSrno: partnerSrNo,
    });

    dispatch({
      type: 'Get_Gold_Request',
      url: 'GetIBJAratesByPartnerId',
      PartnerId: partnerSrNo,
    });

    dispatch({
      type: 'Get_Network1_Request',
      url: 'GetMyNetworkByPartnerId',
      partnerSrNo: partnerSrNo,
      navigation,
    });
  };
  const banner = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://devappapi.olocker.in/api/Partner/GetGraphicalNotifications',
      headers: {
        MobileAppKey: 'EED26D5A-711D-49BD-8999-38D8A60329C5',
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
        if (response.data.success == true) {
          // console.log('graphical notificationss.....',JSON.stringify(response.data.Notifications.map((item)=>{
          //   console.log('Notifications 232......',item); })));
          response.data.Notifications.map(item => {
            const url = `${ImagePath.Path}${item.ImageLocation.substring(1)}${
              item.ImageName
            }`;
            BannerData.push({
              image: url,
              desc: 'Red fort',
            });
          });
        }
        setSlider(BannerData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const manageProfile = async id => {
    dispatch({
      type: 'Get_Profile_Request',
      url: 'GetSupplierProfile',
      supplierSrno: id,
      navigation,
    });
    AsyncStorage.setItem('SupplierId', JSON.stringify(id));
    dispatch({
      type: 'Partner_Catalogue_Request',
      url: 'GetPartnerCatalogueCategories',
      SupplierSrNo: id,
      navigation,
    });
  };
  const getLogout = () => {
    console.log('Logout Successfully ..');
    // console.log( 'alertLogout Succesfully',alert('Logout Succesfully'))
  };
  const Logout = () => {
    Alert.alert(
      'Are you want to logout ?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {
            cancelable: false;
          },
          style: 'cancel',
        },
        {text: 'ok', onPress: () => getLogout()},
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.scroll}>
        {isFetching ? <Loader /> : null}
        <ImageBackground
          style={styles.imgback}
          source={require('../../../assets/Image/1.png')}>
          <View style={styles.container}>
            <View style={styles.headertouch}>
              <TouchableOpacity onPress={() => navigation.navigate('Message')}>
                <Image
                  style={styles.img1}
                  source={require('../../../assets/Fo.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 15}}
                onPress={() => navigation.navigate('FavDetails')}>
                <Image
                  style={styles.img2}
                  source={require('../../../assets/Image/dil.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Logout()}>
                <Image
                  style={styles.img3}
                  source={require('../../../assets/Image/menu-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.text1}>Welcome to MyJeweller</Text>
            <Text style={styles.text2}>{'Onestop solution\nfor you'}</Text>
          </View>
        </ImageBackground>
        <View style={styles.main}>
          {/* {console.log('list datafbddfgfdgdfag',sliderdata)} */}
          <FlatListSlider
            data={BannerData}
            height={200}
            timer={3000}
            contentContainerStyle={{marginVertical: 0, paddingHorizontal: 35}}
            indicatorContainerStyle={{position: 'absolute', bottom: 10}}
            indicatorActiveColor={'#032e63'}
            indicatorInActiveColor={'red'}
            indicatorActiveWidth={5}
            animation
            component={<Banner />}
            // separatorWidth={1}
            width={350}
            autoscroll={false}
            loop={false}
          />
        </View>
        <View style={styles.itemview}>
          <View style={styles.itemview1}>
            <Image
              style={{
                width: 102,
                height: 22,
                tintColor: '#032e63',
                marginLeft: 5,
              }}
              source={require('../../../assets/Image/myjewlery.png')}
            />
            <TouchableOpacity
            //  onPress={()=>updateFieldChanged('1')}
            >
              <Text style={styles.text4}>Network</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={selector}
            style={{marginTop: 7}}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => manageProfile(item.SupplierSrNo)}
                style={styles.cardview}>
                {item.SupplierImage == null ? (
                  <Image
                    style={{
                      width: win.width * 0.33,
                      height: '100%',
                      resizeMode: 'contain',
                      // alignSelf: 'center',
                      borderRadius: 15,
                    }}
                    source={require('../../../assets/Image/Not.jpeg')}
                  />
                ) : (
                  <Image
                    style={{
                      width: win.width * 0.33,
                      height: '100%',
                      resizeMode: 'contain',
                      // alignSelf: 'center',
                      borderRadius: 15,
                    }}
                    resizeMode="stretch"
                    source={{uri: `${ImagePath.Path}${item.SupplierImage}`}}
                  />
                )}
                {console.log(
                  'image path',
                  `${ImagePath.Path}${item.SupplierImage}`,
                )}
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.middle1}>
          <View style={styles.middle}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MyCatalogue', {
                  data: data,
                  collections: collections,
                })
              }
              style={{alignItems: 'center'}}>
              <View style={styles.card1}>
                <Image
                  style={styles.img4}
                  source={require('../../../assets/Image/services.png')}
                />
              </View>
              <Text style={styles.textc}>{'Catalogue'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Customer1', {screen: 'Customers'})
              }
              style={{alignItems: 'center'}}>
              <View style={styles.card1}>
                <Image
                  style={styles.img4}
                  source={require('../../../assets/Image/custmer.png')}
                />
              </View>
              <Text style={styles.textc}>{'Customers'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MyNetwork1', {screen: 'MyNetwork'})
              }
              style={{alignItems: 'center'}}>
              <View style={styles.card1}>
                <Image
                  style={styles.img4}
                  source={require('../../../assets/Image/partner.png')}
                />
              </View>
              <Text style={styles.textc}>{'My Network'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <View style={styles.Gold}>
              <Image
                style={styles.Goldimg}
                source={require('../../../assets/Image/gold.png')}
              />
              <View style={styles.Goldview}>
                <Text style={styles.Goldt}>{'Gold '}</Text>
                <Text style={styles.Goldtt}>{'Price '}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyProducts')}
              style={styles.touch}>
              <Text style={{color: '#fff', fontSize: 12}}>MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomv}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={selector1?.slice(0, 3)}
            renderItem={({item}) => (
              <ImageBackground
                source={require('../../../assets/PartnerImage/goldIcon.png')}
                style={styles.Bimg}>
                <Text style={styles.Bt}>{`${((item.Purity * 24) / 1000).toFixed(
                  0,
                )} K`}</Text>
                <View style={styles.Bv}>
                  <Image
                    style={{height: 16, width: 20}}
                    source={require('../../../assets/Image/rupay.png')}
                  />
                  <Text style={styles.Btt}>{item.PM}</Text>
                </View>
              </ImageBackground>
            )}
          />
        </View>
      </ScrollView>
      {/* <TabView /> */}
    </SafeAreaView>
  );
};
export default HomeScreen;

const images = [
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:
      'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image: 'https://devappapi.olocker.in/images/rss/no-image.jpg',
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
];

var object = {
  dataAttribute: [
    {
      id: 1,
      title: 'A',
      data: [
        {id: '1', name: 'First Name', type: 'text'},
        {id: '2', name: 'Last Name', type: 'text'},
      ],
    },
    {
      id: 2,
      title: 'B',
      data: [
        {id: '1', name: 'Twitter', type: 'text'},
        {id: '2', name: 'Twitter follower', type: 'number'},
      ],
    },
  ],
};
object.dataAttribute[0].data[0].statusSelected = true;
