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
import Bottum from "../../../components/StoreButtomTab";
import Header from "../../../components/CustomHeader";
import Loader from '../../../components/Loader'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import DateTimePicker from '@react-native-community/datetimepicker';
import getDate from '../../../components/Date';
const Loyalty = () => {
 

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const selector = useSelector(state => state.LoyaltyType)
  
  const isFatching = useSelector(state => state.isFetching)
  const [name, setName] = useState('')
  const [point, setPoint] = useState("")
  const change = new Date(date2)
  let Today = change.getFullYear() + "-" + (change.getMonth() + 1) + "-" + change.getDate();
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState('Start Date')
  const [enddate, setEndDate] = useState(new Date())
  const [date3, setDate3] = useState('End Date')
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false)
  const [mode1, setMode1] = useState('date');
  const data1 = [];
  selector.planTypes?.map((item) => {
   
    const id = item.Id;
    const name = item.PlanType
    data1.push({
      label: name, value: id
    })
  

  })

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || enddate

    console.log('seleced date........endDate',selectedDate);
    console.log('seleced date........444',enddate);
  const currentDate2 = selectedDate.getDate().toString().padStart(2, "0") + "-" + (selectedDate.getMonth() + 1).toString().padStart(2, "0") + "-" + selectedDate.getFullYear();
       setShow1(false);
       setEndDate(currentDate);
        setDate3(currentDate2)
  };
  
  
  const showDatepicker1 = () => {

    showMode1('date');
   
  };
  const showMode1 = (currentMode) => {
    setShow1(true)
    if (Platform.OS === 'android') {
       setShow1(true);

       }
 setMode1(currentMode);
};
 const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date
           console.log('seleced date........start',selectedDate);
           console.log('seleced date........333',date);
            const currentDate1 = currentDate.getDate().toString().padStart(2, "0") + "-" + (currentDate.getMonth() + 1).toString().padStart(2, "0") + "-" + currentDate.getFullYear();
            setShow(false);
            setDate(currentDate);
            setDate2(currentDate1);
            
          };
  const showMode = (currentMode) => {
               setShow(true)
               if (Platform.OS === 'android') {
                setShow(true);
         
                }
           setMode(currentMode);
        };
 
  const showDatepicker = () => {
    showMode('date');
   
    };
 
  const pickerselect = async (value) => {
    setName(value)

    
    const data3 = await AsyncStorage.getItem('data4');
    let data = JSON.parse(data3)
console.log('item store Get item  in response ',data.map((item)=>{console.log('temvff',item.response.StartDate);}));

    data.map((item) => {
    
      if (value === item.Id) {
        setPoint(item.Points.toString());
        setDate2(item.start);
        setDate(new Date(item.response.StartDate))
        setDate3(item.EndDate);
        setEndDate(new Date(item.response.EndDate))
        
      }
    })
    // getDate(date)
  }
    console.log('date 2',date);
  
  // console.log('get date a   start .... ',date);
  const LoyaltyAdd = async () => {
    // let dat = date2
    // let dateStart = new Date(dat)
   
    // let StartDate = (dateStart.getMonth() + 1).toString().padStart(2, "0") + "-" + dateStart.getDate().toString().padStart(2, "0") + "-" + dateStart.getFullYear();
    
    // let dateLast = new Date(date3)
    // let LastDate = (dateLast.getMonth() + 1).toString().padStart(2, "0") + "-" + dateLast.getDate().toString().padStart(2, "0") + "-" + dateLast.getFullYear();
    const partnerSrNo = await AsyncStorage.getItem('Partnersrno');
    if (name == '') {
      Toast.show('Please Select the loyalty Type ')
    }
    else if (point == '') {
      Toast.show('please enter the number of point')
    }
    else if (date2 == 'Start Date') {
      Toast.show('please select start date')

    }
    else if (date>enddate) {
      Toast.show('The start date will always be smaller than the end date')
    }
    else {
      dispatch({
        type: 'Get_Request_AddUpdatePlanDetails',
        url: 'AddUpdatePlanDetails',
        PlanTypeId: name,
        PartnerId: partnerSrNo,
        Points: point,
        StartDate: date,
        EndDate: enddate,
        PlanName: '',
        navigation,
      });
    }
  }

  return (
    <View style={styles.container1}>
      <Header
        source={require('../../../assets/L.png')}
        source2={require('../../../assets/Image/dil.png')}
        source1={require('../../../assets/Fo.png')}
        title={'Loyalty '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}

        onPress2={() => navigation.navigate('FavDetails')}
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 15 }}>
        {isFatching ? <Loader /> : null}
        <View style={styles.card}>
          <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Image style={{ height: 70, width: 70 }} source={require('../../../assets/Image/hand.png')} />
              <Text style={{ color: '#e9056b', fontSize: 26, marginLeft: 10, fontFamily: 'Philosopher-Regular' }}>{'Loyalty\nOffers'}</Text>
              <View style={{ borderWidth: 0.5, height: 50, borderColor: '#e9056b', marginLeft: 5 }}></View>
              <Text style={{ color: '#e9056b', marginLeft: 12, fontSize: 12, fontFamily: 'Philosopher-Regular' }}>For customers</Text>
            </View>

            <View style={styles.main1}>
             
              <RNPickerSelect
                items={data1}
                onValueChange={(value) => pickerselect(value)}

                // pickerProps={citySearch}
                style={{
                  inputAndroid: { color: '#a3a3a3', width: '100%', fontSize: 14, fontFamily: 'Acephimere', marginLeft: 10 },
                  inputIOS: { color: '#a3a3a3', fontSize: 14, width: '100%', fontFamily: 'Acephimere', marginLeft: 10 },
                  placeholder: { color: '#a3a3a3', width: '100%', fontFamily: 'Acephimere', marginLeft: 10 },
                }}
                value={name}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select PlanType', value: '' }}
              />
            </View>
           
            <View style={styles.main1}>

              <TextInput
                style={{ marginLeft: 10, width: '90%', fontSize: 14, color: '#a3a3a3', fontFamily: 'Acephimere', }}
                onChangeText={(val) => setPoint(val)}
                placeholder='Numder of Points'
                placeholderTextColor='#a3a3a3'
                value={point}
                keyboardType='default'
              />

            </View>

            <View style={[styles.main1, { alignItems: 'center', justifyContent: 'center' }]}>
            

              <TouchableOpacity
                style={{ width: '70%', marginLeft: 30 }}
                onPress={() => showDatepicker()}>
                <Text style={{ marginLeft: -39, width: '100%', fontSize: 14, color: '#a3a3a3', fontFamily: 'Acephimere' }}>{`${date2}`}</Text>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                 
                  value = {date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                   display='default'
                   minimumDate={new Date()}
                   maximumDate={new Date(2300, 12, 31)}
                   dateFormat='day month year'
                // display={Platform.OS == 'android'?'calendar':'calendar'}
                />
              )}
{/* {console.log('date pickerr.......',date)} */}
            </View>
            <View style={[styles.main1, { alignItems: 'center', justifyContent: 'center' }]}>
            
              <TouchableOpacity
                style={{ width: '70%', marginLeft: 30 }}
                onPressIn={() => showDatepicker1()}>
                <Text style={{ marginLeft: -39, width: '90%', fontSize: 14, color: '#a3a3a3', fontFamily: 'Acephimere' }}>{date3}</Text>
              </TouchableOpacity>
              {show1 && (
                <DateTimePicker
                  value={enddate}
                  mode={mode1}
                  is24Hour={true}
                  onChange={onChange1}
                  display='default'
                 minimumDate={new Date()}
                 maximumDate={new Date(2300, 12, 31)}
                // display={Platform.OS === 'android'?'calendar':'calendar'}
                />
              )}
            </View>

          </View>
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => LoyaltyAdd()}
              style={styles.button}>
              <Text style={styles.textbt}>{'Save'}</Text>
            </TouchableOpacity>
            {/* <Text style={{ marginLeft: 8, marginTop: 10, fontSize: 10, color: '#707070', fontFamily: 'Acephimere' }}>DELETE OFFER</Text> */}

          </View>
          <View style={{ marginTop: 30 }} />
        </View>
      </ScrollView>
      <StatusBar />
      {/* <Bottum /> */}
    </View>
  );
};
export default Loyalty;


