import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-simple-toast";
import RNPickerSelect from 'react-native-picker-select';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../components/Loader';

const loginValidationSchema = yup.object().shape({
  companyName:yup.string().required('Please enter company name'),
  displayName:yup.string().required('Please enter display name'),
  ownerName:yup.string().required('Please enter owner name'),
  homeAddress:yup.string().required('Please enter home address'),
  email: yup.string().required('Please enter your email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Please enter valid email address'),
  password: yup.string().required('Please enter your password'),
  companygsTin:yup.string().required('Please enter company gs tin'),
  stateName:yup.string(),
  cityName:yup.string(),
  pincode:yup.string().required('Please enter pincode'),
  mobile:yup.string().required('Please enter mobile number')
});

const Login = () => {
  const navigation = useNavigation();
  const [company,setCompany]=useState('')
  const [display,setDisplay]=useState('')
  const [owner,setOwner]=useState('')
  const [address,setAddress]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [gstin,setGstin]=useState('')
  const [userstate,setUsserstate]=useState('')
  const [city,setCity]=useState('')
  const [pincode,setPincode]=useState('')
  const [mobile,setMobile]=useState('')
  const []=useState('')
  const []=useState('')

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const partnerLogin=async(values)=>{
console.log('this is values detail',values);
  const data= new FormData()
  axios({
    method: "POST",
    url:`https://api.myjeweller.in/api/Partner/RegisterPartner?partner`,
    headers: { 
      'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
      "Content-Type":'application/json'
    },
    data:JSON.stringify({
      CompanyName: values.companyName,
      DisplayName: values.displayName,
      OwnersName: values.ownerName,
      HoAddress: values.homeAddress,
      EmailAddress: values.email,
      Password:values.password, 
      CompanyGstin: values.companygsTin,
      StateId: values.stateName,
      CityId: values.cityName,  
      Pincode: values.pincode,  
      Mobile: values.mobile
    })
  })
  .then(res => {
    console.log('responcse',res.data);
    if(res.data.success==true){
      Toast.show('Registration successful')
      navigation.navigate('Login')
    }
    //console.log("res", res.data);
  })
  .catch(err => {
    console.log("error in request", err);
  }); 
}
  return (
    <Formik
    initialValues={{
      companyName:'',
      displayName:'',
      ownerName:'',
      homeAddress:'',
      email: '',
      password: '',
      companygsTin:'',
      stateName:'',
      cityName:'',
      pincode:'',
      mobile:''
    }}
    onSubmit={values => partnerLogin(values)}
    validateOnMount={true}
    validationSchema={loginValidationSchema}>
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      isValid,
      errors,
    }) => (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAwareScrollView
            extraScrollHeight={10}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flex: 1}}>

      <View
        style={{
          backgroundColor: '#052a47',
          paddingVertical: 50,
          alignItems: 'center',
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,
        }}>
        <Image
          style={{marginTop: 40}}
          source={require('../../../assets/ol.png')}
        />
      </View>
      <View style={[styles.card, {marginTop: 20}]}>
        <View style={[styles.view]}>
          <View style={styles.main}>
            <Text style={styles.text}>Register</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginHorizontal: 240,
              marginLeft: 12,
            }}
          />
          <View style={[styles.input, {marginTop: 20}]}>
           
            <TextInput 
            style={styles.input1}
            placeholder="Enter Company Name"
            onChangeText={handleChange('companyName')}
            onBlur={handleBlur('companyName')}
            value={values.companyName}
             />
          </View>
          <View style={styles.error}>
                {errors.companyName && touched.companyName && (
                  <Text style={styles.warn}>{errors.companyName}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
            
            <TextInput 
            style={styles.input1} 
            placeholder="Enter Display Name" 
            onChangeText={handleChange('displayName')}
            onBlur={handleBlur('displayName')}
            value={values.displayName}
            />
          </View>
          <View style={styles.error}>
                {errors.displayName && touched.displayName && (
                  <Text style={styles.warn}>{errors.displayName}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
           
            <TextInput 
            style={styles.input1} 
            placeholder="Enter Owner Name" 
            onChangeText={handleChange('ownerName')}
            onBlur={handleBlur('ownerName')}
            value={values.ownerName}
            />
          </View>
          <View style={styles.error}>
                {errors.ownerName && touched.ownerName && (
                  <Text style={styles.warn}>{errors.ownerName}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
          
            <TextInput 
            style={styles.input1} 
            placeholder="Enter Home Address" 
            onChangeText={handleChange('homeAddress')}
            onBlur={handleBlur('homeAddress')}
            value={values.homeAddress}
            />
          </View>
          <View style={styles.error}>
                {errors.homeAddress && touched.homeAddress && (
                  <Text style={styles.warn}>{errors.homeAddress}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
            <TextInput 
            style={styles.input1} 
            placeholder="Enter Email Address" 
            keyboardType='email-address'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            />
          </View>
          <View style={styles.error}>
                {errors.email && touched.email && (
                  <Text style={styles.warn}>{errors.email}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>

            <TextInput 
            style={styles.input1} 
            placeholder="Enter Password" 
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            />
          </View>
          <View style={styles.error}>
                {errors.password && touched.password && (
                  <Text style={styles.warn}>{errors.password}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
          
            <TextInput 
            style={styles.input1} 
            placeholder="Enter CompanyGsTin" 
            onChangeText={handleChange('companygsTin')}
            onBlur={handleBlur('companygsTin')}
            value={values.companygsTin}
            />
          </View>
          <View style={styles.error}>
                {errors.companygsTin && touched.companygsTin && (
                  <Text style={styles.warn}>{errors.companygsTin}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
             <RNPickerSelect
                onValueChange={(val)=>setUsserstate(val)}
                items={State}
                style={{
                  inputAndroid: { 
                    color: '#474747', 
                    width: '100%', 
                    fontSize: 14, 
                    marginBottom: -1,
                    fontFamily:'Acephimere' 
                  },
                  inputIOS: { 
                    color: '#474747', 
                    width: '100%', 
                    fontSize: 14, 
                    marginBottom: -1,
                    fontFamily:'Acephimere' 
                  },
                  placeholder: { color: 'grey', 
                  width: '100%', 
                  alignSelf: 'center',
                  fontFamily:'Acephimere' 
                },
              }}
                value={values.userstate}  
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select State', value: ''}}
               
              />
          </View>
          <View style={styles.error}>
                {errors.stateName && touched.stateName && (
                  <Text style={styles.warn}>{errors.stateName}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
            <RNPickerSelect
               
                items={City}
                style={{
                  inputAndroid: { 
                    color: '#474747', 
                    width: '100%', 
                    fontSize: 14, 
                    marginBottom: -1,
                    fontFamily:'Acephimere' 
                  },
                  inputIOS: { 
                    color: '#474747', 
                    width: '100%', 
                    fontSize: 14, 
                    marginBottom: -1,
                    fontFamily:'Acephimere' 
                  },
                  placeholder: { 
                    color: 'grey', 
                    width: '100%', 
                    alignSelf: 'center',
                    fontFamily:'Acephimere' 
                  },
              }}
                value={values.city} 
                onValueChange={val =>setCity(val)} 
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select City', value: ''}}
               
              />
          </View>
          <View style={styles.error}>
                {errors.cityName && touched.cityName && (
                  <Text style={styles.warn}>{errors.cityName}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
            <TextInput 
            style={styles.input1} 
            placeholder="Enter Pincode" 
            onChangeText={handleChange('pincode')}
            onBlur={handleBlur('pincode')}
            value={values.pincode}
            />
          </View>
          <View style={styles.error}>
                {errors.pincode && touched.pincode && (
                  <Text style={styles.warn}>{errors.pincode}</Text>
                  )}
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
            <TextInput 
            style={styles.input1} 
            placeholder="Enter Mobile Number" 
            onChangeText={handleChange('mobile')}
            onBlur={handleBlur('mobile')}
            value={values.mobile}
            />
          </View>
          <View style={styles.error}>
                {errors.mobile && touched.mobile && (
                  <Text style={styles.warn}>{errors.mobile}</Text>
                  )}
          </View>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
             onPress={()=> handleSubmit()}
              style={{
                backgroundColor: 'pink',
                alignItems: 'center',
                borderRadius: 45,
                justifyContent: 'center',
                marginTop: 30,
                width: '80%',
                height: 45,
              }}>
              <Text>Register New</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 40}} />
        </View>
      </View>
      </KeyboardAwareScrollView>
      </ScrollView>
      </View>
       )}
       </Formik>
  );
};
export default Login;


const City = [
  { label: 'Mumbai', value: 'Mumbai' },
  { label: 'Indore', value: 'Indore' },
  { label: 'Ahmadabad', value: 'Ahmadabad'},
];

const State = [
  { label: 'Maharastra', value: 'Maharastra' },
  { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
  { label: 'Uttar Pradesh', value: 'Uttar Pradesh'},
];
