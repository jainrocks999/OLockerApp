import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Buttom from "../../../components/StoreButtomTab";
import Header from '../../../components/CustomHeader';
import DocumentPicker from 'react-native-document-picker';
import { useDispatch,useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-community/async-storage";

const Addcollection = () => {
  const navigation = useNavigation();
  const [status,setStatus]=useState('')
  const [collection,setCollection]=useState('')
  const [photo,setPhoto]=useState('')
  const dispatch=useDispatch()

  const uploadPhoto = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      setPhoto(res[0].uri);
      // setPhotoType(res[0].type);
      // setPhotoName(res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

const Addcollection=async()=>{
  console.log('DataCollectioon');
  const srno= await AsyncStorage.getItem('Partnersrno')
  if(collection==''){
    Toast.show('Please enter name')
  }
  else if(status==''){
    Toast.show('Please select status')
  }
  else{
    dispatch({
      type: 'Add_Collection_Request',
      url: 'AddCollection',
      PartnerSrno:srno,
     Tagline: "Test",
Description: "Test",
IsActive: true,
BranchSrNo: 883,
CollectionId: "",
Name: "",
CollectionImage: "",
navigation
    });
  }
        
}
console.log('this is photo data form render',photo);
  return (
    <View style={styles.container1}>
      <Header
        source={require('../../../assets/L.png')}
        source2={require('../../../assets/La.png')}
        source1={require('../../../assets/Fo.png')}
        title={'Add Collection '}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}>
        <View style={styles.card}>
          <View style={styles.main}>
            <Text style={styles.Text1}>Collection</Text>
            <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter name'
                placeholderTextColor='#474747'
                value={collection}
                onChangeText={(val)=>setCollection(val)}
              />

            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Status</Text>
          <View style={styles.main1}>

              <RNPickerSelect
                items={Status}
                style={{
                  inputAndroid: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                  inputIOS: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                  placeholder: { color: '#474747', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                }}
                value={status}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select', value: '' }}
                onValueChange={(val)=>setStatus(val)}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>

          </View>

          <View style={styles.main}>            
          <Text style={styles.Text1}>Banner</Text>

          </View>
           <View style={[styles.card1,{marginTop:20}]}>
             <View style={styles.bottom}>
             <TouchableOpacity onPress={()=>uploadPhoto()}>
               {photo?<Image
                style={{height:103,width:100,borderRadius:10}}
                source={{uri:photo}}
               />
               :<Image 
               style={{height:103,width:100}} 
               source={require('../../../assets/Image/add_photo.png')}/>}
             </TouchableOpacity>
             <TouchableOpacity>
             <Image style={{height:103,width:100,marginLeft:30}} source={require('../../../assets/Image/select_tmp.png')}/>
             </TouchableOpacity>
             </View>

           </View>
           <View style={{alignItems:'center',marginBottom:30,marginTop:-10}}>
           <Text style={{fontSize:13,color:'#757575',fontFamily:'Acephimere'}}>Upload banner in 0000(H) * 0000(W) Dimention</Text>
           </View>
        </View>
        <View style={{ marginTop: 20,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
            onPress={() => Addcollection()}
            style={styles.button}>
            <Text style={styles.textbt}>{'Save'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar />
      <Buttom />
    </View>
  );
};
export default Addcollection;

const Status = [
  { label: 'Active', value: '1' },
  { label: 'In Active', value: '2' },
]