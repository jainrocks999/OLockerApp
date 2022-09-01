import React, { useEffect } from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useDispatch } from 'react-redux';

const Splash = () => {
    const navigation = useNavigation()
    const dispatch=useDispatch()
    useEffect(() => {
        initial();
    }, []);

    useEffect(()=>{
        dispatch({
            type: 'Get_Graphical_Request',
            url: 'GetGraphicalNotifications',
          });
    },[] );
    const initial = async () => {
        setTimeout(() => navigation.replace("Login"), 2000);
    }
    return (
        <View style={styles.container}>
           
            <View style={styles.view}>
              
            <Image style={styles.image}
                source={require('../../../assets/ol.png')} />  
           
            </View> 
        </View>
    )
}
export default Splash;