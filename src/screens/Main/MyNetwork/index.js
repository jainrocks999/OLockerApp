import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity, TextInput,ActivityIndicator,Platform} from 'react-native';
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
import colors from '../../../components/colors';
import Toast from 'react-native-simple-toast';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const MyCatalogue = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector(state=>state.isFetching)
  const selector1 = useSelector(state => state.RequestList)
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
    const [state,setState]=useState('')
    const [metal,setMetal]=useState('')
    const [supplier,setSupplier]=useState('')
    const [list,setList]=useState();
    const [show,setShow]=useState(false);
    const BannerHeight = 140;
    const Id2=[]
    const[id,setId]=useState('')
    const[id3,setId3]=useState('')
    const[visible,setVisible]=useState(false)
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
      setShow(true);
     
    }
    else {
      setShow(false);
     
    }
   
  }
  const AcceptMEthod =(SupplierSrNo)=>{

    dispatch({
      type: 'Get_Accepted_Request',
      url: 'AcceptSupplierRequest', 
      SrNo:SupplierSrNo,
      IsShowinRetailerApp:true
     
    });
  } 

 
const Reject =(SupplierSrNo)=>{
dispatch({
  type: 'Get_Rejected_Request',
  url: 'RejectSupplierRequest',
 
  SrNo:SupplierSrNo,
  RejectReason: "string"
});
}
const pendingRequest=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  // dispatch({
  //   type: 'Get_Allnotification_Request',
  //   url: 'GetAllNotification',
  //   PartnerSrno:srno,
  //   navigation,
  // });
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
    console.log('metal type data ,,,',(response.data.GetLookupData));
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
 setVisible(true)
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
  setVisible(false)
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
 
   if(state==''){
    Toast.show('Please Select State')
  }
   else if(city==''){
    Toast.show('Please Select city')
  } else if(metal==''){
    Toast.show('Please Select Metal type')
  }
  
   else{
  setVisible(true)
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
       setVisible(false);
    }
   
  })
  .catch(err => {
   // console.log("error in request", err);
  }); 
}
}

const partnerDetaitl =(id)=>{
  dispatch({
    type: 'Get_Profile_Request',
    url: 'GetSupplierProfile',
    supplierSrno:id,
    navigation
  });
}
console.log("response  virews",list);
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
             

      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/Image/dil.png')}
        title={'My Network '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={()=>navigation.navigate('FavDetails')}
      />
      <ScrollView>
    {isFetching?<Loader/>:null}
      <View
          style={{
            backgroundColor: '#032e63',
            // height: 150,
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius:60,
          }}>
         <View style={{alignItems: 'center', height: 160,marginTop:0}}>
         
           <FlatListSlider
            data={images}
            height={160}
            timer={5000}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:15}}
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
        <View style={{marginTop:-135,paddingHorizontal:15}}>
            <Text style={{color:'#fff',fontWeight:'700',fontSize:16,fontFamily:'Philosopher-Regular'}}>Search Jeweller Partner</Text>
            <View style={{
                width:'100%',
                backgroundColor:'#fff',
                marginTop:15,
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
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:100}}>
                   <View style={{padding:0,justifyContent:'center',width:'42%',alignItems:'flex-start'}}>
                  <View style={{height:45,width:'100%',borderWidth:0,marginLeft:10,borderWidth:0,marginBottom:5}}>
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
                        inputAndroid: {padding:0, color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:5,borderWidth:0 },
                        inputIOS: { color: '#032e63', fontSize: 14, width:'100%',marginBottom: 0,fontFamily:'Acephimere' ,fontWeight:'700',height:40,marginTop:5},
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={state}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select State', value: '' }}
                    />
                    </View>
                  
                   
                   <View style={{height:45,width:'100%',borderWidth:0,marginLeft:10}}>
                   
                   <RNPickerSelect
                      items={data2}
                      onValueChange={(value) =>setCity(value)}
                      style={ {
                        inputAndroid: {padding:-14, color: '#032e63', width: '100%', fontSize: 14, marginBottom:0,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:-5,borderWidth:0 },
                        inputIOS: { color: '#032e63', fontSize: 14, width:'100%',marginBottom: 10,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={city}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select City', value: '' }}
                    />
                   </View>
                   </View>
                   
                   <View style={{borderWidth:0.5,height:90,borderColor:'grey',marginTop:0}}/>
                   <View style={{padding:0,alignItems:'flex-end',justifyContent:'center',width:'42%',}}>
                   {/* <View style={{alignItems:'center',justifyContent:'center'}}> */}
                   <View style={{height:45,width:'100%',borderWidth:0,marginRight:0}}>
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
                        inputAndroid: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginLeft:30,padding:10,borderWidth:0 },
                        inputIOS: { color: '#032e63', width: '100%', fontSize: 14, marginBottom:10,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={metal}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: 'Select Metal', value: '' }}
                    />
                    {/* </View> */}
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
                   onPress={()=>getSupplier()}
                    style={{
                       height:40,
                       width:130,
                       backgroundColor:'#e9056b',
                       borderRadius:20,
                       alignItems:'center',justifyContent:'center'
                }}>
                    <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:15}}>Search</Text>
                </TouchableOpacity>
              </View>
          {list?.length==0 ? <Text style={{alignSelf:'flex-start',marginTop:10,fontSize:13,color:'red'}}>{"No Records found!"}</Text> :
               <View style={{paddingVertical:10}}>
           
            <FlatList
            data={list}
            renderItem={({item})=>(
                <TouchableOpacity 
                 onPress={()=>partnerDetaitl(item.SrNo)}
                style={{elevation:5,
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
                  <View style={{}}>
                  <Text style={{ color: '#595959', fontFamily: 'Acephimere', fontSize: 11 }}>{item.CityName}</Text>
                    <Text style={{ color: '#595959', fontFamily: 'Acephimere', fontSize: 11 }}>{item.StateName}</Text> 
                    </View>
                  
                   </View>
                   <View style={{flexDirection:'row'}}>
                    
                  {/* <Image style={{height:20,width:40}} resizeMode='center' source={require('../../../assets/Image/eye.png')}/> */}
                   </View>
                </TouchableOpacity>
            )}
            />
            </View>
}

              <View style={{
                width:'100%',
                backgroundColor:'#fff',
                marginTop:0,
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
            <FlatList
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
                       <Text style={{fontSize:16,color:'#000',fontFamily:'Acephimere'}}>{item.SupplierName}</Text>
                       <Text style={{color:'#000',fontFamily:'Acephimere',fontSize:13}}>{item.Location}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                       <TouchableOpacity
                       onPress={()=>AcceptMEthod(item.SupplierSrNo)}
                       style={{height:40,width:40
                       }}>
                           <Image style={{height:'100%',width:'100%'}} source={require('../../../assets/PartnerImage/6.png')}/>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>Reject(item.SupplierSrNo)}
                       style={{height:40,width:40,marginLeft:10
                       }}>
                           <Image style={{height:'100%',width:'100%'}} source={require('../../../assets/PartnerImage/5.png')}/>
                       </TouchableOpacity>
                   </View>
                </View>
            )}
            />
            </View>
        </View>
       
        <View style={{height:70}}/>
      
      </ScrollView>
      <View style={{
          marginVertical: hp("2.5%"),
          position: "absolute",
          top: "50%",
          right: "50%",
        }}>
      <ActivityIndicator size="large"
       animating={visible}
        color={colors.bc} />  
      </View>     
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