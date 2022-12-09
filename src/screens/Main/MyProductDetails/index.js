import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  Share,
} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import Loader from '../../../components/Loader';
const MyProducts = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);
  const selector = useSelector(state => state.Category);
  const selector1 = useSelector(state => state.PartnerCatalog.GetProducts);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(selector);
  const [masterDataSource, setMasterDataSource] = useState(selector);
  const partner = route.params.PartnerProductlist;
  const name =route.params.name;
   const name1 =route.params.name1;
  const win = Dimensions.get('window');
  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.GrossWt}${item.ProductSKU} ${item.Price}`
          ? `${item.GrossWt} ${item.ProductSKU} ${item.Price}`.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const handleSearch = () => {
    setSearch('');
    setFilteredDataSource(masterDataSource);
  };
  const manageCategory = async SrNo => {
    const partner = await AsyncStorage.getItem('Partnersrno');
    dispatch({
      type: 'Get_Detail_Request',
      url: 'GetProductDetail',
      PartnerId: partner,
      ProductId: SrNo,
      navigation,
    });
  };
  const manageCategory1 = async SrNo => {
    console.log('srno,  dvbfgg', SrNo);
    dispatch({
      type: 'Get_GetProductDetail_Request',
      url: 'GetProductDetail',

      ProductId: SrNo,
      navigation,
    });
  };

  const [click1, setClick1] = useState(false);
  const [id, setId1] = useState([]);
  const click = id => {
    setClick1(id);
    setId1(id);
  };
  const share = async id => {
    let pr = id.Price;
    let name = id.ItemName;
    let Description = id.Description;
    await Share.share({
      message: `Product Name : ${name} \nProduct Price : ${pr} \n Product Description : ${Description}`,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/Image/dil.png')}
        title={partner?name1:name}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={() => navigation.navigate('FavDetails')}
      />
      {isFetching ? <Loader /> : null}
      <ScrollView>
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>
              {partner
                ? selector1.length === 1
                  ? `${selector1.length} Item`
                  : `${selector1.length} Items`
                : selector.length === 1
                ? `${selector.length} Item`
                : `${selector.length} Items`}
            </Text>
          </View>
          {/* <View style={{flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity  onPress={()=>navigation.navigate('Filter')}>
                <Image style={{height:20,width:20}} source={require('../../../assets/Image/karni.png')}/>
              </TouchableOpacity>
              <View style={{
                  borderWidth:1,
                  borderRadius:30,
                  paddingHorizontal:10,
                  alignItems:'center',
                  justifyContent:'center',
                  flexDirection:'row',
                  backgroundColor:'#fff',
                  marginLeft:10,
                  height:35
                  }}>
                  <Image resizeMode={'contain'} style={{width:20,height:13,tintColor:'#2c2e2c'}}
                   source={require('../../../assets/Image/serch.png')}/>
                   <View style={{height:35,alignItems:'center',justifyContent:'center',marginTop:4}}>
                   <TextInput
                   placeholder='Search by ID'
                   value={search}
                   onChangeText={(val)=>searchFilterFunction(val)}
                  //  style={{height:}}
                   />
                   </View>
                  <View style={{width:30}}/>
              </View>
          </View> */}
        </View>
        <View style={styles.card}>
          <FlatList
            data={partner ? selector1 : filteredDataSource}
            numColumns={2}
            // keyExtractor={(index) => (index)}
            renderItem={({item, index}) => (
              <View style={styles.cardview}>
                <View
                  style={{
                    height: hp('100%'),
                    width: wp('45%'),
                    maxHeight: hp('25%'),
                    borderWidth: 0,
                    borderColor: 'red',
                  }}>
                  <View
                    style={{height: hp('7%'), width: '100%', borderWidth: 0}}>
                    <View
                      style={{
                        padding: 0,
                        height: hp('5%'),
                        width: '18%',
                        borderWidth: 0,
                        marginTop: 0,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          console.log('liked i ii i ', liked);
                          if (liked.includes(index)) {
                            let unlike = liked.filter(elem => elem !== index);
                            setLiked(unlike);
                          } else {
                            setLiked([...liked, index]);
                          }
                        }}>
                        <Image
                          style={{
                            height: hp('2.7%'),
                            width: wp('6%'),
                            marginLeft: 5,
                            marginTop: 7,
                            tintColor: liked.includes(index) ? 'red' : 'grey',
                          }}
                          source={require('../../../assets/Image/dil.png')}
                        />
                      </TouchableOpacity>
                      {/* {partner?   <Image style={{height:hp('2.4%'),width:wp('5.6%'),marginLeft:5,marginTop:2}} source={require('../../../assets/Image/dil.png')}/>:<View style={{marginTop:10}}/>} */}
                      <TouchableOpacity onPress={() => share(item)}>
                        <Image
                          style={{
                            height: hp('2.1%'),
                            width: wp('6%'),
                            marginTop: 8,
                            marginLeft: 8,
                          }}
                          source={require('../../../assets/Image/share1.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10, //  paddingHorizontal: 10,
                        backgroundColor: '#24a31e',
                        marginTop: Platform.OS == 'android' ? -36 : -50,
                        alignSelf: 'flex-end',
                        height: hp('2.4%'),
                        width: '45.5%', // paddingVertical: 3
                      }}>
                      <Text
                        style={
                          styles.cardview2text
                        }>{`${item.GrossWt} GM`}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      partner
                        ? manageCategory1(item.SrNo)
                        : manageCategory(item.SrNo)
                    }
                    // ()=>navigation.navigate('SubCategory')

                    style={{
                      height: hp('16.9%'),
                      width: wp('38%'),
                      marginLeft: 19,marginTop:-32,
                      // maxHeight: hp('13%'),
                      borderWidth: 0,
                    }}>
                    {item.Url == null ? (
                      <Image
                        style={{
                          width: win.width * 0.39,
                          height: '100%',
                          resizeMode: 'contain',
                          alignSelf: 'center',
                          // borderWidth: 5,
                        }}
                        resizeMode="center"
                        source={require('../../../assets/Image/Not.jpeg')}
                      />
                    ) : (
                      <Image
                        style={{
                          width: win.width * 0.35,
                          height: '100%',
                          resizeMode: 'contain',
                          alignSelf: 'center',
                        }}
                        source={{
                          uri: `${ImagePath.Path}${item.Url?.substring(2)}`,
                        }}
                      />
                    )}
                  
                  </TouchableOpacity>
                  <View
                    style={{
                      height: hp('3%'),
                      width: '100%',
                      marginLeft: 20,
                     
                     
                    }}>
                    <Text style={styles.cardbottomtext}>
                      {`ID# ${item.ProductSKU}`}
                    </Text>
                    <View style={styles.cardbottom1}>
                      <Image
                        style={{width: 16, height: 20}}
                        source={require('../../../assets/Image/rupay.png')}
                      />
                      <Text style={styles.cardbottom1text}>{item.Price}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{height: 70}} />
      </ScrollView>
      <View style={{bottom: 0, left: 0, right: 0, position: 'absolute'}}>
        {/* <TabView /> */}
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
  {title: require('../../../assets/Image/myjewlery.png')},
];
