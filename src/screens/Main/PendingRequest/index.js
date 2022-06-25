import React from 'react';
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
import { useSelector } from 'react-redux';
const HomeScreen = () => {
   const navigation=useNavigation()
   const selector=useSelector(state=>state.RequestList)
  const selector2 = useSelector(state => state.RejectedRequestData)
  const selector1 = useSelector(state => state.AcceptedRequestData)
   console.log('this is selector responserrr',selector);
   

   const Accept=()=>{
    var axios = require('axios');
    var data = JSON.stringify({
      "SrNo": 1,
      "IsShowinRetailerApp": true
    });
    
    var config = {
      method: 'post',
      url: 'https://devappapi.olocker.in/api/Partner/AcceptSupplierRequest?=&=',
      headers: { 
        'Content-Type': 'application/json', 
        'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log('111========',JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
   }
const Reject =()=>{
  var axios = require('axios');
  var data = JSON.stringify({
    "SrNo": 1,
    "RejectReason": "string"
  });

  var config = {
    method: 'post',
    url: 'https://devappapi.olocker.in/api/Partner/RejectSupplierRequest',
    headers: {
      'Content-Type': 'application/json',
      'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log('reject',JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
     <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Pending Request '}
      onPress={() => navigation.goBack()}
      />   
      <View>
        <View style={{paddingHorizontal:20,marginTop:10}}>
         <Text style={{color:'#565656',fontFamily:'Acephimere'}}>{'3 Pending Requests'}</Text>
         </View>
         <FlatList
         data={data}
         renderItem={({item})=>(
             <View style={{marginTop:20,paddingHorizontal:20,flexDirection:'row'}}>
                 <View style={{width:'38%',height:100,backgroundColor:'#fff',elevation:5,borderRadius:8}}>

                 </View>
                 <View style={{marginLeft:20}}>
                     <Text style={{fontSize:16,color:'#032e63',fontFamily:'Acephimere'}}>{item.name}</Text>
                     <Text style={{fontSize:13,color:'#032e63',fontFamily:'Acephimere'}}>{item.city}</Text>
                     <Text style={{fontSize:11,color:'#575757',fontFamily:'Acephimere'}}>{item.time}</Text>
                     <View style={{
                       alignItems:'center',
                       justifyContent:'space-between',
                       flexDirection:'row',
                       marginTop:20,
                       }}>
                       <TouchableOpacity 
                   onPress={()=>selector1}
                       style={{
                         backgroundColor:'#5dc95c',
                         paddingHorizontal:15,
                         alignItems:'center',
                         justifyContent:'center',
                         borderRadius:15,
                         paddingVertical:5
                       }}>
                          <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ACCEPT</Text>
                       </TouchableOpacity>
                       <TouchableOpacity 
                        onPress={()=>selector2}
                       style={{
                         backgroundColor:'red',
                         paddingHorizontal:15,
                         alignItems:'center',
                         justifyContent:'center',
                         borderRadius:15,
                         paddingVertical:5,
                         marginLeft:10
                         
                       }}>
                          <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>REJECT</Text>
                       </TouchableOpacity>
                     </View>
                 </View>
                 {console.log('zvvvv',item)}
             </View>
         )}
         />
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
    {image:'',name:'RC Bafna Jewellers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewellers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewellers',city:'Mumbai',time:'17 Minutes ago'},

]
