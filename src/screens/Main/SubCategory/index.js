import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Keyboard, ScrollView,Image,Share} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from "../../../components/Preview";
import Banner from '../../../components/Banner';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
const SubCategory = ({route}) => {
    const navigation=useNavigation()

    const selector=useSelector(state=>state.Detail.GetProductModel)
    console.log('1111120',selector);
    const data=[]
    selector.productimages.map((item)=>{
      const url= `${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`
data.push({
  image:url,desc:'abcsd'
})   
   console.log('1vv22',`${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`);

    })
   selector.metaldetails.map((item)=>{
     const metal1=item.MetalPurity
      console.log('1111vvv12dd0',item.MetalPurity);

    })
    const [collection,setCollection]=useState('')
    const [stockNo,setStock]=useState('')
    const [metal,setMetal]=useState('')
    const[gm,setGm]=useState('')
    const[demo ,setDemo]=useState('')
   const [price,setPrice]=useState('')
   const[mg,setMg]=useState('')
   const[metalPurity,setMetalPurity]=useState('')
   const [description,setDescription]=useState('')
    const [editable,setEditable]=useState(false)
    const [editable1,setEditable1]=useState(false)
    const [editable2,setEditable2]=useState(false)
    const[url,setUrl] =useState('')
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    useEffect( ()=>{
      setDescription(selector.description);
      setStock(selector.name);
      setPrice(selector.price);
      setCollection(selector.productsku);
      selector.metaldetails.map((item)=>{
        setMetal(item.MetalWt);
        setGm(item.UnitMetalWt);
        setMg(item.MetalType);
        setMetalPurity(item.MetalPurity);
       
      })
      setDemo(`${mg} ${metalPurity} - ${metal} ${gm}`);

      selector.productimages.map((item) => {
        setUrl(`${ImagePath.Path}/${item.ImageLocation.replace(/\\/g, "/") }/${item.ImageName}`)
        
        console.log('1vv223366', url);

      })
     },[demo])
     
     console.log('xxx157',demo);

     const share=async()=>{
       await Share.share({
         message:`Product Name : ${stockNo} \nImage Url : ${url}`
       })
     }
  const Detail=async()=>{
    const srno=await AsyncStorage.getItem('Partnersrno')
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://devappapi.olocker.in/api/Partner/GetProductDetail',
  headers: { 
    'Content-Type': 'application/json', 
    'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
  },
  params:{
    ProductId:927,
    PartnerId:srno
  }
};

axios(config)
.then(function (response) {
  console.log('Asad',JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  }

  const manageEdit=()=>{
      setEditable(true)
      setEditable1(true)
      setEditable2(true)
     // Detail();
  }
  return (
    <View style={{flex: 1,backgroundColor:'#032e63'}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={stockNo}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 5,
            flex:1
          }}>
          <View>
            <Image style={{width:21,height:18}} tintColor={'#fff'} source={require('../../../assets/Image/dil.png')}/>
          </View>
          <View>
              <TouchableOpacity onPress={()=>share()}
              // {()=>navigation.navigate('Filter')}
              >
              <Image style={{width:24,height:18,marginTop:10}} tintColor={'white'} source={require('../../../assets/Image/share1.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:10}}>
       {/* { selector.productimages.map((item)=>{
      console.log('1vvvv',item.ImageName);
    */}
         <FlatListSlider
            data={data}
            height={200}
            timer={5000}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:30}}
            indicatorContainerStyle={{position:'absolute', bottom: -20}}
            indicatorActiveColor={'#ffffff'}
            indicatorInActiveColor={'grey'}
            indicatorActiveWidth={5}
            component={<Preview/>}
            separatorWidth={15}
            width={310}
            autoscroll={false}
            loop={false}
        />
      {/* })} */}
      </View>
      
        <View style={{alignItems:'center',marginTop:20,flexDirection:'row',justifyContent:'center'}}>
        <Image style={{tintColor:'#fff',width:22,height:22,marginTop:12}} source={require('../../../assets/Image/rupay.png')}/>
        <Text style={{color:'#fff',fontFamily:'Acephimere',marginLeft:2,marginTop:12,fontSize:20,fontWeight:'700'}}>{price}</Text>
        <Text style={{color:'#fff',fontFamily:'Acephimere',marginLeft:6,marginTop:16,fontSize:14,fontWeight:'600'}}>( Approximate Price )</Text>
        </View>
        <View style={{padding:20}}>
          <View style={{
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingVertical: 20,
        width:'100%',
        paddingHorizontal:10
        }}>
          <View style={{
            //alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            width:'100%'
            }}>
<View style={{alignItems:'center',width:'80%'}}>
        <Text style={{fontSize:15,color:'#052a47',fontFamily:'Acephimere',marginLeft:25,fontWeight:'700'}}>{description=={description}?{description}:'PRODUCT DESCRIPTION'}</Text>
        </View>
        <TouchableOpacity onPress={()=>manageEdit()} style={{alignItems:'flex-end'}}>
        <Image style={{width:20,height:20}} source={require('../../../assets/Image/edit.png')}/>
        </TouchableOpacity>
        </View>
        <View style={{marginLeft:20,marginTop:8}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
             <Text style={{color:'#052a47',marginTop:0,fontFamily:'Acephimere',fontSize:15,fontWeight:'700'}}>{'Name       :      '}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={stockNo}
             editable={editable1}
            onChangeText={(val)=>setStock(val)}
             />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-15}}>
             <Text style={{color:'#052a47',marginTop:0,fontFamily:'Acephimere',fontSize:15,fontWeight:'700'}}>{'Stock No :      '}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={collection}
            editable={editable}
             onChangeText={(val)=>setCollection(val)}
            
             />
          </View>
         
           
        
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-15}}>
             <Text style={{color:'#052a47',marginTop:0,fontFamily:'Acephimere',fontSize:15,fontWeight:'700'}}>{'Metal        :     '}</Text>
             {/* {selector.metaldetails.map((item)=> */}
            {/* <Text style={{marginTop:10,color:'#052a47'}}>{item.MetalPurity}</Text>  */}
               <TextInput
               style={{height:40,color:'#052a47'}}
               value={demo}
              editable={editable2}
              onChangeText={(val)=>setDemo(val)}
              /> 
             {/* )} */}
          </View>
        </View>
          </View>
          {/* <View style={{
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20,
            flexDirection:'row',
            }}>
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20,
                width:'48%',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ADD TO CATALOGUE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20,
                width:'48%',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ENQURE NOW</Text>
              </TouchableOpacity>
          </View> */}


      </View>
      <View style={{height:100}}/>
      </ScrollView>
      <View style={{bottom: 0, left: 0, right: 0, position: 'absolute'}}>
        {/* <TabView /> */}
      </View>
    </View>
  );
};
export default SubCategory;

const images = [
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 {
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
 ]