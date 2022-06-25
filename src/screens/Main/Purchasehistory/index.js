import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../components/StatusBar';
import styles from './styles';
import BottomTab from "../../../components/StoreButtomTab";
import Header from '../../../components/CustomHeader';
import { useSelector } from 'react-redux';
const Messagebox = () => {
    const navigation = useNavigation();
    const selector1=useSelector(state=>state.PurchaseHistory)
    return (
        <View style={styles.container1}>
        <Header
            source={require('../../../assets/L.png')}
            source2={require('../../../assets/La.png')}
            source1={require('../../../assets/Fo.png')}
            title={'Purchase History '}
            onPress={() => navigation.goBack()}
            />
            <View>
                <View style={{paddingHorizontal:20,paddingVertical:6}}>
                    <Text style={{marginTop:4,color:'#565656',fontFamily:'Acephimere',}}>{`${selector1.length} items purchaged`}</Text>
                </View>
                <FlatList
          data={selector1}
          renderItem={({item}) => (
            <View style={{backgroundColor:'#fff',marginTop:10,flexDirection:'row',paddingHorizontal:15,paddingVertical:15}}>
                <View style={{width:100,height:90,borderWidth:1}}>
                  
                  <Image 
                        style={{height: '100%', width: 100 }}
                        source={{
                          uri: `https://api.myjeweller.in/images/OraImages/rss/No_Image_1.png`,
                        }}
                      >

                      </Image>
                      <View style={{width:'100%',alignItems:'flex-end',marginTop:-89}}>
                    <View style={{
                      backgroundColor:'#24a31e',
                      borderBottomLeftRadius:13,
                      paddingVertical:2,
                      paddingHorizontal:10,
                      alignItems:'center',
                      justifyContent:'center'
                    }}>
                      <Text style={{fontFamily:'Roboto-Medium',fontSize:11,color:'#fff',marginBottom:1}}>INSURED</Text>
                      
                    </View>

                  </View>
                </View>
                <View style={{width:'70%',paddingHorizontal:8}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#343434',fontFamily:'Acephimere',fontSize:12}}>{`ITEM ID   ${item.PolicyNo}`}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Image style={{width:16,height:16}} source={require('../../../assets/Image/rupay.png')}/>
                        <Text style={{color:'#343434',fontFamily:'Acephimere'}}>{item.EstValue}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:12,marginTop:5,color:'#343434',fontFamily:'Acephimere'}}>{`Purchase Date  ${item.PurchaseDate}`}</Text>
                    <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <Image style={{height:60,width:40}} source={require('../../../assets/Image/pdf.png')}/>
                    </View>
                </View>
            </View>
          )}
        />
            </View>
            <StatusBar />
            <View style={{bottom: 0, position: 'absolute', left: 0, right: 0}}>
        <BottomTab />
      </View>
        </View>
    );
};
export default Messagebox;
const data = [
    {itemId: 'KJHIUY86H', price: '32000', date: '01-01-2020'},
    {itemId: 'KJHIUY86H', price: '32000', date: '01-01-2020'},
    {itemId: 'KJHIUY86H', price: '32000', date: '01-01-2020'},
  ];
  
Data = [
    {
        label: 'ITEM ID KJHYUY86H', value: 'Purchase date 01-03-2020',

        Item: '- Last replied on 07 Sep, 2020'
    },
    {
        label: 'ITEM ID LKU839840', value: 'Purchase date 01-03-2020',
        Item: '- Last replied on 07 Sep, 2020'
    },

]