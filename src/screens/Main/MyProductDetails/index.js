import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch} from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
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
      // console.log('this is user detailssssss',SrNo);
     
        dispatch({
          type: 'Get_Detail_Request',
          url:'GetProductDetail',
         PartnerId:partner,
         ProductId:SrNo,
          navigation
        })
      }
      const manageCategory1= async(SrNo)=>{
       
        dispatch({
          type: 'Get_GetProductDetail_Request',
          url:'GetProductDetail',
        
         ProductId:SrNo,
          navigation
        })
      }
     // "Url": "..//images/ProductImages/2022/6/919__test444292919_0.jpg",

     // "ImageName": "917__483477-iuc382561917_1.jpg",
     // "ImageLocation": "\\images\\ProductImages\\2022\\5"

     // `${ImageLocation}${ImageName}`
  return (
    <View style={styles.container}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        // source2={require('../../../assets/La.png')}
        title={'Product List'}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>{partner ?`${selector1.length} Items`:`${selector.length} Items`}</Text>
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
            data={partner ? selector1:filteredDataSource}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={()=>
                partner ?manageCategory1(item.SrNo):
                manageCategory(item.SrNo )}
                // ()=>navigation.navigate('SubCategory')
              
                style={styles.cardview}>
                   {/* {console.log('////',item)} */}
                    <View style={styles.cardview1}>

                      
                    <View style={{padding:15}}>
                    {partner?   <Image style={{width:21,height:18}} source={require('../../../assets/Image/dil.png')}/>:<View style={{marginTop:10}}/>}
                       <Image style={{width:20,height:14,marginTop:10}} source={require('../../../assets/Image/share1.png')}/>
                    </View>
                 <View style={styles.cardview2}>
                    
                     <Text style={styles.cardview2text}>{`${item.GrossWt} GM`}</Text>

                   </View>
                   </View>
                <View style={styles.cardview3}>
                 {item.Url==null?  
                 
                    <Image
                      style={styles.cardview3img}
                      resizeMode='center'
                      source={require('../../../assets/demo.png')} /> :
                 <Image
                  style={styles.cardview3img}
                  resizeMode='stretch'
                      source={{ uri: `${ImagePath.Path}${(item.Url).substring(2) }`}}
                  
                    /> 
                    }

                </View>
                <View style={styles.cardbottom}>
                  <Text style={styles.cardbottomtext}>
                    {`ID# ${item.ProductSKU}`}
                  </Text>
                  <View style={styles.cardbottom1}>
                    <Image style={{width:16,height:20}} source={require('../../../assets/Image/rupay.png')}/>
                  <Text style={styles.cardbottom1text}>
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


