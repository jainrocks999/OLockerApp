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

const MyCatalogue = () => {
  const navigation = useNavigation();
  const [status,setStatus]=useState('')

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
            // height: 200,
            marginTop: -120,
            borderRadius: 10,
          }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20}}>
            <Text style={{fontWeight:'700'}}>{'35705 customers '}</Text>
            <View style={{
              borderWidth: 1,
              borderRadius: 30,
              height: 40,
              width: '50%',
              marginTop: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
              borderColor: 'grey',
            }}>
            <RNPickerSelect
                items={Data}
                onValueChange={val =>setStatus(val)}
                style={ {
                  inputAndroid: { color: 'black', width: '100%', fontSize: 12, marginBottom: -1, },
                  inputIOS: { color: 'black', width: '100%', fontSize: 12, marginBottom: -1, },
                  placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
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
                axisLabel: {fontSize: 20, padding: 30},
                ticks: {stroke: 'grey', size: 5},
                tickLabels: {fontSize: 8, padding: 5},
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
          <TouchableOpacity onPress={()=>navigation.navigate('Mycustomer')}
           style={{alignItems:'center'}}>
                <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/myCustomerImage.png')}/>
               </View>
               <Text style={{fontSize:12,marginTop:5}}>{'My Customers'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Feedback')}
           style={{alignItems:'center'}}>
                <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/feedbackI.png')}/>
               </View>
               <Text style={{fontSize:12,marginTop:5}}>{'Feedback'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Loyalty')}
           style={{alignItems:'center'}}>
               <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/heart.png')}/>
               </View>
               <Text style={{fontSize:12,marginTop:5}}>{'Loyalty'}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{alignItems:'center'}}>
          <View style={{}}>
                 <Image style={{height:60,width:60,}} source={require('../../../assets/Image/leaderI.png')}/>
               </View>
               <Text style={{fontSize:12,marginTop:5}}>{'Letherboard'}</Text>
          </TouchableOpacity> */}
        </View>
        {/* <View style={styles.blog}>
            <Image style={styles.img1}
              source={require('../../../assets/search1.png')}
            />
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Search by Name or Phone Number"
              placeholderTextColor='grey'
              style={{color: 'grey', width: '100%'}}
              returnKeyType="done"
            />
          </View> */}
          {/* <View style={{paddingHorizontal:15}}>
            <Text>Recent downloads</Text>
          </View> */}
          {/* <View>
            <FlatList 
            data={User}
            renderItem={({item})=>(
              <View style={{
                backgroundColor:'#fff',
                marginTop:10,
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
                alignItems:'center',
                paddingVertical:10
              }}>
                <View style={{height:40,borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Image
                style={{width:40,height:40,borderRadius:20}}
                source={item.image}/>
                <Text style={{marginLeft:20}}>{item.title}</Text>
                </View>
                <View>
                  <Text>{item.mobile}</Text>
                </View>
              </View>
            )}
            />
          </View> */}
         

        <View style={{height:140}}/>

      </ScrollView>
      <View style={{backgroundColor:'#032e63',width:60,height:60,
          position:'absolute',bottom:80,right:15,borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text style={{color:'#fff',fontSize:30,fontWeight:'500'}}>+</Text>
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
  { label: 'Last 1 year', value: '1' },
  { label: 'Last 2 year', value: '2' },
  { label: 'Last 3 year', value: '3' },
];
const User=[
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
  {image:require('../../../assets/user.jpeg'),title:'Milind Shethiya',mobile:'+918765457324'},
]
