import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import BottomTab from "../../../components/StoreButtomTab";
import Header from '../../../components/CustomHeader';
import { useSelector } from 'react-redux';
import Loader from "../../../components/Loader"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import colors from '../../../components/colors';
import getDate from '../../../components/Date';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Loyalty = () => {
  const navigation = useNavigation();
  
  const [date,setPlan2]=useState();
  const isFatching =useSelector(state=>state.isFetching)
  const selector=useSelector(state=>state.LoyaltyType)
  const isFocused = useIsFocused()
  const [data4,setData4]=useState([])
  const[visible,setVisible]=useState(false)
  useEffect(()=>{
  if(isFocused){  
  //  {console.log('date,,,,,,,,', getDate(date));}
  LoyaltyDetail()
  }
  },[isFocused])
  const LoyaltyDetail=async()=>{
    const Data3=[]
    const partnerSrNo = await AsyncStorage.getItem('Partnersrno');
    selector.planTypes?.map((item) => {
        console.log('item',item.Id);
       const ITEM3 = item.PlanType
     
    setVisible(true)
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://devappapi.olocker.in/api/Partner/GetLoyalityPlanDetails',
      headers: { 
        'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5', 
        'Content-Type': 'application/json'
      }, 
      params:{ 
        planType:item.Id,
        partnerId:partnerSrNo
      }
    };
    
    axios(config)
    .then(function (response) {
       console.log('response123,,,,',response.data.success);

      if(response.data.success==true){
        setVisible(false)
      console.log('response',response.data.planDetail);
      console.log('date,,,,,,,,', new Date(response.data.planDetail.EndDate));
      let Converted1 =new Date(response.data.planDetail.EndDate)
  let today1 = Converted1.getDate().toString().padStart(2,"0") + "-" + (Converted1.getMonth() + 1).toString().padStart(2,"0") + "-" +Converted1.getFullYear() ;
  let Converted =new Date(response.data.planDetail.StartDate)
  let today = Converted.getDate().toString().padStart(2,"0") + "-" + (Converted.getMonth() + 1).toString().padStart(2,"0") + "-" +Converted.getFullYear() ;
  console.log('Date converted.....',today);
      setPlan2(response.data.planDetail.StartDate)
      Data3.push({
        response:response.data.planDetail,
         PlanType:ITEM3,
          Id:item.Id,
          start:today,
          EndDate:today1,
          Points:response.data.planDetail.Points
       })
    }
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  })
  setData4(Data3)
  
  }
  
  console.log('DataPush by Get Loyalty plan type',data4);
  AsyncStorage.setItem('data4',JSON.stringify(data4));
  console.log('plan response',date);
  return (
    <View style={styles.container1}>
      <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/Image/dil.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Loyalty '}
      onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={()=>navigation.navigate('FavDetails')}
      />
      <ScrollView style={{ flex: 1,paddingHorizontal:10 }}>
       {isFatching?<Loader/>:null}
        {/* {selector?.length>0? */}
        <FlatList
        data={data4}
        renderItem={({item})=>(
          <View style={[styles.card,{marginBottom:5}]}>
            {console.log('item....',item)}
         <View style={styles.main}> 
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>{item.PlanType}</Text>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>{`${item.Points} Points`}</Text>
         </View>
         <View style={styles.main1}>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:5}}>
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>{`${item.start}`}</Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959',marginRight:10}]}>Start Date</Text>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:10}}/>
         <View style={{alignItems:'center',justifyContent:'center',paddingVertical:10,}}>
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium',marginRight:10,width:'80%'}]}>{item.EndDate}</Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>End Date</Text>
         </View>   
         </View>
      </View>
        )}
        />
        {/* :null} */}
       
      {/* <View style={styles.card}>
         <View style={styles.main}> 
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>Referral</Text>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}> 
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>11 Sep 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:10}}/>
         <View style={{marginTop:10}}> 
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>10 Oct 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>End Date</Text>
         </View>   

         </View>
       
      </View> */}
      {/* <View style={styles.card}>
         <View style={styles.main2}> 
         <View style={{flexDirection:'row',alignItems:'center'}}>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>First purchase</Text>
           <Text style={{color:'#fff',fontSize:10,marginLeft:10}}>Expired</Text>
           </View>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}>
         <Text style={[styles.textB,{fontFamily:'Roboto-Medium',color:'#79797a'}]}>11 Sep 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:10}}/>
         <View style={{marginTop:10}}>
         <Text style={[styles.textB,{fontFamily:'Roboto-Medium',color:'#79797a'}]}>10 Oct 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>End Date</Text>
         </View>   
         </View>
         </View> */}
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:90,paddingHorizontal:10}}>
      </View>
      </ScrollView>

      <View style={{backgroundColor:'#032e63',width:60,height:60,
          position:'absolute',bottom:80,right:15,borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Loyalty')}
          >
          <Image style={{height:30,width:30}} source={require('../../../assets/plus.png')}/>
          </TouchableOpacity>
        </View>
      <StatusBar />
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
export default Loyalty;

