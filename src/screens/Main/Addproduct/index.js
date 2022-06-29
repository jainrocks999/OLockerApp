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
import { CheckBox } from 'react-native-elements';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import { useDispatch,useSelector } from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
const Addproduct = () => {
  const dispatch=useDispatch()
  const navigation = useNavigation();
  const [type,setType]=useState('')
  const [category,setCategory]=useState('')
  const [collection,setCollection]=useState('')
  const [stock_number,setStock_number]=useState('')
  const [metal,setMetal]=useState('')
  const [purity,setPurity]=useState('')
  const [grossWeight,setGrossWeight]=useState('')
  const [netWeight,setNetWeight]=useState('')
  const [stone,setStone]=useState('')
  const [diam,setDiam]=useState('')
  const [stoneWeight,setStoneWeight]=useState('')
  const [sValue,setSValue]=useState('')
  const [price,setPrice]=useState('')
  const [status,setStatus]=useState()

  const [gold,setGold]=useState(false)
  const [silver,setSilver]=useState(false)
  const [platinum,setPlatinum]=useState(false)

  const [gm,setGm]=useState(false)
  const [percentage,setPercentage]=useState(false)

  const [diamond,setDiamond]=useState(false)
  const [otherStone,setOtherStone]=useState(false)
  const [photo, setPhoto] = useState('')
  const uploadPhoto = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      setPhoto(res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
const addProduct=async()=>{
  const srno=await AsyncStorage.getItem('Partnersrno')
  if(type==''){
    Toast.show('Please select type')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(collection==''){
    Toast.show('Please select collection')
  }
  else if(stock_number==''){
    Toast.show('Please enter stock number')
  }
  // else if(metal==''){
  //   Toast.show('Please select metal type')
  // }
  else if(purity==''){
    Toast.show('Please enter purity')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else if(category==''){
    Toast.show('Please select category')
  }
  else{
    dispatch({
      type: 'Add_Product_Request',
      url:'AddProduct',
      //url: 'AddCollection',
      PartnerSrno:srno,
      productsrno:0,
      suppliersrno:482,
      name:"test",
      product_type: "test",
      grosswt: "999",
     hallmarked: "",
     try_before_buy: true,
     price: "20000",
     productsku: "",
     description: "this is working",
     width: 0,
     unitofwidth: 0,
     height: 0,
unitofheight: 0,
length: 0,
unitoflength: 0,
breadth: 0,
unitofbreadth: 0,
size: 0,
unitofsize: 0,
certified: "true",
cert_by: 0,
mrpbasis: 0,
charges: 0,
wastage_percent: 0,
gender: "",
product_status: "good",
estimate_delivery_days: 0,
metaldetails: [
  {
  wt: "",
  unitofwt: "",
  type: "",
  purity: "",
  hallmarked: ""
  }
  ],
  decorativedetails: [
    {
    name: "",
    wt: "",
    unitofwt: "",
    charges: ""
    }
    ],
    stonedetails: [
    {
    name: "",
    wt: "",
    unitofwt: "",
    charges: ""
    }
    ],
    diamonddetails: [
    {
    name: "",
    wt: "",
    unitofwt: "",
    diamond_shape: "",
    diamond_quality: "",
    charges: ""
    }
    ],
    productimages: [
    {
    name: "",
    Base64: ""
    }
    ],
    collection_ids: [
    {
    id: ""
    }
    ],
    subcategory_ids: [
      {
      id: ""
      }
      ]
    });
  }
  
}

const manageGold=()=>{
  setGold(true)
  setSilver(false)
  setPlatinum(false)
}
const manageSilver=()=>{
  setSilver(true)
  setGold(false)
  setPlatinum(false)
}
const managePlatinum=()=>{
  setPlatinum(true)
  setGold(false)
  setSilver(false)
}
const manageGm=()=>{
  setGm(true)
  setPercentage(false)
}
const managePercentage=()=>{
  setPercentage(true)
  setGm(false)
}
const manageDiamond=()=>{
  setDiamond(true)
  setOtherStone(false)
}
const manageOtherStone=()=>{
  setOtherStone(true)
  setDiamond(false)
}


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
      <KeyboardAwareScrollView
            extraScrollHeight={10}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flex: 1}}>

        <View style={styles.card}>

          <View style={styles.main}>
            <Text style={styles.Text1}>Select Type</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                onValueChange={(value) => setType(value)}
                items={dataType}
                value={type}
                style={{
                   inputAndroid: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                   inputIOS: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
                   placeholder: { color: '#474747', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
                }}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Type', value: '' }}
                Icon={() => (
                  <Image style={styles.rnimg}
                    source={require('../../../assets/F.png')}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Category</Text>
            <View style={styles.main1}>
              <RNPickerSelect
                onValueChange={(value) => setCategory(value)}
                items={dataCategory}
                style={styles.rn}
                value={category}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select', value: '' }}
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
                items={dataCollection}
                style={styles.rn}
                value={collection}
                onValueChange={(val)=>setCollection(val)}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select', value: '' }}
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
                placeholderTextColor='#474747'
                value={stock_number}
                onChangeText={(val)=>setStock_number(val)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Metal</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='#032e63'  
                checked={gold} 
                onPress={()=>manageGold()}             
              />
              <Text style={{marginLeft:-15,fontSize:13,fontFamily:'Acephimere'}}>Gold</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:-15}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='#032e63'   
                checked={silver}  
                onPress={()=>manageSilver()}           
              />
              <Text style={{marginLeft:-15,fontSize:13,fontFamily:'Acephimere'}}>Silver</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:-15}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='#032e63'    
                checked={platinum}   
                onPress={()=>managePlatinum()}         
              />
              <Text style={{marginLeft:-15,fontSize:13,fontFamily:'Acephimere'}}>Platinum</Text>
            </View>
          </View>

          <View style={styles.main}>            
          <Text style={styles.Text1}>Purity</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Purity %'
                placeholderTextColor='#474747'
                value={purity}
                onChangeText={(val)=>setPurity(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Gross weight</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter weight in gm'
                placeholderTextColor='#474747'
                value={grossWeight}
                onChangeText={(val)=>setGrossWeight(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Net weight</Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter weight in gm'
                placeholderTextColor='#474747'
                value={netWeight}
                onChangeText={(val)=>setNetWeight(val)}
              />
            </View>
          </View>
          <View style={[styles.main]}>
            <Text style={styles.Text1}>Making</Text>
            <View style={{flexDirection:'row',width:'64%'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='#032e63'   
                checked={gm}  
                onPress={()=>manageGm()}           
              
              />
              <Text style={{marginLeft:-17,fontSize:12,fontFamily:'Acephimere'}}>Per gm</Text>
            </View> 
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:-15}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                // checkedColor='blue'  
                checkedColor='#032e63'   
                checked={percentage}  
                onPress={()=>managePercentage()}           
                            
              />
              <Text style={{marginLeft:-17,fontSize:12,fontFamily:'Acephimere'}}>{`Percentage %`}</Text>
            </View>
            </View>
          </View>
          <View style={[styles.main,{marginTop:-7}]}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder=''
                placeholderTextColor='#474747'

              />
            </View>
          </View>
          <View style={[styles.main]}>
            <Text style={styles.Text1}>Inclusion</Text>
            <View style={{flexDirection:'row',width:'64%'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='#032e63'   
                checked={diamond}  
                onPress={()=>manageDiamond()}           
                          
              />
              <Text style={{marginLeft:-17,fontSize:12,fontFamily:'Acephimere'}}>Diamond</Text>
            </View> 
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:-15}}>
              <CheckBox
                center
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor='#032e63'   
                checked={otherStone}  
                onPress={()=>manageOtherStone()}           
                            />
              <Text style={{marginLeft:-17,fontSize:12,fontFamily:'Acephimere'}}>{`Other Stone`}</Text>
            </View>
            </View>
          </View>
          <View style={[styles.main,{marginTop:-7}]}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Stone name'
                placeholderTextColor='#474747'
                value={stone}
                onChangeText={(val)=>setStone(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Diam value'
                placeholderTextColor='#474747'
                value={diam}
                onChangeText={(val)=>setDiam(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Stone weight'
                placeholderTextColor='#474747'
                value={stoneWeight}
                onChangeText={(val)=>setStoneWeight(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}></Text>
          <View style={styles.main1}>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Stone value'
                placeholderTextColor='#474747'
                value={sValue}
                onChangeText={(val)=>setSValue(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Price</Text>
          <View style={[styles.main1,{alignItems:'center',flexDirection:'row'}]}>
          <Image style={{width:16,height:20,marginBottom:3}} source={require('../../../assets/Image/rupay.png')}/>
              <TextInput
                style={{ width: '90%', marginLeft: 0 }}
                placeholder='Enter amount'
                placeholderTextColor='#474747'
                value={price}
                onChangeText={(val)=>setPrice(val)}
              />
            </View>
          </View>
          <View style={styles.main}>            
          <Text style={styles.Text1}>Status</Text>
          <View style={styles.main1}>
              <RNPickerSelect
                items={dataStatus}
                style={styles.rn}
                value={status}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Select', value: '' }}
                Icon={() => (
                  <Image style={styles.rnimg}
                  source={require('../../../assets/F.png')}
                />
                )}
                onValueChange={(val)=>setStatus(val)}
              />
            </View>

          </View>
          <View style={styles.main}>
          <Text style={styles.Text1}>Product photo</Text>
          </View>
          <View style={[styles.bottom]}>
              <TouchableOpacity onPress={() => uploadPhoto()}>
                {photo ? <Image
                  style={{ height: 93, width: 90, borderRadius: 10 }}
                  source={{ uri: photo }}
                />
                  : <Image
                    style={{ height: 93, width: 90 }}
                    source={require('../../../assets/Image/add_photo.png')} />}
              </TouchableOpacity>
            {/* <View style={styles.btview} >
               <Image style={{height:93,width:90}} source={require('../../../assets/Image/add_photo.png')}/>
            </View> */}
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
            onPress={() => 
              addProduct()
              //navigation.navigate('Addcollection')
            }
            style={styles.button}>
            <Text style={styles.bttext}>{'Save'}</Text>
          </TouchableOpacity>

        </View>
        <View style={{ marginTop: 30 }} />
        </KeyboardAwareScrollView>
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

const dataType = [
  { label: 'Gold', value: '1' },
  { label: 'Silver', value: '12' },
  { label: 'Platinum', value: '6' },
];

const dataCategory =[
  { label: 'Necklace', value: '1' },
  { label: 'Jewellery', value: '12' },
  { label: 'Diamond', value: '6' },
]

const dataCollection =[
  { label: 'Necklace', value: '1' },
  { label: 'Jewellery', value: '12' },
  { label: 'Diamond', value: '6' },
]

const dataStatus =[
  { label: 'Active', value: '1' },
  { label: 'In Active', value: '12' },
]