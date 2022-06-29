import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import BottomTab from "../../../components/StoreButtomTab";
import Header from '../../../components/CustomHeader';
import { useSelector } from 'react-redux';
const Loyalty = () => {
  const navigation = useNavigation();
  const selector=useSelector(state=>state.Loyalty)
  console.log('selector12data',selector);

  return (
    <View style={styles.container1}>
      <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Loyalty '}
      onPress={() => navigation.goBack()}
      />
      <ScrollView style={{ flex: 1,paddingHorizontal:10 }}>
        {selector.length>0?<FlatList
        data={selector[0].PointsEarnedSummary}
        renderItem={({item})=>(
          <View style={[styles.card,{marginBottom:5}]}>
         <View style={styles.main}> 
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>{item.CreditType}</Text>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>{`${item.Points} Points`}</Text>
         </View>
         <View style={styles.main1}>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:10}}>
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>{`${item.DateAdded}`}</Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>Start Date</Text>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:10}}/>
         <View style={{marginTop:10}}>
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>{item.PointExpiryDate}</Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>End Date</Text>
         </View>   
         </View>
      </View>
        )}
        />:null}
      
      {/* <View style={styles.card}>
         <View style={styles.main}> 
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>Referral</Text>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}> 
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>11 Sep 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:10}}/>
         <View style={{marginTop:10}}> 
         <Text style={[styles.textB,{color:'#032e63',fontFamily:'Roboto-Medium'}]}>10 Oct 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>End Date</Text>
         </View>   

         </View>
       
      </View> */}
      {/* <View style={styles.card}>
         <View style={styles.main2}> 
         <View style={{flexDirection:'row',alignItems:'center'}}>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>First purchase</Text>
           <Text style={{color:'#fff',fontSize:10,marginLeft:10}}>Expired</Text>
           </View>
           <Text style={[styles.textbt,{fontFamily:'Philosopher-Regular',fontSize:20}]}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}>
         <Text style={[styles.textB,{fontFamily:'Roboto-Medium',color:'#79797a'}]}>11 Sep 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:10}}/>
         <View style={{marginTop:10}}>
         <Text style={[styles.textB,{fontFamily:'Roboto-Medium',color:'#79797a'}]}>10 Oct 2021 </Text>
         <Text style={[styles.textC,{fontFamily:'Roboto-Medium',color:'#595959'}]}>End Date</Text>
         </View>   
         </View>
         </View> */}
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:90,paddingHorizontal:10}}>
      </View>
      </ScrollView>
      <View style={{backgroundColor:'#032e63',width:60,height:60,
          position:'absolute',bottom:80,right:15,borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image style={{height:30,width:30}} source={require('../../../assets/plus.png')}/>
        </View>
      <StatusBar />
      <View style={{position:'absolute',left:0,right:0,bottom:0}}>
      <BottomTab/>
      </View>
    </View>
  );
};
export default Loyalty;

