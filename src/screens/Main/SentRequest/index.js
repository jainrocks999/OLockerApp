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
const HomeScreen = () => {
   const navigation=useNavigation()
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
     <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Sent Request '}
      onPress={() => navigation.goBack()}
      />   
         <View>
            <View style={{flexDirection:'row',padding:13,justifyContent:'space-between'}}>
                <TouchableOpacity 
                style={{
                    paddingVertical:8,
                    borderRadius:15,
                    borderWidth:1,
                    width:'33%',
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                <Text style={{fontSize:11}}>Pending Approval</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                    paddingVertical:8,
                    borderRadius:15,
                    borderWidth:1,
                    width:'30%',
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                <Text style={{fontSize:11}}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                    paddingVertical:8,
                    borderRadius:15,
                    borderWidth:1,
                    width:'30%',
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                <Text style={{fontSize:11}}>Reject</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:15}}>
              <Text>3 Pending Approval</Text>
            </View>
            <View style={{marginHorizontal:15}}>
              <FlatList
              data={data}
              renderItem={({item})=>(
                <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10,elevation:5,shadowColor:'#000'}}>
                  <View style={{flexDirection:'row',paddingVertical:15,justifyContent:'space-between',paddingHorizontal:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={{width:100,borderWidth:1,height:80}}>

                      </View>
                      <View style={{marginLeft:10}}>
                        <Text>{item.name}</Text>
                        <Text>{item.city}</Text>
                        <Text style={{fontSize:11,marginTop:10}}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={{justifyContent:'flex-end',}}>
                      <TouchableOpacity style={{backgroundColor:'grey',paddingHorizontal:5}}>
                        <Text style={{color:'#fff'}}>Pending</Text>
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
                         <Text style={{marginLeft:7}}>Delete Request</Text>
                     </View>

                     {/* <View  style={{flexDirection:'row',width:'49%',paddingVertical:10,alignItems:'center',justifyContent:'center'}}>
                       <TouchableOpacity 
                       style={{
                         alignItems:'center',justifyContent:'center'
                         }}>
                           <Image style={{height:25,width:25}} source={require('../../../assets/PartnerImage/6.png')}/>
                         </TouchableOpacity>
                         <Text style={{marginLeft:7}}>Accept</Text>
                     </View>
                     <View style={{borderWidth:0.5,borderColor:'grey'}}>

                     </View>
                     <View  style={{flexDirection:'row',width:'49%',alignItems:'center',justifyContent:'center',paddingVertical:10}}>
                       <TouchableOpacity 
                       style={{
                         alignItems:'center',justifyContent:'center'
                         }}>
                        <Image style={{height:25,width:25}} source={require('../../../assets/PartnerImage/5.png')}/>
                         </TouchableOpacity>
                         <Text style={{marginLeft:7}}>Reject</Text>
                     </View> */}
                  </View>
                </View>
              )}
              />
                          {/* <View style={{height:180}}/> */}
            </View>

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
    // {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    // {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},

]
