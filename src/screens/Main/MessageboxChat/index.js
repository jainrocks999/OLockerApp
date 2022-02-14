import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
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
      title={'Message Box '}
      onPress={() => navigation.goBack()}
      />
            
            <StatusBar />
            <View style={{bottom:0,left:0,right:0,position:'absolute'}}>
               <BottomTab/>
            </View>
        </View>
    );
};
export default Messagebox;

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