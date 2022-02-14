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
const Addcollection = () => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <View style={styles.container1}>
      <Header
        source={require('../../../assets/L.png')}
        source2={require('../../../assets/La.png')}
        source1={require('../../../assets/Fo.png')}
        title={'Add Collections '}
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
                placeholderTextColor='black'
              />

            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Status</Text>
          <View style={styles.main1}>

              <RNPickerSelect
                items={Data}
                style={{
                  inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
                }}
                value={Data}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Active', value: null }}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>

          </View>
           <View style={[styles.card1,{marginTop:20}]}>
             <View style={styles.bottom}>
             <TouchableOpacity>
               <Image style={{height:103,width:100}} source={require('../../../assets/Image/add_photo.png')}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Image style={{height:103,width:100,marginLeft:30}} source={require('../../../assets/Image/select_tmp.png')}/>
             </TouchableOpacity>
             </View>

           </View>
           <View style={{alignItems:'center',marginBottom:30,marginTop:-10}}>
           <Text style={{fontSize:13,color:'grey',}}>Upload banner in 0000(H) * 0000(W) Dimention</Text>
           </View>
        </View>
        <View style={{ marginTop: 20,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Mycustomer')}
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

Data = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
]