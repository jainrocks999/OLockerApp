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
const Messagebox = () => {
    const navigation = useNavigation();
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
            <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{backgroundColor:'#fff',marginTop:10,flexDirection:'row',paddingHorizontal:15,paddingVertical:15}}>
                <View style={{width:'30%',height:90,borderWidth:1}}>

                </View>
                <View style={{width:'70%',paddingHorizontal:8}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#000'}}>{`ITEM ID   ${item.itemId}`}</Text>
                        <Text style={{color:'#000'}}>{item.price}</Text>
                    </View>
                    <Text style={{fontSize:12,marginTop:5}}>{`Purchase Date  ${item.date}`}</Text>
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