import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-simple-toast';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../components/Loader';
import {join} from 'redux-saga/effects';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your Email')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
      'Please enter valid Email Address',
    ),
  password: yup.string().required('Please enter your Password'),
});

const Login = () => {
  const navigation = useNavigation();
  const [fetching, setFetching] = useState(false);
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);
  useEffect(() => {
    LoginAuto();
  }, []);
  const LoginAuto = async (values, setEmail) => {
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    console.log('fsfsf', email, password);
    setEmail(values.email);
  };
  const partnerLogin = async values => {
    setFetching(true);
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `https://devappapi.olocker.in/api/Partner/PartnerLogin?email=${values.email}&password=${values.password}`,
      headers: {
        MobileAppKey: 'EED26D5A-711D-49BD-8999-38D8A60329C5',
      },
    };
    axios(config)
      .then(function (response) {
        console.log('yoyoyoyo', JSON.stringify(response.data));
        //console.log('aaaaaaaa',response.data.LoginDetail.PartnerSrNo);
        if (response.data.success == true) {
          setFetching(false);
          console.log('save email @@@ password', values.email, values.password);
          console.log(
            '00000000',
            JSON.stringify(response.data.LoginDetail.BranchSrNo),
          );
          AsyncStorage.setItem(
            'Partnersrno',
            JSON.stringify(response.data.LoginDetail.PartnerSrNo),
          );
          AsyncStorage.setItem(
            'BranchNo',
            JSON.stringify(response.data.LoginDetail.BranchSrNo),
          );
          // AsyncStorage.setItem('email',JSON.stringify(values.email));
          // AsyncStorage.setItem('password',JSON.stringify(values.password))
          navigation.replace('Home');
          Toast.show('Login successful');
        }
        // response.data.LoginDetail.PartnerSrNo
        else if (response.data.success == false) {
          Toast.show(response.data.error_info.description);
          setFetching(false);
        }
      })
      .catch(function (error) {
        console.log('error', error);
        setFetching(false);
      });
  };
  const Demo = async values => {
    dispatch({
      type: 'User_Login_Request',
      url: 'PartnerLogin',
      email: values.email,
      password: values.password,
      navigation,
    });
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => Demo(values)}
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
            {isFetching ? <Loader /> : null}
            <KeyboardAwareScrollView
              extraScrollHeight={10}
              enableOnAndroid={true}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{flex: 1}}>
              <View style={styles.headerimg}>
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
                  <View style={styles.line} />
                  <View style={[styles.input, {marginTop: 20}]}>
                    <View style={{height: hp('4%'), width: wp('5%')}}>
                      <Image
                        style={{height: '100%', width: '100%', marginLeft: -2}}
                        source={require('../../../assets/msg.png')}
                      />
                    </View>
                    <View style={{width: wp('53%'), marginLeft: 1}}>
                      <TextInput
                        style={styles.input1}
                        placeholder="Enter your Email"
                        placeholderTextColor={'grey'}
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        //onChange={(e) => { handleChange(e); LoginAuto(); }}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        returnKeyType="go"
                      />
                    </View>
                  </View>
                  <View style={styles.error}>
                    {errors.email && touched.email && (
                      <Text style={styles.warn}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={[styles.input, {marginTop: 10}]}>
                    <View style={{height: hp('4%'), width: wp('5%')}}>
                      <Image
                        style={{height: '100%', width: '100%', marginLeft: -2}}
                        source={require('../../../assets/lock1.png')} // source={require('../../../assets/msg.png')}
                      />
                    </View>
                    {/* <Image
              style={styles.image}
              source={require('../../../assets/lock1.png')}
            /> */}
                    <View style={{width: wp('53%'), marginLeft: 1}}>
                      <TextInput
                        style={styles.input1}
                        placeholder="Enter your Password"
                        placeholderTextColor={'grey'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        // returnKeyType="done"
                      />
                    </View>
                  </View>
                  <View style={styles.error}>
                    {errors.password && touched.password && (
                      <Text style={styles.warn}>{errors.password}</Text>
                    )}
                  </View>
                  <View style={{paddingHorizontal: 20}}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        navigation.replace('Home')
                        // partnerLogin()
                        // handleSubmit();
                      }}>
                      <Text style={{color: '#474747'}}>Login</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{height: 40}} />
                  {/* <Image
            style={{marginTop: 10, marginBottom: -20}}
            source={require('../../../assets/oloc.png')}
          /> */}
                </View>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.bottom}>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#474747',
                        width: '45%',
                      }}>{`Don't have account? `}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('RegisterPage')}>
                      <Text
                        style={{
                          color: '#e9056b',
                          marginLeft: 3,
                          width: '100%',
                        }}>
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
