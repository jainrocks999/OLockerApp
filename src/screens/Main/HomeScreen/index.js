import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/CustomHeader';
import styles from './styles';

const HomeScreen = () => {
  const navigation=useNavigation()
  const BannerWidth = (Dimensions.get('window').width * 15) / 16;
  const BannerHeight = 180;
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
      <ScrollView style={{flex: 1,backgroundColor:'#f0eeef'}}>
        <ImageBackground style={{
            height: 260,
            width: '100%',
          }}
           source={require('../../../assets/Image/1.png')}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end',justifyContent:'flex-end'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Message')}>
            <Image style={styles.img1} source={require('../../../assets/Fo.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Image style={styles.img2} source={require('../../../assets/La.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 10}}>
            <Text style={{color: '#c8eaff'}}>Welcome to MyJeweller</Text>
            <Text style={{color: '#fafef8', fontSize: 24}}>
              {'Onestop solution\nfor you'}
            </Text>
          </View>
        </ImageBackground>
        <View style={{alignItems: 'center', height: BannerHeight,marginTop:-115}}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {images.map((image, index) => renderPage(image, index))}
          </Carousel>
        </View>
        <View style={{marginTop:10, paddingHorizontal: 12}}>
          <View style={{paddingHorizontal: 8,flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:102,height:22,tintColor:'#032e63'}} source={require('../../../assets/Image/myjewlery.png')}/>
            <Text style={{marginLeft:7,marginTop:5,color:'#032e63',fontSize:17,fontWeight:'800'}}>Network</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
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
                  margin: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 120,
                }}>
                <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingVertical: 10,
            }}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('MyCatalogue')}
            style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                  <Image style={{height:100,width:100}} source={require('../../../assets/Image/services.png')}/>
                </View>
              <Text style={{fontWeight: '700', fontSize: 16, marginTop: 6}}>
                {'Catalogue '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Customers')}
            style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                  <Image style={{height:100,width:100}} source={require('../../../assets/Image/custmer.png')}/>
                </View>
              <Text style={{fontWeight: '700', fontSize: 16, marginTop: 6}}>
                {'Customers '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>navigation.navigate('MyNetwork')}
             style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                <Image style={{height:100,width:100}} source={require('../../../assets/Image/partner.png')}/>
                </View>
              <Text style={{fontWeight: '700', fontSize: 16, marginTop: 6}}>
                {'My Network '}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop:10
            }}>
               <View style={{paddingHorizontal: 0,flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:35,height:30,}} source={require('../../../assets/Image/gold.png')}/>
            <Text style={{marginLeft:7,marginTop:5,color:'#032e63',fontSize:17,fontWeight:'800'}}>Gold Price </Text>
          </View>
            {/* <Text style={{fontWeight: '700', fontSize: 16}}>
              {'Gold Price '}
            </Text> */}
            <TouchableOpacity
              style={{
                paddingVertical: 4,
                paddingHorizontal: 14,
                backgroundColor: '#032e63',
                borderRadius: 12,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>MORE</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={{marginBottom: 30, paddingHorizontal: 12}}>
          
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
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
                  margin: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 160,
                }}>
                 <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <TabView/>
    </View>
  );
};
export default HomeScreen;
const data = [
  {title: 'Hello'},
  {title: 'Hello'},
  {title: 'Hello'},
  {title: 'Hello'},
  {title: 'Hello'},
  {title: 'Hello'},
  {title: 'Hello'},
  {title: 'Hello'},
];
const data1 = [
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
  {source: require('../../../assets/Image/gold.png')},
];