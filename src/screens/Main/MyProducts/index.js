import React, {useEffect, useState} from 'react';
import {View, Text,TouchableOpacity,FlatList, ScrollView,Image,ImageBackground} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import {useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../../../components/Loader';
import ImagePath from '../../../components/ImagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
const MyProducts = ({route}) => {
    const navigation=useNavigation()
    const selector=useSelector(state=>state.Gold)
    const isFetching=useSelector(state=>state.isFetching)
    const dispatch=useDispatch()

const manageCategory=async(id)=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  console.log('1111~~~',id,srno);
  dispatch({
    type: 'Get_Category_Request',
    url: 'GetPartnerProductsByCatalogueCategory',
    PartnerSrno:srno,
    Category:id,
    navigation
  });
}

  return (
    <View style={{flex:1}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/Image/dil.png')}
        title={'My Gold '}
        // onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={()=>navigation.navigate('FavDetails')}
      />
      {isFetching?<Loader/>:null}
      <ScrollView>
      
      <View style={styles.bottomv}>
          <FlatList
           // showsHorizontalScrollIndicator={false}
            //horizontal={true}
            numColumns={3}
            data={selector}
            renderItem={({item}) => (
              <ImageBackground
              source={require('../../../assets/PartnerImage/goldIcon.png')}
                style={styles.Bimg}>
                 <Text style={styles.Bt}>{`${((item.Purity)*24/1000).toFixed(0)} K`}</Text>
                 <View style={styles.Bv}>
                   <Image style={{height:16,width:20}} source={require('../../../assets/Image/rupay.png')}/>
                 <Text style={styles.Btt}>{item.PM}</Text>
                 </View>
              </ImageBackground>
            )}
          />
        </View>
        <View style={{height:70}}/>
        </ScrollView>
    </View>
  );
};
export default MyProducts;
const data = [
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png')},
    {title: require('../../../assets/Image/myjewlery.png'),type:'add'},
];
  

  
