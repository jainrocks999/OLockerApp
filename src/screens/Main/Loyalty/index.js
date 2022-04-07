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
import Bottum from "../../../components/StoreButtomTab";
import Header from "../../../components/CustomHeader";
const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Loyalty '}
      onPress={() => navigation.goBack()}
      />
      <ScrollView style={{ flex: 1,paddingHorizontal:10,paddingVertical:15 }}>
      <View style={styles.card}>
          <View style={styles.main}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
             <Image style={{height:70,width:70}} source={require('../../../assets/Image/hand.png')}/>
             <Text style={{color:'#e9056b',fontSize:26,marginLeft:10,fontFamily:'Philosopher-Regular'}}>{'Loyalty\nOffers'}</Text>
             <View style={{borderWidth:0.5,height:50,borderColor:'#e9056b',marginLeft:5}}></View>
             <Text style={{color:'#e9056b',marginLeft:12,fontSize:12,fontFamily:'Philosopher-Regular'}}>For customers</Text>
           </View>
      
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:14,color:'#a3a3a3',fontFamily:'Acephimere'}}
         placeholder='Enter Loyalty offer name'
         placeholderTextColor='#a3a3a3'
         />

        </View>
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:14,color:'#a3a3a3',fontFamily:'Acephimere'}}
         placeholder='Numder of Points'
         placeholderTextColor='#a3a3a3'
         />

        </View>
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:14,color:'#a3a3a3',fontFamily:'Acephimere'}}
         placeholder='Start Date'
         placeholderTextColor='#a3a3a3'
        
         />

        </View>
        <View style={styles.main1}>
         <TextInput
          style={{marginLeft:10,width:'90%',fontSize:14,color:'#a3a3a3',fontFamily:'Acephimere'}}
         placeholder='End Date'
         placeholderTextColor='#a3a3a3'
         />

        </View>
       
        </View>
        <View style={{ marginTop: 20, alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Loyalty1')}
            style={styles.button}>
            <Text style={styles.textbt}>{'Save'}</Text>
          </TouchableOpacity>
          <Text style={{marginLeft:8,marginTop:10,fontSize:10,color:'#707070',fontFamily:'Acephimere'}}>DELETE OFFER</Text>

        </View>
        <View style={{ marginTop: 30 }} />
      </View>
      </ScrollView>
      <StatusBar />
      <Bottum />
    </View>
  );
};
export default Loyalty;

