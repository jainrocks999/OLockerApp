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
      title={'My Network '}
      onPress={() => navigation.goBack()}
      />   
      <View>
         <View style={{paddingHorizontal:20,marginTop:10,width:'100%',flexDirection:'row',alignItems:'center'}}>
            <View style={{width:'50%'}}>
              <Text>145 Partners</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%',justifyContent:'center'}}>
              <Image style={{height:20,width:20}} source={require('../../../assets/Image/karni.png')}/>
              <View 
              style={{
                borderWidth:1,
                flexDirection:'row',
                borderRadius:30,
                paddingHorizontal:10,
                paddingVertical:5,
                width:'80%',
                backgroundColor:'#fff',
                marginLeft:10
                }}>
                <Image style={{height:20,width:20}} source={require('../../../assets/search1.png')}/>
                <Text style={{marginLeft:5}}>Search</Text>
              </View>
            </View>
         </View>
         <FlatList
         data={data}
         numColumns={2}
         style={{margin:10}}
         renderItem={({item})=>(
             <TouchableOpacity 
             onPress={()=>navigation.navigate('PartnerProfile')}
             style={{width:'47%',margin:5,borderRadius:20,height:200,marginTop:0}}>
               <View style={{backgroundColor:'red',height:120,borderTopRightRadius:10,borderTopLeftRadius:10}}>

               </View>
               <View style={{
                 backgroundColor:'#fff',
                //  height:80,
                 borderBottomLeftRadius:10,
                 borderBottomRightRadius:10,
                 padding:10,
                 justifyContent:'center'
                 }}>
                 <Text style={{color:'#072750',fontSize:16,}}>{item.name}</Text>
                 <Text>{item.city}</Text>
               </View>
             </TouchableOpacity>
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
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},

]
