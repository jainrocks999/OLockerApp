import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Keyboard, ScrollView,Image} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from "../../../components/Preview";
import Banner from '../../../components/Banner';
import { TextInput } from 'react-native-gesture-handler';

const SubCategory = ({route}) => {
    const navigation=useNavigation()
    const [collection,setCollection]=useState('Kangan')
    const [stockNo,setStock]=useState('373800-UQYB18')
    const [metal,setMetal]=useState('Gold 999 - 50.00 gms')
    const [editable,setEditable]=useState(false)
    const [editable1,setEditable1]=useState(false)
    const [editable2,setEditable2]=useState(false)
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);


  const manageEdit=()=>{
      setEditable(true)
      setEditable1(true)
      setEditable2(true)
  }
  return (
    <View style={{flex: 1,backgroundColor:'#032e63'}}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/La.png')}
        title={'Necklace'}
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
              <TouchableOpacity onPress={()=>navigation.navigate('Filter')}>
              <Image style={{width:24,height:18,marginTop:10}} tintColor={'white'} source={require('../../../assets/Image/share1.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:10}}>
        {/* <FlatListSlider
          data={images}
          width={205}
          timer={5000}
          component={<Banner />}
          onPress={item => alert(JSON.stringify(item))}
          indicatorActiveWidth={40}
          contentContainerStyle={{paddingHorizontal: 16}}
          animation
          indicator={false}
          autoscroll={false}
        /> */}
         {/* <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:10,marginLeft:20,marginRight:100}}
            indicatorContainerStyle={{position:'absolute', bottom: 10}}
            indicatorActiveColor={'#032e63'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={5}
            animation
            component={<Preview/>}
            separatorWidth={15}
            width={200}
            autoscroll={false}
        /> */}
         <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            // onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{marginVertical:0,paddingHorizontal:50}}
            indicatorContainerStyle={{position:'absolute', bottom: -20}}
            indicatorActiveColor={'#032e63'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={5}
            // animation
            component={<Preview/>}
            separatorWidth={15}
            width={310}
            autoscroll={false}
            loop={false}
        />
      </View>
      
        <View style={{alignItems:'center',marginTop:20,flexDirection:'row',justifyContent:'center'}}>
        <Image style={{tintColor:'#fff',width:16,height:16,marginTop:8}} source={require('../../../assets/Image/rupay.png')}/>
        <Text style={{color:'#fff',fontFamily:'Acephimere',marginLeft:2,marginTop:12}}>{'5,25,000.00 (Approximate price)'}</Text>
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
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            width:'100%'
            }}>
        <Text style={{fontSize:15,color:'#052a47',fontFamily:'Acephimere',marginLeft:20}}>PRODUCT DESCRIPTION</Text>
        <TouchableOpacity onPress={()=>manageEdit()} style={{alignItems:'flex-end'}}>
        <Image style={{width:20,height:20}} source={require('../../../assets/Image/edit.png')}/>
        </TouchableOpacity>
        </View>
        <View style={{marginLeft:20,marginTop:8}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
             <Text style={{color:'#052a47',marginTop:0,fontFamily:'Acephimere',fontSize:13}}>{'Collection :'}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={collection}
             editable={editable}
             onChangeText={(val)=>setCollection(val)}
            
             />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-15}}>
             <Text style={{color:'#052a47',marginTop:0,fontFamily:'Acephimere',fontSize:13}}>{'Stock No :'}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={stockNo}
             editable={editable1}
             onChangeText={(val)=>setStock(val)}
             />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-15}}>
             <Text style={{color:'#052a47',marginTop:0,fontFamily:'Acephimere',fontSize:13}}>{'Metal :'}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={metal}
             editable={editable2}
             onChangeText={(val)=>setMetal(val)}
             />
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
        <TabView />
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