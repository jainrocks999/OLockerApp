import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView,Dimensions,Image, TouchableOpacity} from 'react-native';
import TabView from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import Carousel from 'react-native-banner-carousel';
import {useNavigation} from '@react-navigation/native';

const MyCatalogue = () => {
    const navigation=useNavigation()
    const BannerWidth = (Dimensions.get('window').width * 8) / 9;
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
    <View style={{flex: 1}}>
      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Catalogue '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
      <View
          style={{
            backgroundColor: '#032e63',
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius:60,
          }}>
         <View style={{alignItems: 'center', height: BannerHeight,marginTop:5}}>
          <Carousel
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel>
        </View>
        <View style={{flexDirection:'row',marginTop:40,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('MyProducts')}>
            <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#fff',borderWidth:1}}>
              <Image style={{height:100,width:100}} source={require('../../../assets/Image/my.png')}/>
            </View>
             <Text style={{color:'#fff',marginTop:10}}>{'My PRODUCTS'}</Text>
            </TouchableOpacity>
            <View style={{marginLeft:40}}>
            <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#fff',borderWidth:1}}>
            <Image style={{height:100,width:95}} source={require('../../../assets/Image/neck.png')}/>
            </View>
              <Text style={{color:'#fff',marginTop:10}}>{'MY COLLECTIONS'}</Text>
            </View>
            
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('SelectOption')}
                style={{backgroundColor:'red',paddingHorizontal:25,paddingVertical:7,borderRadius:25}}>
                    <Text style={{color:'#fff'}}>{'+ ADD'}</Text>
                </TouchableOpacity>
            </View>
         <View style={{height:180}}/>
        </View>
        <View style={{marginTop: -160, paddingHorizontal: 0}}>
          <View style={{paddingHorizontal: 12}}>
            <Text style={{fontSize: 18,color:'#fff'}}>MyJeweller Network</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            style={{marginTop:10}}
            renderItem={({item}) => (
              <View
              style={{
                shadowColor: 'grey',
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: {height: 1, width: 0},
                elevation: 3,
                borderRadius: 6,
                width: 120,
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
                height: 160,
                backgroundColor:'#fff'
              }}>
                <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,marginTop:20}}>
             <TouchableOpacity style={{
                 backgroundColor:'#032e63',
                 width:'46%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8
                 }}>
                 <Text style={{color:'#fff'}}>My Products</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{
                 backgroundColor:'#032e63',
                 width:'46%',
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:20,
                 paddingVertical:8
                 }}>
                 <Text style={{color:'#fff'}}>Partner Catagories</Text>
             </TouchableOpacity>
        </View>
        <View style={{marginTop:10}}>
            <FlatList
            data={data}
            numColumns={3}
            renderItem={({item})=>(
                <View
              style={{
                width: '33.3%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 160,
                backgroundColor:'#fff',
                borderWidth:0.3
              }}>
                  {item.type=='add'?
                  <TouchableOpacity onPress={()=>navigation.navigate('Addcategory')}
                  style={{alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:50,height:50,backgroundColor:'grey',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:25}}>+</Text>
                  </View>
                  <Text style={{fontSize:12}}>More</Text>
                  </TouchableOpacity>:
                <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
                  }
              </View>
            )}
            />

        </View>
        <View style={{backgroundColor:'#fff'}}>
          <View style={{alignItems:'center',paddingVertical:20}}>
             <Text style={{fontSize:16}}>My Collections</Text>
          </View>
           <View style={{width:'100%',height:180,borderTopWidth:1}}>

           </View>
           <View style={{width:'100%',height:180,borderTopWidth:1}}>

           </View>
           <View style={{width:'100%',height:180,borderWidth:1}}>

           </View>
        </View>
        <View style={{height:80}}/>

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
  