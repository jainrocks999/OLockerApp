import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';

const Settings=()=>{
    return(
        <View style={{backgroundColor:'#fff',paddingVertical:20,paddingHorizontal:15}}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                width:'100%'
                }}>
                <View style={{width:'33%'}}>
                    <Text style={{fontSize:14,width:'100%'}}>{'Import Catalogue'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View 
                    style={{
                        backgroundColor:'#ea056c',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8
                        }}>
                        <Text style={{color:'#fff'}}>{'YES'}</Text>
                    </View>
                    <View style={{
                        borderColor:'#ea056c',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        marginLeft:5,
                        borderWidth:1
                        }}>
                        <Text style={{color:'#ea056c'}}>{'NO'}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image style={{height:15,width:15}} source={require('../../assets/PartnerImage/6.png')}/>
                    <Text style={{fontSize:10,marginLeft:5,color:'green'}}>APPROVED</Text>
                </View>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:20,
                width:'33%'
                }}>
                <View style={{width:'100%'}}>
                    <Text style={{fontSize:14,width:'100%'}}>{'Remove from network'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                    <View 
                    style={{
                        borderColor:'#ea056c',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        borderWidth:1
                        }}>
                        <Text style={{color:'#ea056c'}}>{'REMOVE'}</Text>
                    </View>
                </View>                
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:20,
                width:'33%'
                }}>
                <View style={{width:'100%'}}>
                    <Text style={{fontSize:14,width:'100%'}}>{'Category'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                    <View 
                    style={{
                        borderColor:'#ea056c',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        borderWidth:1
                        }}>
                        <Text style={{color:'#ea056c'}}>{'GENERAL'}</Text>
                    </View>
                    <View 
                    style={{
                        borderColor:'#ea056c',
                        paddingHorizontal:15,
                        paddingVertical:4,
                        borderRadius:8,
                        borderWidth:1,
                        marginLeft:10
                        }}>
                        <Text style={{color:'#ea056c'}}>{'PREMIUM'}</Text>
                    </View>
                </View>                
            </View>
        </View>
    )
}
export default Settings;