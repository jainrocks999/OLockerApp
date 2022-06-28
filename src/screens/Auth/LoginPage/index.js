import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput,ScrollView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-simple-toast";
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../components/Loader';
import { join } from 'redux-saga/effects';

const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Please enter your Email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Please enter valid Email Address'),
  password: yup
    .string()
    .required('Please enter your Password'),
});

const Login = () => {
  const navigation = useNavigation();
  const [fetching,setFetching]=useState(false)
const partnerLogin=async(values)=>{
  setFetching(true)
  var axios = require('axios');
    var config = {
      method: 'get',
      url:`https://devappapi.olocker.in/api/Partner/PartnerLogin?email=${values.email}&password=${values.password}`,
      headers: { 
        'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
      }
    };
    axios(config)
    .then(function (response) {
      console.log('yoyoyoyo',JSON.stringify(response.data));
 //console.log('aaaaaaaa',response.data.LoginDetail.PartnerSrNo);
      if(response.data.success==true){
        setFetching(false)
        console.log("00000000");
        AsyncStorage.setItem('Partnersrno',JSON.stringify(response.data.LoginDetail.PartnerSrNo))
        navigation.replace('Home')
        Toast.show('Login successful')
      }
      // response.data.LoginDetail.PartnerSrNo
      else if(response.data.success==false){
      Toast.show(response.data.error_info.description)
      setFetching(false)
      }
    })
    .catch(function (error) {
      console.log('error',error);
      setFetching(false)
    });
}
  return (
    <Formik
      initialValues={{email: '', password: ''}}
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
        {fetching?<Loader/>:null}
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
            <Text style={styles.text}>Login</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginHorizontal:Platform.OS=='android'?270:293,
              marginLeft: 12,
            }}
          />
          <View style={[styles.input, {marginTop: 20}]}>
            <Image
              style={styles.image}
              source={require('../../../assets/msg.png')}
            />

            <TextInput 
            style={styles.input1}
            placeholder="Enter your Email"
            // value={email}
            // onChangeText={(val)=>setEmail(val)}
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
            <Image
              style={styles.image}
              source={require('../../../assets/lock1.png')}
            />

            <TextInput 
            style={styles.input1} 
            placeholder="Enter your Password" 
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            keyboardType={'number-pad'}
            secureTextEntry={true}
            />
            
          </View>
          <View style={styles.error}>
                      {errors.password && touched.password && (
                        <Text style={styles.warn}>{errors.password}</Text>
                      )}
                    </View>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'pink',
                alignItems: 'center',
                borderRadius: 45,
                justifyContent: 'center',
                marginTop: 30,
                width: '80%',
                height: 45,
              }}
              onPress={() => {
                // AsyncStorage.setItem('Partnersrno',)
               // navigation.replace('Home')    
                // partnerLogin()  
                 handleSubmit()  
              }
             
                
             
              }>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 40}} />
          {/* <Image
            style={{marginTop: 10, marginBottom: -20}}
            source={require('../../../assets/oloc.png')}
          /> */}
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingVertical: 4,
            }}>
            <Text style={{fontWeight: '700'}}>{`Don't have account? `}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('RegisterPage')}>
            <Text style={{color: '#e9056b', marginLeft: 3}}>
              {'Create Your Account'}
            </Text>
            </TouchableOpacity>
          </View>
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



