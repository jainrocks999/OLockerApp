import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import TabView from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../../../components/Loader';
import AsyncStorage from "@react-native-community/async-storage";

const MyCatalogue = () => {
  const navigation = useNavigation();
  const [status,setStatus]=useState('')
  const isFetching=useSelector(state=>state.isFetching)
  const dispatch=useDispatch()

  const manageCustomer=async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
    dispatch({
      type: 'Get_Customer_Request',
      url: 'GetCustomersByPartnerId',
      PartnerSrno:srno,
      navigation
    });
    
  }

  const manageFeedback=async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
    dispatch({
      type: 'Get_Feedback_Request',
      url: 'GetCustomerFeedbackByPartnerId',
      PartnerSrno:srno,
      navigation
    });
  }
  const Loyalty=(id)=>{
    dispatch({
      type: 'Get_Loyalty_Request',
      url: 'GetPartnerPoint',
      customerId:857246,
      navigation
    });
  }


  const data = [
    {quarter: 1, earnings: 500},
    {quarter: 2, earnings: 1000},
    {quarter: 3, earnings: 2000},
    {quarter: 4, earnings: 3000},
    {quarter: 5, earnings: 4000},
    {quarter: 6, earnings: 5000},
    {quarter: 7, earnings: 6000},
    {quarter: 8, earnings: 7000},
    {quarter: 9, earnings: ''},
    {quarter: 10, earnings: ''},
    {quarter: 11, earnings: ''},
    {quarter: 12, earnings: ''},
  ];
  return (
    <View style={{flex: 1}}>
      <Header
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'My Customers '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      {isFetching?<Loader/>:null}
      <ScrollView>
        <View
          style={{
            backgroundColor: '#032e63',
            width: '100%',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
          }}>
          <View style={{height: 140}} />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            elevation: 5,
            backgroundColor: '#fff',
            marginTop: -120,
            borderRadius: 10,
          }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20}}>
            <Text style={{fontFamily:'Philosopher-Regular',color:'#032e63',fontSize:16,marginTop:5}}>{'35705 customers '}</Text>
            <View style={{
              borderWidth: 1,
              borderRadius: 30,
              height: 40,
              width: '55%',
              marginTop: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
              borderColor: 'grey',
            }}>
            <RNPickerSelect
                items={Data}
                onValueChange={val =>setStatus(val)}
                style={ {
                  inputAndroid: { color: '#3b3a3a', width: '100%', fontSize: 12, marginBottom: -1,fontFamily:'Acephimere' },
                  inputIOS: { color: '#3b3a3a', width: '100%', fontSize: 12, marginBottom: -1,fontFamily:'Acephimere' },
                  placeholder: { color: '#3b3a3a', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
              }}
                value={status}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select Period', value: '' }}
                Icon={() => (
                  <Image style={styles.rnimg}
                  source={require('../../../assets/F.png')}
                />
                )}
              />
            </View>
          </View>
          <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              tickFormat={[
                'OCT',
                'NOV',
                'DEC',
                'JAN',
                'FEB',
                'MAR',
                'APR',
                'MAY',
                'JUN',
                'JUL',
                'AUG',
                'SEP',
              ]}
              style={{
                axis: {stroke: '#756f6a'},
                axisLabel: {fontSize: 20, padding: 30,fontFamily:'Acephimere'},
                ticks: {stroke: 'grey', size: 5},
                tickLabels: {fontSize: 8, padding: 5,fontFamily:'Acephimere'},
              }}
            />
            <VictoryAxis dependentAxis tickFormat={x => `${x}`} sty />
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </View>
        <View style={{
          backgroundColor:'#fff',
          marginTop:20,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:20,
          alignItems:'center',
          paddingVertical:10
          }}>
          <TouchableOpacity onPress={()=>manageCustomer()}
           style={{alignItems:'center'}}>
                <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/myCustomerImage.png')}/>
               </View>
               <Text style={{fontSize:13,marginTop:5,fontFamily:'Acephimere',color:'#222027'}}>{'My Customers'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>manageFeedback()}
           style={{alignItems:'center'}}>
                <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/feedbackI.png')}/>
               </View>
               <Text style={{fontSize:13,marginTop:5,fontFamily:'Acephimere',color:'#222027'}}>{'Feedback'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Loyalty()}
           style={{alignItems:'center'}}>
               <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/heart.png')}/>
               </View>
               <Text style={{fontSize:13,marginTop:5,fontFamily:'Acephimere',color:'#222027'}}>{'Loyalty'}</Text>
          </TouchableOpacity>
        </View>  

        <View style={{height:140}}/>

      </ScrollView>
      <View style={{backgroundColor:'#032e63',width:60,height:60,
          position:'absolute',bottom:80,right:15,borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image style={{height:30,width:30}} source={require('../../../assets/plus.png')}/>
        </View>
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
  {title: 'Hello', type: 'add'},
];
const Data = [
  { label: 'Today Downloads', value: 'Today Downloads' },
  { label: 'Total Downloads', value: 'Total Downloads' },
  // { label: 'Last 3 year', value: '3' },
];
const User=[
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
]
