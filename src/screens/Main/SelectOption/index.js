import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import BottomTab from '../../../components/StoreButtomTab';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import { useIsFocused } from '@react-navigation/native';
const SelectOption = () => {
   const navigation=useNavigation()
   const [type,setType]=useState()
   const isFocused = useIsFocused();

    useEffect((val) => {
        if(isFocused){ 
          manageOption()
         setType('')
        }
    }, [isFocused]);


const manageOption=(val)=>{
   setType(val)
  if(val=='Product'){
    console.log('product ..',(val));
     navigation.navigate('Addproduct',{
      type:val
    })

  }
  else if(val=='Category'){
   
      navigation.navigate('Addcategory',{
        type:val
      })
  }
  else if(val=='Collections'){
    console.log('Category.............',(val));
      navigation.navigate('Addcollection',{
        type:val
      })
  }
}
useEffect(()=>{
  console.log('no value change ........');
})
  return (
    <View style={styles.container1}>
     <Header
      source1={require('../../../assets/Fo.png')}
      source={require('../../../assets/L.png')}
       source2={require('../../../assets/Image/dil.png')}
      title={'Select option to add '}
      onPress={() => navigation.goBack()}
      onPress2={()=>navigation.navigate('FavDetails')}
      />  
      <View style={styles.main2}>
          <View style={[styles.main,{alignItems:'center'}]}>
            <Text style={styles.Text1}>Select Type</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                onValueChange={val =>manageOption(val)}
                items={Data}
                style={{
                  inputAndroid: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                  inputIOS: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                  placeholder: { color: '#474747', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
              }}
                value={type}  
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select Type', value:''}}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>
          </View>
      </View>   
      <View style={styles.outcard}>
        <Text style={styles.outcardtext}>SELECT OPTION TO ADD FROM DROPDOWN</Text>
      </View>
       {/* <View style={{bottom:0,position:'absolute',left:0,right:0}}>
      <BottomTab/>
      </View> */}
      <StatusBar/>
    </View>
  );
};
export default SelectOption;

const Data = [
    { label: 'Product', value: 'Product' },
    // { label: 'Category', value: 'Category' },
    { label: 'Collections', value: 'Collections'}
  ];
