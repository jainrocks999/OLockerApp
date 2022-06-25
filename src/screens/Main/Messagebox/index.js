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
      title={'Message Box '}
      onPress={() => navigation.goBack()}
      />  
      <View>
        <View style={{
          paddingHorizontal:20,
          paddingVertical:10,
          flexDirection:'row',justifyContent:'space-between',
          width:'75%'
          }}>
            <TouchableOpacity style={{
              borderWidth:1,
              borderRadius:16,alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:20,
              paddingVertical:5
              }}>
              <Text style={{fontFamily:'Roboto-Medium',fontSize:13,color:'#032e63'}}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              borderWidth:1,
              borderRadius:16,alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:20,
              paddingVertical:5
              }}>
              <Text style={{fontFamily:'Roboto-Medium',fontSize:13,color:'#616161'}}>Customer</Text>
            </TouchableOpacity>
        </View>
        <View>
          <FlatList
          data={data}
          renderItem={({item})=>(
            <View style={{backgroundColor:'#fff',marginTop:10,paddingHorizontal:10,paddingVertical:10,paddingLeft:20}}>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                 <Text style={{fontSize:16,color:'#032e63',fontFamily:'Roboto-Medium'}}>{item.title}</Text>
                 <View style={{backgroundColor:'#12cb16',paddingHorizontal:6,paddingVertical:2}}>
                   <Text style={{color:'#fff',fontSize:12,fontFamily:'Roboto-Regular'}}>NEW</Text>
                 </View>
               </View>
               <Text style={{fontFamily:'Roboto-Regular',color:'#4b4b4b'}}>{item.text}</Text>
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                 <Image style={{tintColor:'grey',height:12,width:16}} source={require('../../../assets/Fo.png')}/>
                 <Text style={{marginLeft:6,fontSize:12,color:'#939393'}}>{item.time}</Text>
               </View>
            </View>
          )}
          />
        </View>
      </View> 
      <View style={{
        bottom:70,
        position:'absolute',
        left:0,right:0,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30
        }}>
         <TouchableOpacity 
         onPress={()=>navigation.navigate('Chat')}
         style={{
           backgroundColor:'#e9056b',
           width:'100%',
           paddingHorizontal:40,
           alignItems:'center',
           paddingVertical:10,
           borderRadius:10
           }}>
           <Text style={{color:'#fff',fontSize:16,fontFamily:'Roboto-Medium'}}>Send new message</Text>
         </TouchableOpacity>
      </View>  
       <View style={{bottom:0,position:'absolute',left:0,right:0}}>
      <BottomTab/>
      </View>
      <StatusBar/>
    </View>
  );
};
export default HomeScreen;
const data = [
  {title: 'Milind Jewellers',text:'We can supply product you have as..',time:'Last replied on 07 Sep,2020'},
  {title: 'Mahabir Jewellers',text:'Payments term can be discussed as per..',time:'Last replied on 01 Sep,2020'},
  {title: 'Narendra Jewellers',text:'We can supply product you have as..',time:'Last replied on 03 Sep,2020'},
  
];
