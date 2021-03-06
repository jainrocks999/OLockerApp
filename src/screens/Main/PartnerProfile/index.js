import React,{useState} from 'react';
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
import Carousel from 'react-native-banner-carousel';
import Stars from 'react-native-stars';
import styles from './styles';
import Catalogue from '../../../components/Catalogue';
import Profile from '../../../components/Profile';
import Setting from '../../../components/Settings';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import Banner from '../../../components/Banner';
import {FlatListSlider} from 'react-native-flatlist-slider';
import ImagePath from '../../../components/ImagePath';


const HomeScreen = () => {
   const navigation=useNavigation()
   const [profile,setProfile]=useState(true)
   const [message,setMessage]=useState(false)
   const [catalogue,setCatalogue]=useState(false)
   const [setting,setSetting]=useState(false)
   const isFetching=useSelector(state=>state.isFetching)
   const selector=useSelector(state=>state.ProfileData)
   console.log('this is selector response',selector);
   const BannerWidth = (Dimensions.get('window').width * 15) / 16;
   const BannerHeight = 140;

   const renderPage = (image, index) => {
    return (
      <View style={{width: '100%'}} key={index}>
        <Image
          style={{
            width: BannerWidth,
            height: BannerHeight,
            borderWidth: 1,
            borderRadius: 15,
          }}
          source={{uri: image}}
        />
      </View>
    );
  };
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
              {selector.Images.map((item)=>
              item.Type=='Logo'?
              <Image
              style={{height: '100%', width: 100 ,borderRadius:10}}
              resizeMode={'stretch'}
              source={{
                uri: `${ImagePath.Path}${item.ImageUrl}`,
              }}
            />:null
              )}
            
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
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20
                }}>
                <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ADD TO NETWORK</Text>
              </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', height: 0,marginTop:15}}>
          {/* <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel> */}
          {/* <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            // onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:10,marginLeft:20,marginRight:50}}
            indicatorContainerStyle={{position:'absolute', bottom: 10}}
            indicatorActiveColor={'#032e63'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={5}
            animation
            component={<Banner/>}
            separatorWidth={15}
            width={300}
            autoscroll={false}
        /> */}
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
          {/* {message==true?<Message/>:null} */}
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
const data=[
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
    {image:'',name:'RC Bafna Jewllers',city:'Mumbai',time:'17 Minutes ago'},
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
