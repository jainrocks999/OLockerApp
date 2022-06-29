import React, { useState } from 'react';
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
const HomeScreen = () => {
   const navigation=useNavigation()
   const dispatch=useDispatch()
   const selector=useSelector(state=>state.SentRequestData)
   const selector1=useSelector(state=>state.AcceptedRequestData)
   const selector2=useSelector(state=>state.RejectedRequestData)
   const [rejected,setRejected]=useState(false)
   const [pending,setPending]=useState(true)
   const [accepted,setAccepted]=useState(false)

console.log('this is selector data1111',selector);
  const manageRequest=()=>{
    setPending(true)
    setAccepted(false)
    setRejected(false)
  }

  const manageRequest1=()=>{
    setPending(false)
    setAccepted(true)
    setRejected(false)
  }

  const manageRequest2=()=>{
    setPending(false)
    setAccepted(false)
    setRejected(true)
  }
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
     <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Sent Requests '}
      onPress={() => navigation.goBack()}
      />   
         <View>
            <View style={{flexDirection:'row',padding:13,justifyContent:'space-between'}}>
                <TouchableOpacity 
                onPress={()=>manageRequest()}
                style={{
                    paddingVertical:8,
                    borderRadius:15,
                    borderWidth:1,
                    width:'33%',
                    alignItems:'center',
                    justifyContent:'center',
                    borderColor:pending==true?'#032e63':'#616161'
                    }}>
                <Text style={{fontSize:11,color:pending==true?'#032e63':'#616161',fontFamily:'Acephimere'}}>Pending Approval</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>manageRequest1()}
                style={{
                    paddingVertical:8,
                    borderRadius:15,
                    borderWidth:1,
                    width:'30%',
                    alignItems:'center',
                    justifyContent:'center',
                    borderColor:accepted==true?'#032e63':'#616161'
                    }}>
                <Text style={{fontSize:11,color:accepted==true?'#032e63':'#616161',fontFamily:'Acephimere'}}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>manageRequest2()}
                style={{
                    paddingVertical:8,
                    borderRadius:15,
                    borderWidth:1,
                    width:'30%',
                    alignItems:'center',
                    justifyContent:'center',
                    borderColor:rejected==true?'#032e63':'#616161'
                    }}>
                <Text style={{fontSize:11,color:rejected==true?'#032e63':'#616161',fontFamily:'Acephimere'}}>Rejected</Text>
                </TouchableOpacity>
            </View>
           {pending==true? <View>
            <View style={{paddingHorizontal:15}}>
             {selector.length>0? <Text style={{fontFamily:'Acephimere',fontSize:13,color:'#565656',}}>{`${selector.length} Pending Approval`}</Text>:null}
            </View>
            <View style={{marginHorizontal:15}}>
              <FlatList
              data={selector}
              renderItem={({item})=>(
                <View style={{
                  width:'100%',
                  backgroundColor:'#fff',
                  marginTop:10,
                  elevation:5,
                  borderRadius:10,
                  marginBottom:20
                  }}>
                    {console.log('abbb11',item)}
                  <View style={{flexDirection:'row',paddingVertical:15,justifyContent:'space-between',paddingHorizontal:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:100,borderWidth:0,height:80}}>
                        {item.Logo == "" ?
                          <Image
                            style={{ width: 100, height: 80, marginLeft:-10}}
                            resizeMode='cover'
                            source={require('../../../assets/Not.png')} /> :
                          <Image
                            style={{ height: 80, width: 100,marginLeft:30 }}
                            resizeMode='stretch'
                            source={{ uri: `${ImagePath.Path}${(item.Logo).substring(2)}` }}
                          />
                        }
                      {/* <Image
                      style={{height:80,width:100,marginLeft:30}}
                      //resizeMode='stretch'
                      source={{uri: `${ImagePath.Path}${(item.Logo).substring(2)}`}}
                      /> */}
                      </View>
                      <View style={{marginLeft:10}}>
                        <Text style={{color:'#032e63',fontFamily:'Acephimere',fontSize:17,fontWeight:'600'}}>{item.SupplierName}</Text>
                        <Text style={{fontFamily:'Acephimere',fontSize:13,color:'#000',marginLeft:1,marginTop:3}}>{item.MobileNo}</Text>
                        <Text style={{fontSize:11,marginTop:10,fontFamily:'Acephimere',color:'#656565'}}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={{justifyContent:'flex-end',}}>
                      <TouchableOpacity style={{backgroundColor:'grey',paddingHorizontal:5,paddingVertical:2,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:12}}>Pending</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width:'100%',borderTopWidth:1,flexDirection:'row',justifyContent:'space-between',borderColor:'grey'}}>
                    {/* <View style>
                      <Text>Delete Request</Text>
                    </View> */}
                     <View  style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',paddingVertical:10}}>
                       <TouchableOpacity 
                       style={{
                         alignItems:'center',justifyContent:'center'
                         }}>
                        <Image style={{height:25,width:25}} source={require('../../../assets/PartnerImage/5.png')}/>
                         </TouchableOpacity>
                         <Text style={{marginLeft:7,fontFamily:'Acephimere'}}>Delete Request</Text>
                     </View>
                  </View>
                </View>
              )}
              />
            </View>
            </View>:null}

            {accepted==true? <View>
            <View style={{paddingHorizontal:15}}>
             {selector.length>0? <Text style={{fontFamily:'Acephimere',fontSize:13,color:'#565656',}}>{`${selector.length} Pending Approval`}</Text>:null}
            </View>
            <View style={{marginHorizontal:15}}>
              <FlatList
              data={selector1}
              renderItem={({item})=>(
                <View style={{
                  width:'100%',
                  backgroundColor:'#fff',
                  marginTop:10,
                  elevation:5,
                  borderRadius:10,
                  marginBottom:20
                  }}>
                  <View style={{flexDirection:'row',paddingVertical:15,justifyContent:'space-between',paddingHorizontal:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:100,borderWidth:1,height:80}}>

                      </View>
                      <View style={{marginLeft:10}}>
                        <Text style={{color:'#032e63',fontFamily:'Acephimere',fontSize:15}}>{item.name}</Text>
                        <Text style={{fontFamily:'Acephimere',fontSize:13,color:'#000'}}>{item.city}</Text>
                        <Text style={{fontSize:11,marginTop:10,fontFamily:'Acephimere',color:'#656565'}}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={{justifyContent:'flex-end',}}>
                      <TouchableOpacity style={{backgroundColor:'grey',paddingHorizontal:5,paddingVertical:2,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:12}}>Pending</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width:'100%',borderTopWidth:1,flexDirection:'row',justifyContent:'space-between',borderColor:'grey'}}>
                    {/* <View style>
                      <Text>Delete Request</Text>
                    </View> */}
                     <View  style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',paddingVertical:10}}>
                       <TouchableOpacity 
                       style={{
                         alignItems:'center',justifyContent:'center'
                         }}>
                        <Image style={{height:25,width:25}} source={require('../../../assets/PartnerImage/5.png')}/>
                         </TouchableOpacity>
                         <Text style={{marginLeft:7,fontFamily:'Acephimere'}}>Delete Request</Text>
                     </View>
                  </View>
                </View>
              )}
              />
            </View>
            </View>:null}

            {rejected==true? <View>
            <View style={{paddingHorizontal:15}}>
             {selector.length>0? <Text style={{fontFamily:'Acephimere',fontSize:13,color:'#565656'}}>{`${selector.length} Pending Approval`}</Text>:null}
            </View>
            <View style={{marginHorizontal:15}}>
              <FlatList
              data={selector2}
              renderItem={({item})=>(
                <View style={{
                  width:'100%',
                  backgroundColor:'#fff',
                  marginTop:10,
                  elevation:5,
                  borderRadius:10,
                  marginBottom:20
                  }}>
                  <View style={{flexDirection:'row',paddingVertical:15,justifyContent:'space-between',paddingHorizontal:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:100,borderWidth:1,height:80}}>

                      </View>
                      <View style={{marginLeft:10}}>
                        <Text style={{color:'#032e63',fontFamily:'Acephimere',fontSize:15}}>{item.name}</Text>
                        <Text style={{fontFamily:'Acephimere',fontSize:13,color:'#000'}}>{item.city}</Text>
                        <Text style={{fontSize:11,marginTop:10,fontFamily:'Acephimere',color:'#656565'}}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={{justifyContent:'flex-end',}}>
                      <TouchableOpacity style={{backgroundColor:'grey',paddingHorizontal:5,paddingVertical:2,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:12}}>Pending</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width:'100%',borderTopWidth:1,flexDirection:'row',justifyContent:'space-between',borderColor:'grey'}}>
                    {/* <View style>
                      <Text>Delete Request</Text>
                    </View> */}
                     <View  style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',paddingVertical:10}}>
                       <TouchableOpacity 
                       style={{
                         alignItems:'center',justifyContent:'center'
                         }}>
                        <Image style={{height:25,width:25}} source={require('../../../assets/PartnerImage/5.png')}/>
                         </TouchableOpacity>
                         <Text style={{marginLeft:7,fontFamily:'Acephimere'}}>Delete Request</Text>
                     </View>
                  </View>
                </View>
              )}
              />
            </View>
            </View>:null}
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
   
]
const data1=[
  {image:'',name:'RC Bafna Jewllers1',city:'Mumbai',time:'17 Minutes ago'},
 
]
const data2=[
  {image:'',name:'RC Bafna Jewllers2',city:'Mumbai',time:'17 Minutes ago'},
 
]