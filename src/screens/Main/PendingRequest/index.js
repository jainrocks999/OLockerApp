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
import { useDispatch,useSelector } from 'react-redux';
import styles from './styles';
const HomeScreen = () => {
   const navigation=useNavigation()
   const dispatch=useDispatch()

   const selector=useSelector(state=>state.RequestList)
  const selector2 = useSelector(state => state.RejectedRequestData)
   console.log('gjjj',selector);
    const manage =(SupplierSrNo)=>{

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
         <Text style={{color:'#565656',fontFamily:'Acephimere'}}>{`${selector.length}${' Pending Requests'}`}</Text>
         </View>
         <FlatList
         data={selector}
         renderItem={({item})=>(
             <View style={{marginTop:20,paddingHorizontal:20,flexDirection:'row'}}>
                 <View style={{width:'38%',height:100,backgroundColor:'#fff',elevation:5,borderRadius:8}}>

                 </View>
                 <View style={{marginLeft:20}}>
                     <Text style={{fontSize:16,color:'#032e63',fontFamily:'Acephimere'}}>{item.SupplierName}</Text>
                     <Text style={{fontSize:13,color:'#032e63',fontFamily:'Acephimere'}}>{item.city}</Text>
                     <Text style={{fontSize:11,color:'#575757',fontFamily:'Acephimere'}}>{item.time}</Text>
                     <View style={{
                       alignItems:'center',
                       justifyContent:'space-between',
                       flexDirection:'row',
                       marginTop:20,
                       }}>
                       <TouchableOpacity 
                       onPress={()=>manage(item.SupplierSrNo)}
                       style={{
                         backgroundColor:'#5dc95c',
                         paddingHorizontal:15,
                         alignItems:'center',
                         justifyContent:'center',
                         borderRadius:15,
                         paddingVertical:5,
                       }}>
                          <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ACCEPT</Text>
                       </TouchableOpacity>
                       <TouchableOpacity 
                        onPress={()=>Reject(item.SupplierSrNo)}
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
                 {/* {console.log('zvvvv',item)} */}
             </View>
         )}
         />
      </View>   
       {/* <View style={{bottom:0,position:'absolute',left:0,right:0}}>
      <BottomTab/>
      </View> */}
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
