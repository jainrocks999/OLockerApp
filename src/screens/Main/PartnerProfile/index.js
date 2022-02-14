import React,{useState} from 'react';
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
import Carousel from 'react-native-banner-carousel';
import Stars from 'react-native-stars';
import styles from './styles';
import Catalogue from '../../../components/Catalogue';
import Profile from '../../../components/Profile';
import Setting from '../../../components/Settings';
const HomeScreen = () => {
   const navigation=useNavigation()
   const [profile,setProfile]=useState(true)
   const [message,setMessage]=useState(false)
   const [catalogue,setCatalogue]=useState(false)
   const [setting,setSetting]=useState(false)

   const BannerWidth = (Dimensions.get('window').width * 15) / 16;
   const BannerHeight = 140;
   const images = [
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
     'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
     'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
   ];

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
      <ScrollView>
        <View style={{
          backgroundColor:'#032e63'
        }}>
          <View style={{flexDirection:'row',padding:15,width:'100%'}}>
            <View style={{backgroundColor:'#fff',height:100,width:'30%',borderRadius:10}}>
 
            </View>
            <View style={{marginLeft:10,width:'60%',marginTop:-4}}>
              <Text style={{color:'#fff',fontSize:19,fontWeight:'700'}}>{'RC Bafna Jewellery '}</Text>
              <Text style={{color:'#fff',fontSize:12}}>{'Mumbai'}</Text>
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
                     <View style={{alignItems:'center',justifyContent:'center'}}>
                       <Image style={{width:35,height:35}} source={require('../../../assets/PartnerImage/16.png')}/>
                     </View>
                     <View style={{alignItems:'center',justifyContent:'center',marginLeft:10}}>
                     <Image style={{width:35,height:35}} source={require('../../../assets/PartnerImage/15.png')}/>
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
                <Text style={{color:'#fff',fontSize:12}}>ADD TO NETWORK</Text>
              </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', height: BannerHeight,marginTop:15}}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel>
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
               <Text style={{marginTop:3}}>Pofile</Text>
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
               <Text style={{marginTop:3}}>Message</Text>
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
               <Text style={{marginTop:3}}>Catalogue</Text>
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
               <Text style={{marginTop:3}}>Settings</Text>
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
