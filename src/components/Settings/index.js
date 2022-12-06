import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../Loader'
import {useNavigation} from '@react-navigation/native';

const Settings=()=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const selector=useSelector(state=>state.ProfileData)
    const isFetching =useSelector(state=>state.isFetching)
    console.log("profiledata console   ,,,",selector.Profile);

    const deteleApi =async(SrNo,)=>{
        
        const srno=await AsyncStorage.getItem('Partnersrno');
        const supplier= await AsyncStorage.getItem('SupplierId')
        console.log('supplier ,,,,,,,,,,',supplier);
        
          dispatch({
            url:'RemoveSupplierFromNetwork',
            type:'get_RemoveSupplierFromNetwork_Request',
             srno:SrNo,
             supplierSrNo:supplier,
             partnerSrNo:srno,
            navigation
          });
          dispatch({
            type: 'Get_Network1_Request',
            url: 'GetMyNetworkByPartnerId',
            partnerSrNo:srno,
            navigation
          });
        }
         
    return(
        <View style={{backgroundColor:'#fff',paddingVertical:20,paddingHorizontal:15}}>
            {/* {isFetching?<Loader/>:null} */}
            {/* <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                width:'100%'
                }}>
                <View style={{width:'33%'}}>
                    <Text style={{fontSize:14,width:'100%',color:'#3e3e3e',fontFamily:'Acephimere'}}>{'Import Catalogue'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View 
                    style={{
                        backgroundColor:'#e9056b',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8
                        }}>
                        <Text style={{color:'#fff',fontFamily:'Acephimere',fontSize:12}}>{'YES'}</Text>
                    </View>
                    <View style={{
                        borderColor:'#e9056b',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        marginLeft:5,
                        borderWidth:1
                        }}>
                        <Text style={{color:'#e9056b',fontFamily:'Acephimere',fontSize:12}}>{'NO'}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image style={{height:15,width:15}} source={require('../../assets/PartnerImage/6.png')}/>
                    <Text style={{fontSize:10,marginLeft:5,color:'green',fontFamily:'Acephimere'}}>APPROVED</Text>
                </View>
            </View> */}
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:0,
                width:'33%'
                }}>
                <View style={{width:'100%'}}>
                    <Text style={{fontSize:14,width:'100%',color:'#3e3e3e',fontFamily:'Acephimere'}}>{'Remove from network'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                    <TouchableOpacity 
                    onPress={()=>deteleApi(selector.Profile.SrNo,)}
                    style={{
                        borderColor:'#e9056b',
                        paddingHorizontal:20,
                        paddingVertical:6,
                        borderRadius:8,
                        borderWidth:1
                        }}>
                        <Text style={{color:'#e9056b',fontFamily:'Acephimere',fontSize:12}}>{'REMOVE'}</Text>
                    </TouchableOpacity>
                </View>                
            </View>
            {/* <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:20,
                width:'33%'
                }}>
                <View style={{width:'100%'}}>
                    <Text style={{fontSize:14,width:'100%',color:'#3e3e3e',fontFamily:'Acephimere'}}>{'Category'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                    <View 
                    style={{
                        borderColor:'#e9056b',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        borderWidth:1
                        }}>
                        <Text style={{color:'#e9056b',fontFamily:'Acephimere',fontSize:12}}>{'GENERAL'}</Text>
                    </View>
                    <View 
                    style={{
                        borderColor:'#e9056b',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        borderWidth:1,
                        marginLeft:10
                        }}>
                        <Text style={{color:'#e9056b',fontFamily:'Acephimere',fontSize:12}}>{'PREMIUM'}</Text>
                    </View>
                </View>                
            </View> */}
        </View>
    )
}
export default Settings;