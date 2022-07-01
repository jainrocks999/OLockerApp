import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import Header from '../../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import BottomTab from '../../../components/StoreButtomTab';
import Stars from 'react-native-stars';
import styles from './styles';
import Catalogue from '../../../components/Catalogue';
import Profile from '../../../components/Profile';
import Setting from '../../../components/Settings';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../../../components/Loader';
import ImagePath from '../../../components/ImagePath';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const HomeScreen = () => {
   const navigation=useNavigation()
   const dispatch=useDispatch()
   const [profile,setProfile]=useState(true)
   const [message,setMessage]=useState(false)
   const [catalogue,setCatalogue]=useState(false)
   const [setting,setSetting]=useState(false)
   const isFetching=useSelector(state=>state.isFetching)
   const selector=useSelector(state=>state.ProfileData)
   const selector1 = useSelector(state => state.Catalogue)
   const BannerWidth = (Dimensions.get('window').width * 15) / 16;
   const BannerHeight = 140;
console.log('virendramishra',selector.Images);
  
   
  const manageTab=()=>{
      setProfile(true)
      setMessage(false)
      setCatalogue(false)
      setSetting(false)
  }
  const manageTab1=()=>{
    setProfile(false)
    setMessage(true)
    setCatalogue(false)
    setSetting(false)
}
const manageTab2=()=>{
  setProfile(false)
  setMessage(false)
  setCatalogue(true)
  setSetting(false)
}
const manageTab3=()=>{
  setProfile(false)
  setMessage(false)
  setCatalogue(false)
  setSetting(true)
}

const addToNetwork=async()=>{

  const srno=await AsyncStorage.getItem('Partnersrno')
    axios({
      method: "POST",
      url:`https://api.myjeweller.in/api/Partner/AddSupplier`,
      headers: { 
        'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
        "Content-Type":'application/json'
      },
      data:JSON.stringify({
          "PartnerSrno": srno,
          "SupplierCode": JSON.ScrollView(selector.Profile.SupplierCode)
      })
    })
    .then(res => {
      console.log('this is ressxddsfgds  g  fadf   ',res.data);
      if(res.data.success==true){
     console.log('this isi response data from rerndrs',res.data);
      }
    })
    .catch(err => {
      console.log("error in request", err);
    }); 
  }

  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
     <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Partner Profile '}
      onPress={() => navigation.goBack()}
      />   
      {isFetching?<Loader/>:null}
      <ScrollView>
        <View style={{
          backgroundColor:'#032e63'
        }}>
          <View style={{flexDirection:'row',padding:15,width:'100%'}}>
            <View style={{backgroundColor:'#fff',height:100,width:'30%',borderRadius:10}}>
              {selector.Images==[]?
               <Image
              style={{height: '100%', width: 100 ,borderRadius:10}}
              resizeMode={'stretch'}
              source={{
                uri: `${ImagePath.Path}${item.ImageUrl}`,
              
               }} /> : <Image
                style={{ width: '100%', height: 100, borderRadius: 10 }}
                resizeMode='center'
                source={require('../../../assets/demo.png')} />
              }
             
            </View>
            <View style={{marginLeft:10,width:'60%',marginTop:-4}}>
              <Text style={{color:'#fff',fontSize:19,fontFamily:'Acephimere'}}>{selector.Profile.SupplierName}</Text>
              <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>{selector.Profile.Location}</Text>
              <View 
              style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:20,
                alignItems:'center',
                width:'100%'
                }}>
                 <Stars
                    display={3}
                    spacing={3}
                    count={5}
                    starSize={15}
                    fullStar= {require('../../../assets/Image/star.png')}
                    emptyStar= {require('../../../assets/Image/star1.png')}/>

                  <View style={{flexDirection:'row'}}>
                     <TouchableOpacity
                     onPress={()=>Linking.openURL(`tel:${selector.Profile.MobileNo}`)}
                      style={{alignItems:'center',justifyContent:'center'}}>
                       <Image style={{width:30,height:30}} source={require('../../../assets/PartnerImage/16.png')}/>
                     </TouchableOpacity>
                     <View style={{alignItems:'center',justifyContent:'center',marginLeft:10}}>
                     <Image style={{width:30,height:30}} source={require('../../../assets/PartnerImage/15.png')}/>
                     </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
              <TouchableOpacity
              onPress={()=>addToNetwork()}
               style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20
                }}>
                <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ADD TO NETWORK</Text>
              </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', height: 0,marginTop:15}}>

        </View>
       
          <View style={{height:20}}/>
        </View>
        <View style={styles.tabContainer}>
             <View style={{alignItems:'center'}}>
               <TouchableOpacity onPress={()=>manageTab()} style={styles.tabStyle}>
                 {profile?<Image 
                 style={{width:50,height:50}} 
                 source={require('../../../assets/PartnerImage/10.png')}/>:
                 <Image 
                 style={{width:50,height:50}} 
                 source={require('../../../assets/PartnerImage/pro_uncolor.png')}/>
                 }
               </TouchableOpacity>
               <Text style={{marginTop:3,fontFamily:'Acephimere',fontSize:13}}>Pofile</Text>
            </View>
            <View style={{alignItems:'center'}}>
               <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={styles.tabStyle}>
               {message?<Image 
               style={{width:50,height:50}} 
               source={require('../../../assets/PartnerImage/msg_active.png')}/>:
               <Image 
               style={{width:50,height:50}} 
               source={require('../../../assets/PartnerImage/11.png')}/>
               }

               </TouchableOpacity>
               <Text style={{marginTop:3,fontFamily:'Acephimere',fontSize:13}}>Message</Text>
            </View>
            <View style={{alignItems:'center'}}>
               <TouchableOpacity onPress={()=>manageTab2()} style={styles.tabStyle}>
               {catalogue?<Image 
               style={{width:50,height:50}} 
               source={require('../../../assets/PartnerImage/nackactive.png')}/>:
               <Image 
               style={{width:50,height:50}} 
               source={require('../../../assets/PartnerImage/8.png')}/>
               }
               </TouchableOpacity>
               <Text style={{marginTop:3,fontFamily:'Acephimere',fontSize:13}}>Catalogue</Text>
            </View>
            <View style={{alignItems:'center'}}>
               <TouchableOpacity onPress={()=>manageTab3()} style={styles.tabStyle}>
               {setting?<Image 
               style={{width:50,height:50}} 
               source={require('../../../assets/PartnerImage/setting_active.png')}/>:
               <Image 
               style={{width:50,height:50}} 
               source={require('../../../assets/PartnerImage/7.png')}/>
               }
               </TouchableOpacity>
               <Text style={{marginTop:3,fontFamily:'Acephimere',fontSize:13}}>Settings</Text>
            </View>
        </View>
        <View style={{marginTop:10}}>
          {profile==true?<Profile/>:null}
          {catalogue==true?<Catalogue/>:null}
          {setting==true?<Setting/>:null}

        </View>
       <View style={{height:70}}/>
      </ScrollView>   
       <View style={{bottom:0,position:'absolute',left:0,right:0}}>
      <BottomTab/>
      </View>
      <StatusBar/>
    </View>
  );
};
export default HomeScreen;


