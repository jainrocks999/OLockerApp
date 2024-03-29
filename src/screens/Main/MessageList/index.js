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
import Loader from '../../../components/Loader'
import { useSelector } from 'react-redux';
const HomeScreen = () => {
   const navigation=useNavigation()
   const [business,setBusiness]=useState(true)
   const [customer,setCustomer]=useState(false)
  
   const Data1=[]
   const Data2=[]
   const isFetching = useSelector(state=>state.isFetching)
    
      const selector=useSelector(state=>state.AllNotification.GetNotification)
      console.log('message...............',selector);
selector?.map((item)=>{
  // console.log('message type ...',item.MessageType);
  if(item.MessageType==0){
    Data1.push({
       item
    })
  }
});
selector?.map((item)=>{
  // console.log('message type ...',item.MessageType);
  if(item.MessageType==1){
    Data2.push({
       item
    })
  }
});
const manageBusiness=()=>{
  setBusiness(true)
  setCustomer(false)
}
const [value,setVlue]=useState(0)
const [value1,setVlue1]=useState(0)
const manageCustomer=()=>{
  setCustomer(true)
  setBusiness(false)
}
// const arr=[44,23,45,67,32,23,43,45,43,24]
// const array=[]
// const sort=()=>{
//   let i, j,temp;  
//   for( i = 0; i<10; i++)    
//   {    
//       for(j = i+1; j<10; j++)    
//       {    
//           if(array[j] > array[i])    
//           {    
//               temp = array[i];    
//               array[i] = array[j];    
//               array[j] = temp;  
             
//           }     
//       }   
      
//   }     
     
//   for(i = 0; i<10; i++)    
//   {    
//     setVlue(array[i])  
     
//   }   
//  let largest = arr[0];  
//   let  sec_largest = arr[1];  
//     for(i=0;i<arr.length;i++)  
//     {  
//         if(arr[i]>largest)  
//         {  
//             sec_largest = largest;  
//             largest = arr[i];  
//         }  
//         else if (arr[i]>sec_largest && arr[i]!=largest)  
//         {  
//             sec_largest=arr[i];  
            
//         }  
//     }  
//     setVlue(largest)
//     setVlue1(sec_largest)
//  printf("largest = %d, second largest = %d",largest,sec_largest);
//}
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
       {/* <TouchableOpacity>
         <Text>Here is the eelement of array</Text>
       </TouchableOpacity>
      <Text>{` ${arr}`}</Text>

       <View style={{width:'100%',alignItems:'center'}}>
         <TouchableOpacity onPress={()=>sort()} style={{height:40,backgroundColor:'blue',padding:10,marginTop:20}}>
           <Text style={{color:'#fff'}}>Click to Sort</Text>
         </TouchableOpacity>
         </View>
       <Text>{` ${value } ${value1 }`}</Text> */}
    <Header
       source={require('../../../assets/L.png')}
      source2={require('../../../assets/Image/dil.png')}
      title={'Message Box '}
      onPress={() => navigation.goBack()}
      onPress2={()=>navigation.navigate('FavDetails')}
      />  
      <View>
        {isFetching?<Loader/>:null}
        <View style={{
          paddingHorizontal:20,
          paddingVertical:5,
          flexDirection:'row',
          width:'75%',
          alignItems:'center',
          marginTop:8
          }}>
            <TouchableOpacity
            onPress={()=>manageBusiness()}
            style={{
              borderWidth:1,height:35,
              borderRadius:16,alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:20,
              backgroundColor:business==true?'#032e63':'#fff',
              borderColor:business==true?'#032e63':'#2b2b2b'
              }}>
              <Text style={{fontSize:13,fontFamily:'Acephimere',color:business==true?'#fff':'#2b2b2b'}}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>manageCustomer()}
            style={{
              borderWidth:1,height:35,
              borderRadius:16,alignItems:'center',
              justifyContent:'center',
              paddingHorizontal:20,
              marginLeft:15,
              backgroundColor:customer==true?'#032e63':'#fff',
              borderColor:customer==true?'#032e63':'#2b2b2b'
              }}>
              <Text style={{fontSize:13,fontFamily:'Acephimere',color:customer==true?'#fff':'#2b2b2b'}}>Customer</Text>
            </TouchableOpacity>
        </View>
        <View>
         {business==true? <FlatList
          data={Data2}
          renderItem={({item})=>(
            <View style={{backgroundColor:'#fff',marginTop:10,paddingHorizontal:10,paddingVertical:10,paddingLeft:20}}>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                 <Text style={{fontSize:16}}>{item.item.Title}</Text>
                 <View style={{backgroundColor:'#24a31e',paddingHorizontal:6,paddingVertical:2}}>
                   <Text style={{color:'#fff',fontSize:13}}>{item.item.ReplyMsgId}</Text>
                 </View>
               </View>
               <Text>{item.item.Message}</Text>
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                 <Image style={{tintColor:'grey',height:12,width:16}} source={require('../../../assets/Fo.png')}/>
                 <Text style={{marginLeft:6,fontSize:12,color:'grey'}}>{item.item.Timestamp}</Text>
               </View>
            </View>
          )}
          />:null}
          {customer==true? <FlatList
          data={Data1}
          renderItem={({item})=>(
            <View style={{backgroundColor:'#fff',marginTop:10,paddingHorizontal:10,paddingVertical:10,paddingLeft:20}}>
              {console.log('fssssf',item)}
              {item.MessageType===0?'':null}
              <View>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                 <Text style={{fontSize:16}}>{item.item.Title}</Text>
                 <View style={{backgroundColor:'#24a31e',paddingHorizontal:6,paddingVertical:2}}>
                   <Text style={{color:'#fff',fontSize:13}}>{item.item.ReplyMsgId}</Text>
                 </View>
               </View>
               <Text>{item.item.Message}</Text>
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                 <Image style={{tintColor:'grey',height:12,width:16}} source={require('../../../assets/Fo.png')}/>
                 <Text style={{marginLeft:6,fontSize:12,color:'grey'}}>{item.item.Timestamp}</Text>
               </View>
               </View>
             
            </View>
          )}
          />:null}
        </View>
      </View>   
       {/* <View style={{bottom:0,position:'absolute',left:0,right:0}}>
      <BottomTab/>
      </View> */}
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
