import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity, TextInput} from 'react-native';
import TabView from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import Carousel from 'react-native-banner-carousel';
import {useNavigation} from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../components/Loader' ;
import RNPickerSelect from 'react-native-picker-select';
import Banner from '../../../components/Banner';
import {FlatListSlider} from 'react-native-flatlist-slider';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const MyCatalogue = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector(state=>state.isFetching)
  const selector1 = useSelector(state => state.AllNotification.GetNotification)
  const selector2=useSelector(state=>state.States.GetStatesData)
  const selector3=useSelector(state=>state.citys.GetCityData)

  const selector =useSelector(state=>state.metalType.GetLookupData)
   const [data2,setData2]=useState([])
  const Data2 =[]
  //console.log('hiiiiiiií',selector1.GetNotification);
    // console.log('city list response selector',selector3);
    const[MetalType,SetMetalType]=useState(selector)
    const [data,setData1]=useState(selector2)
    const SupplierList=useSelector(state=>state.SupplierList)
    const BannerWidth = (Dimensions.get('window').width * 15) / 16;
    const [city,setCity]=useState('')
    const [state,setState]=useState('0')
    const [metal,setMetal]=useState('0')
    const [supplier,setSupplier]=useState('')
    const [list,setList]=useState();
    const [show,setShow]=useState(false);
    const BannerHeight = 140;
    const Id2=[]
    const[id,setId]=useState('')
    const[id3,setId3]=useState('')

//  const searchCity=()=>{
//   {data2 != undefined?data2.map((item) => {
//       // console.log('city list',item);
//     // setState(item.Name)
//        setId2(item.Id);})
//     :undefined}
//  }
  const onclick = () => {
    if (show == false) {
       getSupplier();
       //citySearch();
      setShow(true);
      // console.log("gdsd",show);
    }
    else {
      setShow(false);
      // console.log("dsaa", show);
    }
    // console.log("aaa", show);
  }
  
const pendingRequest=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  dispatch({
    type:'Get_Pending_Request',
    url:'GetSupplierRequest',
    partnerSrNo:srno,
    navigation
  });
   
}
const SentRequest=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  
  dispatch({
    type: 'Get_Sent_Request',
    url: 'GetSupplierSentRequests',
    partnerSrNo:srno,
    navigation
  });

 
 
}
const Metalpurity1=async(value,index)=>{
console.log('fggg',index);

setMetal(value)

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://devappapi.olocker.in/api/Info/GetLookupData?',
    headers: { 
      'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5', 
      'Content-Type': 'application/json'
    },
    params:{
      GroupName:'MetalPurity',
      FilterValue:value
    }
  };
  
  axios(config)
  .then(function (response) {
    if(response.data.success==true){
    // console.log('metal type data ,,,',(response.data.GetLookupData));
    // setData2(response.data.GetCityData)
  response.data.GetLookupData.map((item)=>{
    // console.log('ddnmmm',item.Id,item.Value);
    Id2.push({
      label:item.Value,value:item.Id 
     })
      }
      
      ) 
    }
    setId3(Id2)
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

const citySearch =async(value)=>{
  // console.log('city search byeeeeee....',value);
 setState(value)
  // dispatch({
  //   type:'Get_CitiesByState_Request',
  //   url:'GetCitiesByState',
  //   stateId:state
  // })
  var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://devappapi.olocker.in/api/Info/GetCitiesByState',
  headers: { 
    'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5', 
    'Content-Type': 'application/json'
  },
  params:{

   stateId:state  
   }
};

axios(config)
.then(function (response) {
  if(response.data.success==true){
  console.log('city list ',(response.data.GetCityData));
  // setData2(response.data.GetCityData)
  response.data.GetCityData.map((item)=>{
// console.log('ddnmmm',item.Name,item.Id);
Data2.push({
  label:item.Name,value:item.Id 
 })
  }
  
  ) 
 
}
setData2(Data2)
// console.log('dddddd',data2);
})
.catch(function (error) {
  // console.log(error);
});
 
}

const searchJeweller=()=>{
  dispatch({
    type: 'Search_Jewellers_Request',
    url: 'RejectSupplierRequest',
    data:{
      SrNo: 1,
      RejectReason: "string"
    }
  });
}


const getSupplier=async(values)=>{

  const data = new FormData()
  axios({
    method: "POST",
    url:`https://devappapi.olocker.in/api/Supplier/SearchSupplier`,
    headers: { 
      'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
      "Content-Type":'application/json'
    },
    data:JSON.stringify({
      SupplierName:supplier,
      StateId:state,
      CityId:city,
      jewelleryType: [
      metal
      ],
      diamondPurityids: [
      ],
      goldPurityids: [
      ],
      platinumPurityids: [
      ],
      silverPurityids: [
      ],
      specialisationIds: [
      ]
    })
  })
  .then(res => {
    if(res.data.success==true){
    //  console.log("res00000",res);
      setList(res.data.Suppliers)
    }
   console.log("res virews",list);
  })
  .catch(err => {
   // console.log("error in request", err);
  }); 
}

  
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
      <Header
        source1={require('../../../assets/Fo.png')}
       // source2={require('../../../assets/La.png')}
        title={'My Network '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
        {isFetching?<Loader/>:null}
      <ScrollView>
     
      <View
          style={{
            backgroundColor: '#032e63',
            // height: 150,
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius:60,
          }}>
         <View style={{alignItems: 'center', height: 200,marginTop:10}}>
         
           <FlatListSlider
            data={images}
            height={200}
            timer={5000}
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
      
       
         <View style={{height:150}}/>
        </View>
        <View style={{marginTop:-130,paddingHorizontal:15}}>
            <Text style={{color:'#fff',fontWeight:'700',fontSize:16,fontFamily:'Philosopher-Regular'}}>Search Jeweller Partner</Text>
            <View style={{
                width:'100%',
                backgroundColor:'#fff',
                marginTop:10,
                elevation:5,
                borderRadius:10
                }}>
             <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,justifyContent:'space-between'}}>
              <View style={{paddingTop:10}}>
                  <Text style={{fontFamily:'Acephimere',fontSize:12,color:'#595959'}}>Search by name of jeweller partner</Text>
                  <TextInput 
                  style={{ height: 40, marginTop: -5, fontFamily: 'Acephimere', fontSize: 15, color: '#032e63',marginRight:5,width:'100%'}}
                    value={supplier}
                    onChangeText={(val)=>setSupplier(val)}
                    placeholder='Enter Jeweller Partner Name'
                  />
              </View>
              <View style={{}}>
                   <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/1.png')}/>
              </View>
              </View> 
              <View style={{borderWidth:0.5,borderColor:'grey'}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <View style={{padding:20,justifyContent:'center',width:'42%',height:70,alignItems:'flex-start'}}>
                   <RNPickerSelect
                      items={
                        data != undefined ?data.map((item) => (
                        {
                       label:item.Name,
                        value:item.Id
                   
                     })):undefined}
                      onValueChange={(value) => citySearch(value)}
                     // pickerProps={citySearch}
                      style={ {
                        inputAndroid: {padding:-14, color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:0,borderWidth:0 },
                        inputIOS: { color: '#032e63', fontSize: 14, width:'100%',marginBottom: 10,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={state}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select State', value: '' }}
                    />
                   {/* {  console.log('State id',state)} */}
                   
                   <View>
                     {/* {console.log('data list city',data2)} */}
                   <RNPickerSelect
                      items={data2}
                    //items={Metal}
                      onValueChange={(value) =>setCity(value)}
                    //onOpen={citySearch}
                      style={ {
                        inputAndroid: {padding:-14, color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:-5,borderWidth:0 },
                        inputIOS: { color: '#032e63', fontSize: 14, width:'100%',marginBottom: 10,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={city}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select City', value: '' }}
                    />
                   </View>
                    {/* <Text style={{fontSize:12,color:'#595959',fontFamily:'Acephimere',marginTop:-6}}>Select City</Text> */}
                   </View>
                   
                   <View style={{borderWidth:0.5,height:70,borderColor:'grey',marginTop:10}}/>
                   <View style={{padding:20,alignItems:'flex-end',justifyContent:'center',width:'42%',height:70}}>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                   <RNPickerSelect
                      items={
                        MetalType != undefined ?MetalType.map((item) => (
                         
                        {
                         
                       label:item.Value,
                        value:item.Value
                   
                     })):undefined}
                   
                    // items={Metal}
                      onValueChange={(value,index) =>Metalpurity1(value,index)}
                      style={ {
                        inputAndroid: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:-20,padding:10 },
                        inputIOS: { color: '#032e63', width: '100%', fontSize: 14, marginBottom:10,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={metal}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select Metal', value: '' }}
                    />
                       {/* {console.log('resssmish',metal)} */}

                       {/* <RNPickerSelect
                  
                     items={id3}
                      onValueChange={val =>setId(val)}
                      style={ {
                        inputAndroid: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:-20,padding:-10 },
                        inputIOS: { color: '#032e63', width: '100%', fontSize: 14, marginBottom:10,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={id}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select Metal', value: '' }}
                    /> */}
                    {/* <Text style={{color:'#032e63',fontFamily:'Acephimere',fontWeight:'700'}}>{'Gold '}</Text> */}
                    {/* <Text style={{fontSize:12,color:'#595959',fontFamily:'Acephimere',marginTop:-6}}>Select Metal</Text> */}
                    </View>
                   </View>
              </View>
            </View>
            <View style={{alignItems:'center',marginTop:-20}}>
                   <TouchableOpacity
                   onPress={()=>onclick()}
                    style={{
                       height:40,
                       width:100,
                       backgroundColor:'#e9056b',
                       borderRadius:20,
                       alignItems:'center',justifyContent:'center'
                }}>
                    <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:15}}>Search</Text>
                </TouchableOpacity>
              </View>
          {show ?
               <View style={{paddingVertical:10}}>
           
            <FlatList
            data={list}
            renderItem={({item})=>(
                <View style={{elevation:5,
                backgroundColor:'#fff',
                paddingVertical:15,
                paddingHorizontal:10,
                marginTop:10,
                borderRadius:8,
                flexDirection:'row',
                justifyContent:'space-between'
                }}> 
                  {/* {console.log('h123',item)} */}
                   <View>
                  {/* <Text style={{ fontSize: 16, color: '#000', fontFamily: 'Acephimere' }}>{item.SrNo}</Text> */}
                  <Text style={{ fontSize: 16, color: '#000', fontFamily: 'Acephimere' }}>{item.SupplierName}</Text>
                      
                   </View>
                   <View style={{flexDirection:'row'}}>
                     <View>
                    <Text style={{ color: '#000', fontFamily: 'Acephimere', fontSize: 16 }}>{item.CityName}</Text>
                    <Text style={{ color: '#000', fontFamily: 'Acephimere', fontSize: 16 }}>{item.StateName}</Text>
                  </View>
                   </View>
                </View>
            )}
            />
            </View>
: null}
              <View style={{
                width:'100%',
                backgroundColor:'#fff',
                marginTop:10,
                elevation:5,
                borderRadius:10
                }}>
             <View style={{paddingHorizontal:10,paddingVertical:10}}>
                <Text style={{fontSize:18,fontFamily:'Philosopher-Regular',color:'#032e63'}}>My Network </Text>
              </View> 
              <View style={{borderWidth:0.5,borderColor:'grey'}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                   <TouchableOpacity
                   onPress={()=>navigation.navigate('MyNetworks')}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:40,width:42,tintColor:'#032e63'}} source={require('../../../assets/PartnerImage/4.png')}/>
                   </View>
                    <Text style={{fontSize:11,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>My Network</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth:0.3,height:'100%',borderColor:'grey',marginTop:0}}/>
                   <TouchableOpacity 
                    onPress={()=>pendingRequest()}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:42,width:50}} source={require('../../../assets/PartnerImage/2.png')}/>
                   </View>
                    <Text style={{fontSize:11,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>Pending Request</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth:0.3,height:'100%',borderColor:'grey',marginTop:0}}/>

                   <TouchableOpacity 
                   onPress={()=>SentRequest()}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                     <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:42,width:52}} source={require('../../../assets/PartnerImage/3.png')}/>
                     </View>
                    <Text style={{fontSize:11,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>Send Request</Text>
                   </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingVertical:10}}>
            <Text style={{fontFamily:'Acephimere',fontSize:16,color:'#383838'}}>Notifications</Text>
            {/* <FlatList
            data={selector1}
            renderItem={({item})=>(
                <View style={{elevation:5,
                backgroundColor:'#fff',
                paddingVertical:15,
                paddingHorizontal:10,
                marginTop:10,
                borderRadius:8,
                flexDirection:'row',
                justifyContent:'space-between'
                }}>
                
                   <View>
                       <Text style={{fontSize:16,color:'#000',fontFamily:'Acephimere'}}>{item.PartnerName}</Text>
                       <Text style={{color:'#000',fontFamily:'Acephimere',fontSize:13}}>{item.Message}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                       <TouchableOpacity style={{
                       }}>
                           <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/6.png')}/>
                       </TouchableOpacity>
                       <TouchableOpacity style={{
                          marginLeft:10
                       }}>
                           <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/5.png')}/>
                       </TouchableOpacity>
                   </View>
                </View>
            )}
            /> */}
            </View>
        </View>
       
        <View style={{height:70}}/>

      </ScrollView>
      {/* <View style={{bottom: 0, position: 'absolute', left: 0, right: 0}}>
        <TabView />
      </View> */}
    </View>
  );
};
export default MyCatalogue;
const data = [
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello',type:'add'}
];
const data1=[
    {name:'Milind Jeweller',city:'Mumbai'},
    {name:'Milind Jeweller',city:'Mumbai'},
    {name:'Milind Jeweller',city:'Mumbai'}
]

const City=[
  {label:'Mumbai',value:'Mumbai'},
  {label:'Indore',value:'Indore'},
  {label:'Bangalore',value:'Bangalore'}
]
const Metal=[
  {label:'Gold',value:'Gold'},
  {label:'Platinum',value:'Platinum'},
  {label:'Silver',value:'Silver'}
]


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