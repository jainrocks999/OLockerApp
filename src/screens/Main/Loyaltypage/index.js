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
      <ScrollView style={{ flex: 1,paddingHorizontal:10 }}>
      <View style={styles.card}>
         <View style={styles.main}> 
           <Text style={styles.textbt}>Download</Text>
           <Text style={styles.textbt}>100 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:10}}>
         <Text style={styles.textB}>11 Sep 2021 </Text>
         <Text style={styles.textC}>Start Date</Text>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:20}}/>
         <View style={{marginTop:10}}>
         <Text style={styles.textB}>10 Oct 2021 </Text>
         <Text style={styles.textC}>End Date</Text>
         </View>   

         </View>
       
      </View>
      <View style={styles.card}>
         <View style={styles.main}> 
           <Text style={styles.textbt}>Referral</Text>
           <Text style={styles.textbt}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}> 
         <Text style={styles.textB}>11 Sep 2021 </Text>
         <Text style={styles.textC}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:20}}/>
         <View style={{marginTop:10}}> 
         <Text style={styles.textB}>10 Oct 2021 </Text>
         <Text style={styles.textC}>End Date</Text>
         {/* <View style={{marginTop:10}}></View> */}
         </View>   

         </View>
       
      </View>
      <View style={styles.card}>
         <View style={styles.main2}> 
         <View style={{flexDirection:'row',alignItems:'center'}}>
           <Text style={styles.textbt}>First purchase</Text>
           <Text style={{color:'#fff',fontSize:10,marginLeft:10}}>Expired</Text>
           </View>
           <Text style={styles.textbt}>150 Points</Text>
         </View>
         <View style={styles.main1}>
          <View style={{marginTop:10}}>
         <Text style={styles.textB}>11 Sep 2021 </Text>
         <Text style={styles.textC}>Start Date</Text>
         <View style={{marginTop:10}}></View>
         </View>   
         <View style={{borderWidth:0.5,borderColor:'grey',paddingVertical:20}}/>
         <View style={{marginTop:10}}>
         <Text style={styles.textB}>10 Oct 2021 </Text>
         <Text style={styles.textC}>End Date</Text>
         {/* <View style={{marginTop:10}}></View> */}
         </View>   

         </View>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:90,paddingHorizontal:10}}>
     {/* <View style={{backgroundColor:'#052a47',borderRadius:35,height:70,width:70,justifyContent:'center',alignItems:'center'}}>
       
        <Text style={{fontSize:40,color:'white',marginBottom:10,fontWeight:'300'}}
        onPress={()=>navigation.navigate('Purchase')}
        >{'+'}</Text>
     
     </View> */}
      </View>
      </ScrollView>
      <View style={{backgroundColor:'#032e63',width:60,height:60,
          position:'absolute',bottom:80,right:15,borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text style={{color:'#fff',fontSize:30,fontWeight:'500'}}>+</Text>
        </View>
      <StatusBar />
      <View style={{position:'absolute',left:0,right:0,bottom:0}}>
      <BottomTab/>
      </View>
    </View>
  );
};
export default Loyalty;

