import React, { useEffect } from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        initial();
    }, []);
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