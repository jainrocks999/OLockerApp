import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

const partnerLogin=async()=>{
if(email==''){
  console.log('Please enter ');
}
else if(password==''){

}
else{

  var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://api.myjeweller.in/api/Partner/PartnerLogin?email=info@attoinfotech.com&password=Atto%23303',
      headers: { 
        'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
      }
    };
    axios(config)
    .then(function (response) {
      console.log('yoyoyoyo',JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log('error',error);
    });
  // let res=await fetch("http://api.myjeweller.in/api/Partner/PartnerLogin", {
  //     "method": "POST",
  //     "headers": {
  //       'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
  //        Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //        email: 'info@attoinfotech.com',
  //        password: 'Atto#303',
  //    })
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log("user response",response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  
//  let res=await fetch('http://api.myjeweller.in/api/Partner/PartnerLogin', {
//     method: 'POST',
//     headers: {
//     'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//     "email": 'info@attoinfotech.com',
//     "password": 123,
//     }),
//     });
//   axios.get('https://api.myjeweller.in/api/Partner/PartnerLogin', {params:{
//     email: 'info@attoinfotech.com',
//     password: 'Atto#303',
// }
//  },
//   { 'headers': { 
//     'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
//    } 
//   })
// await axios({
//   method: 'GET',
//   url: 'https://api.myjeweller.in/api/Partner/PartnerLogin',
//   headers: {
//     'MobileAppKey':'EED26D5A-711D-49BD-8999-38D8A60329C5',
//     'Content-Type': 'application/json',
//       'Accept': 'application/json',
      
//   },
//   data: {
//       "email" : 'info@attoinfotech.com',
//       "password":'Atto#303',
//   }
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

}

}
  return (
    <View style={styles.container}>
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
              marginHorizontal: 270,
              marginLeft: 12,
            }}
          />
          <View style={[styles.input, {marginTop: 20}]}>
            <Image
              style={styles.image}
              source={require('../../../assets/phone.png')}
            />

            <TextInput 
            style={styles.input1}
            placeholder="Enter your Email"
            value={email}
            onChangeText={(val)=>setEmail(val)}
             />
          </View>
          <View style={[styles.input, {marginTop: 10}]}>
            <Image
              style={styles.image}
              source={require('../../../assets/phone.png')}
            />

            <TextInput 
            style={styles.input1} 
            placeholder="Enter your Password" 
            value={password}
            onChangeText={(val)=>setPassword(val)}
            />
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
              onPress={() => partnerLogin()
              // navigation.navigate('Home')
              }>
              <Text>GENERATE OTP</Text>
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
            <Text style={{color: '#e9056b', marginLeft: 3}}>
              {'Create Your Account'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Login;



