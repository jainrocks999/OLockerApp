import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Buttom from '../../../components/StoreButtomTab';
import Header from '../../../components/CustomHeader';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../components/Loader';
const Addcollection = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState('');
  const [collection, setCollection] = useState('');
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);

  const uploadPhoto = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      console.log('resspone res', res);
      let dec = decodeURIComponent(res[0].name);
      console.log('dec', dec);
      setPhoto(res[0].uri);
      // setPhotoType(res[0].type);
      // setPhoto(res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const Addcollection = async () => {
    const srno = await AsyncStorage.getItem('Partnersrno');
    const BNo = await AsyncStorage.getItem('BranchNo');
    console.log('DataCollectioon', srno, BNo);
    if (collection == '') {
      Toast.show('Please enter name');
    } else if (status == '') {
      Toast.show('Please select status');
    } else {
      dispatch({
        type: 'Add_Collection_Request',
        url: 'AddCollection',
        PartnerSrno: srno,
        Tagline: '',
        Description: '',
        IsActive: status,
        BranchSrNo: BNo,
        CollectionId: '',
        Name: collection,
        CollectionImage: photo,
        navigation,
      });
    }
  };
  console.log('this is photo data form render', photo);
  return (
    <View style={styles.container1}>
      <Header
        source={require('../../../assets/L.png')}
        source2={require('../../../assets/Image/dil.png')}
        source1={require('../../../assets/Fo.png')}
        title={'Add Collection '}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={() => navigation.navigate('FavDetails')}
      />
      <ScrollView style={styles.scroll}>
        {isFetching ? <Loader /> : null}
        <View style={styles.card}>
          <View style={styles.main}>
            <Text style={styles.Text1}>Collection</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                placeholderTextColor="#474747"
                value={collection}
                onChangeText={val => setCollection(val)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Status</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                items={Status}
                style={{
                  inputAndroid: {
                    color: '#474747',
                    width: '100%',
                    fontSize: 14,
                    marginBottom: -1,
                    fontFamily: 'Acephimere',
                  },
                  inputIOS: {
                    color: '#474747',
                    width: '100%',
                    fontSize: 14,
                    marginBottom: -1,
                    fontFamily: 'Acephimere',
                  },
                  placeholder: {
                    color: '#474747',
                    width: '100%',
                    alignSelf: 'center',
                    fontFamily: 'Acephimere',
                  },
                }}
                value={status}
                useNativeAndroidPickerStyle={false}
                placeholder={{label: 'Select', value: ''}}
                onValueChange={val => setStatus(val)}
                Icon={() => (
                  <Image
                    style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.Text1}>Banner</Text>
          </View>
          <View style={[styles.card1, {marginTop: 20}]}>
            <View style={styles.bottom}>
              <TouchableOpacity onPress={() => uploadPhoto()}>
                {console.log('photo upload', photo)}
                {photo ? (
                  <Image
                    style={[styles.img1, {borderRadius: 10}]}
                    source={{uri: photo}}
                  />
                ) : (
                  <Image
                    style={styles.img1}
                    source={require('../../../assets/Image/add_photo.png')}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={[styles.img1, {marginLeft: 0}]}
                  source={require('../../../assets/Image/select_tmp.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottom1}>
            <Text style={styles.bottom1t}>
              Upload banner in 0000(H) * 0000(W) Dimention
            </Text>
          </View>
        </View>
        <View style={styles.bottom2}>
          <TouchableOpacity
            onPress={() => Addcollection()}
            style={styles.button}>
            <Text style={styles.textbt}>{'Save'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar />
      {/* <Buttom /> */}
    </View>
  );
};
export default Addcollection;

const Status = [
  {label: 'Active', value: 'true'},
  {label: 'In Active', value: 'false'},
];
