import React, {useEffect, useState} from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import Bottum from "../../../components/StoreButtomTab";
import Header from '../../../components/CustomHeader';
import Stars from "react-native-stars";

const ExpandableComponent = ({item, onClickFunction}) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const navigation=useNavigation()
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{paddingHorizontal:10}}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={{}}>
        <View style={[styles.card,{marginTop:10}]}>
        <View style={{
          flexDirection:'row',
          paddingHorizontal:17,
          alignItems:'center',
          marginTop:10,
          justifyContent:'space-between'
          }}>
            <View style={{
              flexDirection:'row',
              alignItems:'center',
            }}>
         <Text style={{fontSize:15,color:'#032e63'}}>{item.name}</Text>
          <View 
          style={{
            backgroundColor:'#da9401',
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            marginLeft:10,
            paddingVertical:2,paddingHorizontal:17
            }}>
              <Text style={{color:'#fff',fontSize:10}}>GOLD</Text>
          </View>
          </View>
          <View>
          <Stars
                    display={3}
                    spacing={3}
                    count={5}
                    starSize={15}
                    fullStar= {require('../../../assets/Image/star.png')}
                    emptyStar= {require('../../../assets/Image/star1.png')}/>

          </View>
          </View>
          <View style={{
            flexDirection:'row',
            alignContent:'center',
            justifyContent:'space-between',
            marginTop:5,
            paddingHorizontal:17
            }}>
          <Text>{item.mobile}</Text>
          {/* <Text>{item.date}</Text> */}
              </View>
          <View style={{
            flexDirection:'row',
            alignContent:'center',
            justifyContent:'space-between',
            paddingHorizontal:17,
            width:'100%'
            }}>
              <View style={{width:'30%'}}></View>
             {layoutHeight==0? <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:12}}>EXPAND</Text>
                <Image style={{height:12,width:14,marginLeft:5}} source={require('../../../assets/F.png')}/>
              </View>:<View/>}
              <Text style={{fontSize:12}}>{item.date}</Text>
          </View>
          <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {item.subcategory.map((item, key) => (
          <View>
           <View style={{ borderWidth:1, marginTop:15, borderColor:'#DDDDDD',}}/>
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:7}}>
           <Text>How was our Jewellery collection</Text>
          <Text style={{color:'#032e63',fontSize:12}}>Excellent</Text>

           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:4}}>
           <Text>Staff behavior</Text>
          <Text style={{color:'#032e63',fontSize:12}}>Well Behaved</Text>

           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:4}}>
           <Text>Showroom ambience</Text>
          <Text style={{color:'#032e63',fontSize:12}}>Proper Jewellery displyed</Text>

           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:4}}>
           <Text>Will vou refer us</Text>
          <Text style={{color:'#032e63',fontSize:12}}>Yes</Text>

           </View>
          <View style={{ marginTop: 20, marginHorizontal: 10, }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Messagebox')}
            style={styles.button}>
            <Text style={styles.textbt}>{'Reply'}</Text>
          </TouchableOpacity>
        </View>
        </View>
         
        ))}
      </View>
       </View>
       
      </TouchableOpacity>
      
    </View>
  );
};

const App = () => {
  const navigation=useNavigation()
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded'] =
             !array[placeindex]['isExpanded'])
          : (array[placeindex]['isExpanded'] = false),
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Header
       source={require('../../../assets/L.png')}
       source2={require('../../../assets/La.png')}
       source1={require('../../../assets/Fo.png')}
       title={'Feedback '}
       onPress={() => navigation.goBack()}
       />
        <ScrollView>
        <View style={styles.main}>
            <View style={[styles.main1,{borderColor:'#032e63'}]}>
            <Text style={[styles.Text1,{color:'#032e63'}]}>Pending Reply</Text>
            </View>      
        <View style={[styles.main1,{marginLeft:10}]}>
          <Text style={styles.Text1}>Replied</Text>
            </View>

          </View>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
          <View style={{marginBottom:70}}/>
        </ScrollView>
      </View>
      <View style={{bottom:0,left:0,right:0,position:'absolute'}}>
     <Bottum />
     </View>
    </SafeAreaView>
  );
};

export default App;

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    name: 'Milind Shethia',
    mobile:'+918765467834',
    date:'23 Sep 2021',
    subcategory: [
      {id: 1, val: 'Sub Cat 1'},
    ],
  },
  {
    isExpanded: false,
    name: 'Milind Shethia',
    mobile:'+918765467834',
    date:'23 Sep 2021',
    subcategory: [
      {id: 4, val: 'Sub Cat 4'},
    ],
  },
  {
    isExpanded: false,
    name: 'Milind Shethia',
    mobile:'+918765467834',
    date:'23 Sep 2021',
    subcategory: [
      {id: 7, val: 'Sub Cat 7'},
    ],
  },
  
];