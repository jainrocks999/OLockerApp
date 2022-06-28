import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch} from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';
const MyProducts = ({route}) => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const selector=useSelector(state=>state.Category)
  const selector1 = useSelector(state => state.PartnerCatalog.GetProducts)
  console.log('vkm user respons Selector1',selector1);
  console.log('vkm user respons Selector', selector);
 // const Data=selector1;
    const [search,setSearch]=useState('')
    const [filteredDataSource, setFilteredDataSource] = useState(selector);
    const [masterDataSource, setMasterDataSource] = useState(selector);
  const partner= route.params.PartnerProductlist
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
    const manageCategory=async(SrNo)=>{
      const partner=await AsyncStorage.getItem('Partnersrno')
      console.log('this is user detailssssss',SrNo);
     
        dispatch({
          type: 'Get_Detail_Request',
          url:'GetProductDetail',
         PartnerId:partner,
         ProductId:SrNo,
          navigation
        })
      }
     // "Url": "..//images/ProductImages/2022/6/919__test444292919_0.jpg",

     // "ImageName": "917__483477-iuc382561917_1.jpg",
     // "ImageLocation": "\\images\\ProductImages\\2022\\5"

     // `${ImageLocation}${ImageName}`
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'Product List'}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View>
            <Text style={{ fontFamily: 'Acephimere', fontSize: 14 }}>{partner ?`${selector1.length} Items`:`${selector.length} Items`}</Text>
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
        <View style={{marginTop: 10,paddingHorizontal:5,}}>
          <FlatList
            data={partner ? selector1:filteredDataSource}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={()=>
                partner == false?
                manageCategory(item.SrNo ):null}
                // ()=>navigation.navigate('SubCategory')
              
                style={{
                  height: 190,
                  backgroundColor: '#fff',
                  // flex:1,
                  margin:6,
                  borderRadius:10,
                  elevation:3,
                  width:'46.5%',
                }}>
                   {console.log('////',item)}
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{padding:15}}>
                       <Image style={{width:21,height:18}} source={require('../../../assets/Image/dil.png')}/>
                       <Image style={{width:20,height:14,marginTop:10}} source={require('../../../assets/Image/share1.png')}/>
                    </View>
                 <View style={{
                   borderTopRightRadius:10,
                   borderBottomLeftRadius:10,
                   paddingHorizontal:10,
                   backgroundColor:'#24a31e',
                   paddingVertical:2,
                   alignSelf:'flex-start'
                   }}>
                    
                     <Text style={{
                       fontFamily:'Roboto-Medium',
                       fontSize:12,
                       color:'#fff'
                     }}>{`${item.GrossWt} GM`}</Text>

                   </View>
                   </View>
                <View style={{
                  width:'100%',
                  alignItems:'center',
                  marginTop:-40
                  }}>
                 <Image
                  style={{height: 100, width: 120,marginLeft:30}}
                  resizeMode='stretch'
                  source={{uri: `${ImagePath.Path}${(item.Url).substring(2)}`}}
                  
                />
                </View>
                <View style={{justifyContent:'center',
                 bottom:10,
                 position:'absolute',
                 left:0,
                 right:0,
                 paddingHorizontal:20
              }}>
                  <Text style={{color:'#050505',fontFamily:'Acephimere',fontSize:13}}>
                    {`ID# ${item.ProductSKU}`}
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center',marginLeft:-5}}>
                    <Image style={{width:16,height:20}} source={require('../../../assets/Image/rupay.png')}/>
                  <Text style={{color:'#050505',fontFamily:'Roboto-Medium'}}>
                    {item.Price}
                  </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{height: 70}} />
      </ScrollView>
      <View style={{bottom: 0, left: 0, right: 0, position: 'absolute'}}>
        <TabView />
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


