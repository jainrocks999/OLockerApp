import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity, TextInput} from 'react-native';
import TabView from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import Carousel from 'react-native-banner-carousel';
import {useNavigation} from '@react-navigation/native';

const MyCatalogue = () => {
    const navigation=useNavigation()
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
  return (
    <View style={{flex: 1,backgroundColor:'#f0eeef'}}>
      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Network '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
      <View
          style={{
            backgroundColor: '#032e63',
            // height: 150,
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius:60
          }}>
         <View style={{alignItems: 'center', height: BannerHeight}}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel>
        </View>
       
       
         <View style={{height:150}}/>
        </View>
        <View style={{marginTop:-130,paddingHorizontal:15}}>
            <Text style={{color:'#fff',fontWeight:'700'}}>Search Jeweller Partner</Text>
            <View style={{
                width:'100%',
                // height:200,
                backgroundColor:'#fff',
                marginTop:10,
                elevation:5,
                borderRadius:10
                }}>
             <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,justifyContent:'space-between'}}>
              <View style={{paddingTop:10}}>
                  <Text>Search by name of jeweller partner</Text>
                  <TextInput 
                    style={{height:40,marginTop:-5}}
                    placeholder='Enter Jeweller Partner Name'
                  />
              </View>
              <View style={{}}>
                   <Image style={{height:40,width:40}} source={require('../../../assets/PartnerImage/1.png')}/>
              </View>
              </View> 
              <View style={{borderWidth:0.5,borderColor:'grey'}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <View style={{padding:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'black',fontWeight:'700'}}>{'Mumbai '}</Text>
                    <Text style={{fontSize:12}}>Select City</Text>
                   </View>
                   <View style={{borderWidth:0.5,height:'90%',borderColor:'grey',marginTop:10}}/>
                   <View style={{padding:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'black',fontWeight:'700'}}>{'Gold '}</Text>
                    <Text style={{fontSize:12}}>Select Metal</Text>
                   </View>
              </View>
            </View>
            <View style={{alignItems:'center',marginTop:-20}}>
                   <View style={{
                       height:40,
                       width:100,
                       backgroundColor:'red',
                       borderRadius:20,
                       alignItems:'center',justifyContent:'center'
                }}>
                    <Text style={{color:'#fff'}}>Search</Text>
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
                <Text style={{fontSize:16,fontWeight:'700'}}>My Network </Text>
              </View> 
              <View style={{borderWidth:0.5,borderColor:'grey'}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                   <TouchableOpacity
                   onPress={()=>navigation.navigate('MyNetworks')}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                   <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:40,width:42}} source={require('../../../assets/PartnerImage/4.png')}/>
                   </View>
                    <Text style={{fontSize:11,marginTop:5}}>My Network</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth:0.3,height:'100%',borderColor:'grey',marginTop:0}}/>
                   <TouchableOpacity 
                    onPress={()=>navigation.navigate('PendingRequest')}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:42,width:50}} source={require('../../../assets/PartnerImage/2.png')}/>
                   </View>
                    <Text style={{fontSize:11,marginTop:5}}>Pending Request</Text>
                   </TouchableOpacity>
                   <View style={{borderWidth:0.3,height:'100%',borderColor:'grey',marginTop:0}}/>

                   <TouchableOpacity 
                   onPress={()=>navigation.navigate('SentRequest')}
                   style={{padding:10,alignItems:'center',justifyContent:'center',width:'33%'}}>
                     <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:42,width:52}} source={require('../../../assets/PartnerImage/3.png')}/>
                     </View>
                    <Text style={{fontSize:11,marginTop:5}}>Send Request</Text>
                   </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingVertical:10}}>
            <Text style={{fontWeight:'700',fontSize:16}}>Notifications</Text>
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
                       <Text style={{fontSize:18,color:'#000',fontWeight:'600'}}>{item.name}</Text>
                       <Text style={{color:'#000'}}>{item.city}</Text>
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

  