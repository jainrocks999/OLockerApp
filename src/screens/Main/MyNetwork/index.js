import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity, TextInput} from 'react-native';
import TabView from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import Carousel from 'react-native-banner-carousel';
import {useNavigation} from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import RNPickerSelect from 'react-native-picker-select';
import Banner from '../../../components/Banner';
import {FlatListSlider} from 'react-native-flatlist-slider';
import AsyncStorage from '@react-native-community/async-storage';

const MyCatalogue = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector(state=>state.isFetching)
    const SupplierList=useSelector(state=>state.SupplierList)
    const BannerWidth = (Dimensions.get('window').width * 15) / 16;
    const [city,setCity]=useState('Mumbai')
    const [metal,setMetal]=useState('Gold')
    const BannerHeight = 140;
    console.log('this is user list data from supplier side',SupplierList);
  // const images = [
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
  //   'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  //   'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  // ];

  useEffect(async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
    dispatch({
      type: 'Get_Supplier_Request',
      url: 'GetSupplierRequest',
      partnerSrNo:srno
    });
  },[])
  const manageNetwork=async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
  dispatch({
    type: 'Get_Network_Request',
    url: 'GetMyNetworkByPartnerId',
    partnerSrNo:srno,
    navigation
  });
}

const SentRequest=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  dispatch({
    type: 'Get_Sent_Request',
    url: 'GetSupplierSentRequests',
    partnerSrNo:srno,
    navigation
  });

  dispatch({
    type: 'Get_Accepted_Request',
    url: 'AcceptSupplierRequest',
  });

  dispatch({
    type: 'Get_Rejected_Request',
    url: 'RejectSupplierRequest',
  });

}

const searchJeweller=()=>{
  dispatch({
    type: 'Search_Jewellers_Request',
    url: 'RejectSupplierRequest',
  });
}

const pendingRequest=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  dispatch({
    type:'Get_Pending_Request',
    url:'GetSupplierRequest',
    partnerSrNo:srno,
    navigation
  })
}

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
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Network '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      {isFetching?<Loader/>:null}
      <ScrollView>
      <View
          style={{
            backgroundColor: '#032e63',
            // height: 150,
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius:60,
          }}>
         <View style={{alignItems: 'center', height: 200,marginTop:10}}>
          {/* <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel> */}
           <FlatListSlider
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
        />
        </View>
       
       
         <View style={{height:150}}/>
        </View>
        <View style={{marginTop:-130,paddingHorizontal:15}}>
            <Text style={{color:'#fff',fontWeight:'700',fontSize:16,fontFamily:'Philosopher-Regular'}}>Search Jeweller Partner</Text>
            <View style={{
                width:'100%',
                backgroundColor:'#fff',
                marginTop:10,
                elevation:5,
                borderRadius:10
                }}>
             <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,justifyContent:'space-between'}}>
              <View style={{paddingTop:10}}>
                  <Text style={{fontFamily:'Acephimere',fontSize:12,color:'#595959'}}>Search by name of jeweller partner</Text>
                  <TextInput 
                    style={{height:40,marginTop:-5,fontFamily:'Acephimere',fontSize:15,color:'#b3b3b3',marginRight:5,width:'100%'}}
                    placeholder='Enter Jeweller Partner Name'
                  />
              </View>
              <View style={{}}>
                   <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/1.png')}/>
              </View>
              </View> 
              <View style={{borderWidth:0.5,borderColor:'grey'}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <View style={{padding:20,justifyContent:'center',width:'42%',height:70,alignItems:'flex-start'}}>
                   <RNPickerSelect
                      items={City}
                      onValueChange={val =>setCity(val)}
                      style={ {
                        inputAndroid: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:-20 },
                        inputIOS: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={city}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: '', value: '' }}
                    />
                    <Text style={{fontSize:12,color:'#595959',fontFamily:'Acephimere',marginTop:-6}}>Select City</Text>
                   </View>
                   <View style={{borderWidth:0.5,height:70,borderColor:'grey',marginTop:10}}/>
                   <View style={{padding:20,alignItems:'flex-end',justifyContent:'center',width:'42%',height:70}}>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                   <RNPickerSelect
                      items={Metal}
                      onValueChange={val =>setMetal(val)}
                      style={ {
                        inputAndroid: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere',fontWeight:'700',height:40,marginTop:-20 },
                        inputIOS: { color: '#032e63', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                        placeholder: { color: '#032e63', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                    }}
                      value={metal}
                      useNativeAndroidPickerStyle={false}
                      placeholder={{ label: '', value: '' }}
                    />

                    {/* <Text style={{color:'#032e63',fontFamily:'Acephimere',fontWeight:'700'}}>{'Gold '}</Text> */}
                    <Text style={{fontSize:12,color:'#595959',fontFamily:'Acephimere',marginTop:-6}}>Select Metal</Text>
                    </View>
                   </View>
              </View>
            </View>
            <View style={{alignItems:'center',marginTop:-20}}>
                   <View style={{
                       height:40,
                       width:100,
                       backgroundColor:'#e9056b',
                       borderRadius:20,
                       alignItems:'center',justifyContent:'center'
                }}>
                    <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:15}}>Search</Text>
                </View>
              </View>
              <View style={{
                width:'100%',
                backgroundColor:'#fff',
                marginTop:10,
                elevation:5,
                borderRadius:10
                }}>
             <View style={{paddingHorizontal:10,paddingVertical:10}}>
                <Text style={{fontSize:18,fontFamily:'Philosopher-Regular',color:'#032e63'}}>My Network </Text>
              </View> 
              <View style={{borderWidth:0.5,borderColor:'grey'}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                   <TouchableOpacity
                   onPress={()=>manageNetwork()}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:40,width:42,tintColor:'#032e63'}} source={require('../../../assets/PartnerImage/4.png')}/>
                   </View>
                    <Text style={{fontSize:11,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>My Network</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth:0.3,height:'100%',borderColor:'grey',marginTop:0}}/>
                   <TouchableOpacity 
                    onPress={()=>pendingRequest()}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:42,width:50}} source={require('../../../assets/PartnerImage/2.png')}/>
                   </View>
                    <Text style={{fontSize:11,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>Pending Request</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth:0.3,height:'100%',borderColor:'grey',marginTop:0}}/>

                   <TouchableOpacity 
                   onPress={()=>SentRequest()}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                     <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:42,width:52}} source={require('../../../assets/PartnerImage/3.png')}/>
                     </View>
                    <Text style={{fontSize:11,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>Send Request</Text>
                   </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingVertical:10}}>
            <Text style={{fontFamily:'Acephimere',fontSize:16,color:'#383838'}}>Notifications</Text>
            <FlatList
            data={data1}
            renderItem={({item})=>(
                <View style={{elevation:5,
                backgroundColor:'#fff',
                paddingVertical:15,
                paddingHorizontal:10,
                marginTop:10,
                borderRadius:8,
                flexDirection:'row',
                justifyContent:'space-between'
                }}>
                   <View>
                       <Text style={{fontSize:16,color:'#000',fontFamily:'Acephimere'}}>{item.name}</Text>
                       <Text style={{color:'#000',fontFamily:'Acephimere',fontSize:13}}>{item.city}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                       <TouchableOpacity style={{
                       }}>
                           <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/6.png')}/>
                       </TouchableOpacity>
                       <TouchableOpacity style={{
                          marginLeft:10
                       }}>
                           <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/5.png')}/>
                       </TouchableOpacity>
                   </View>
                </View>
            )}
            />
            </View>
        </View>
       
        <View style={{height:70}}/>

      </ScrollView>
      <View style={{bottom: 0, position: 'absolute', left: 0, right: 0}}>
        <TabView />
      </View>
    </View>
  );
};
export default MyCatalogue;
const data = [
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello',type:'add'}
];
const data1=[
    {name:'Milind Jeweller',city:'Mumbai'},
    {name:'Milind Jeweller',city:'Mumbai'},
    {name:'Milind Jeweller',city:'Mumbai'}
]

const City=[
  {label:'Mumbai',value:'Mumbai'},
  {label:'Indore',value:'Indore'},
  {label:'Bangalore',value:'Bangalore'}
]
const Metal=[
  {label:'Gold',value:'Gold'},
  {label:'Platinum',value:'Platinum'},
  {label:'Silver',value:'Silver'}
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