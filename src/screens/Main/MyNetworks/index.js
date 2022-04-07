import React,{useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import BottomTab from '../../../components/StoreButtomTab';
import { useSelector,useDispatch } from 'react-redux';
import Loader from "../../../components/Loader";
import { TextInput } from 'react-native-gesture-handler';
import ImagePath from '../../../components/ImagePath';
const HomeScreen = () => {
   const navigation=useNavigation()
   const selector=useSelector(state=>state.NetworkList)
   console.log('this is selector data',selector);
   const isFetching=useSelector(state=>state.isFetching)
   const [search,setSearch]=useState('')
   const [filteredDataSource, setFilteredDataSource] = useState(selector);
   const [masterDataSource, setMasterDataSource] = useState(selector);
 
   const searchFilterFunction = text => {
     if (text) {
       const newData = masterDataSource.filter(function (item) {
         const itemData = `${item.CityName} ${item.SupplierName} `
           ? `${item.CityName} ${item.SupplierName}`.toUpperCase()
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
 

   const dispatch=useDispatch()
  const manageProfile=(id)=>{
    console.log('this is id for supplier',id);
    dispatch({
      type: 'Get_Profile_Request',
      url: 'GetSupplierProfile',
      supplierSrno:id,
      navigation
    });
  }
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
     <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'My Network '}
      onPress={() => navigation.goBack()}
      />   
      {isFetching?<Loader/>:null}
      <View>
         <View style={{paddingHorizontal:20,marginTop:10,width:'100%',flexDirection:'row',alignItems:'center'}}>
            <View style={{width:'50%'}}>
              <Text style={{color:'#565656',fontFamily:'Acephimere'}}>{`${selector.length} Partners`}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%',justifyContent:'center'}}>
              {/* <TouchableOpacity onPress={()=>navigation.navigate('Filter')}>
              <Image style={{height:20,width:20}} source={require('../../../assets/Image/karni.png')}/>
              </TouchableOpacity> */}
              <View 
              style={{
                borderWidth:1,
                flexDirection:'row',
                borderRadius:30,
                paddingHorizontal:10,
                width:'80%',
                backgroundColor:'#fff',
                marginLeft:10,
                alignItems:'center',
                height:35,
                }}>
                <Image style={{height:13,width:20,marginBottom:0}} resizeMode={'contain'} source={require('../../../assets/Image/serch.png')}/>
                <TextInput
                 placeholder='Search'
                 style={{fontFamily:'Acephimere',fontSize:13,height:34,marginTop:4,width:'100%'}}
                 value={search}
                 onChangeText={(val)=>searchFilterFunction(val)}
                />
              </View>
            </View>
         </View>
         
         <FlatList
         data={filteredDataSource}
         numColumns={2}
         style={{margin:10,marginTop:20,marginBottom:150}}
         renderItem={({item})=>(
             <TouchableOpacity 
             onPress={()=>manageProfile(item.SupplierSrNo)}
             style={{width:'47%',margin:5,borderRadius:20,height:200,marginTop:0}}>
               <View style={{backgroundColor:'red',height:120,borderTopRightRadius:10,borderTopLeftRadius:10}}>
               <Image
                  style={{height: 120, width: '100%',borderTopRightRadius:10,borderTopLeftRadius:10}}
                  resizeMode='stretch'
                  source={{uri: `${ImagePath.Path}${item.SupplierImage}`}}
                />
               </View>
               <View style={{
                 backgroundColor:'#fff',
                //  height:80,
                 borderBottomLeftRadius:10,
                 borderBottomRightRadius:10,
                 padding:10,
                 justifyContent:'center',
                
                 }}>
                 <Text 
                 style={{color:'#032e63',fontSize:15,fontFamily:'Acephimere',}}
                 >{item.SupplierName}</Text>
                 <Text style={{fontFamily:'Acephimere',color:'#666666',fontSize:12}}>{item.CityName}</Text>
               </View>
             </TouchableOpacity>
         )}
         />
         {/* <View style={{height:300}}/> */}
      </View>   
       <View style={{bottom:0,position:'absolute',left:0,right:0}}>
      <BottomTab/>
      </View>
      <StatusBar/>
    </View>
  );
};
export default HomeScreen;
const data=[
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},

]
