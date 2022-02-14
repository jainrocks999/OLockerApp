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
const Addproduct = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container1}>
      <Header
      source={require('../../../assets/L.png')}
      source2={require('../../../assets/La.png')}
      source1={require('../../../assets/Fo.png')}
      title={'Add Product '}
      onPress={() => navigation.goBack()}
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20, }}>
        <View style={styles.card}>

          <View style={styles.main}>
            <Text style={styles.Text1}>Select Type</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={Data}
                value={Data}
                style={{
                   inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                   inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                   placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
                }}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Product', value: 0 }}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
               {/* <RNPickerSelect
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
              /> */}
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Category</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={Data}
                style={styles.rn}
                value={Data}

                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Necklace', value: 0 }}
                Icon={() => (
                  <Image style={styles.rnimg}
                  source={require('../../../assets/F.png')}
                />
                )}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Collection</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                items={Data}
                style={styles.rn}
                value={Data}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Light jewellery', value: null }}
                Icon={() => (
                  <Image style={styles.rnimg}
                  source={require('../../../assets/F.png')}
                />
                )}
              />
            </View>

          </View>

          <View style={styles.main}>
            <Text style={styles.Text1}>Stock number</Text>
            <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter Id'
                placeholderTextColor='black'
              />
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.Text1}>Metal</Text>


            <View>
              {/* <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='blue'
                checked='hh'
                
              /> */}
            </View>
            <View>
              {/* <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='blue'
              /> */}

            </View>
            <View>
              {/* <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='blue'
            
              /> */}

            </View>
          </View>

          <View style={styles.main}>            
          <Text style={styles.Text1}>Purity</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Purity %'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Gross weight</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter weight in gm'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Net weight</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter weight in gm'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder=''
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Stone name'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Diam value'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Stone weight'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Stone value'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Price</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter ammount'
                placeholderTextColor='black'
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Status</Text>
          <View style={styles.main1}>
              <RNPickerSelect
                items={Data}
                style={styles.rn}
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

          <View style={styles.bottom}>
            <View style={styles.btview} >
               <Image style={{height:93,width:90}} source={require('../../../assets/Image/add_photo.png')}/>
            </View>
            <View style={styles.btview} >             
            <Image style={{height:93,width:90}} source={require('../../../assets/Image/add_photo.png')}/>
            </View>
            <View style={styles.btview} >             
            <Image style={{height:93,width:90}} source={require('../../../assets/Image/add_photo.png')}/>
            </View>
          </View>
          <View style={{ marginTop: 30 }} />
        </View>
        <View style={{ marginTop: 20,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Addcollection')}
            style={styles.button}>
            <Text style={styles.bttext}>{'Save'}</Text>
          </TouchableOpacity>

        </View>
        <View style={{ marginTop: 30 }} />
      </ScrollView>
      <StatusBar />
      <Buttom />
    </View>
  );
};
export default Addproduct;

const Data = [
  { label: 'category', value: '1' },
  { label: 'Yearly', value: '12' },
  { label: 'Half-Yearly', value: '6' },
  { label: 'Quarterly', value: '3' },
  { label: 'Monthly', value: '1' },
];