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
const AddCategory = () => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState('');
  const [type,setType]=useState('')
  const [category,setCategory]=useState('')
  const [status,setStatus]=useState('')
  return (
    <View style={styles.container1}>
      <Header
      source={require('../../../assets/L.png')}
      source1={require('../../../assets/Fo.png')}
      source2={require('../../../assets/La.png')}
      title={'Add Category '}
      onPress={() => navigation.goBack()}
      // onPress1={}
      // onPress2={}
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}>
        <View style={styles.card}>

          <View style={styles.main}>
            <Text style={styles.Text1}>Select Type</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                onValueChange={val =>setCategory(val)}
                items={Data}
                style={{
                  inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
              }}
                value={type}  
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Category', value: ''}}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.Text1}>Category name</Text>
            <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter name'
                placeholderTextColor='black'
                value={category}
                onChangeText={(val)=>setCategory(val)}
              />

            </View>
          </View>
          <View style={[styles.main,{marginBottom:30}]}>
            <Text style={styles.Text1}>Status</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                items={Data}
                onValueChange={val =>setStatus(val)}
                style={ {
                  inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
              }}
                value={status}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Active', value: '' }}
                Icon={() => (
                  <Image style={styles.rnimg}
                  source={require('../../../assets/F.png')}
                />
                )}
              />
            </View>

          </View>
        </View>
        <View style={{ marginTop: 20,alignItems:'center'}}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Addproduct')}
            style={styles.button}>
            <Text style={styles.bttext}>{'Save'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar />
      <Buttom />
    </View>
  );
};
export default AddCategory;

const Data = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
];