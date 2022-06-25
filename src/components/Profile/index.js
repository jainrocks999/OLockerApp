import React from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';
import { useSelector } from 'react-redux';
import ImagePath from '../ImagePath';

const Profile=()=>{
    const selector=useSelector(state=>state.ProfileData)
    console.log('thisi sele response data from render',selector);
    return(
       <View style={{flex:1,backgroundColor:'#fff',paddingVertical:20}}>
           <View style={{paddingHorizontal:20,alignItems:'flex-start'}}>
               <TouchableOpacity 
               style={{
                   backgroundColor:'#032e63',
                   paddingHorizontal:20,
                   paddingVertical:6,
                   borderRadius:20,
                   width:115,
                   alignItems:'center',justifyContent:'center'
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>About us</Text>
               </TouchableOpacity>
               <Text style={{fontSize:16,textAlign:'left',marginTop:20,color:'#535353',fontFamily:'Acephimere'}}>
               {selector.Profile.SupplierIntroduction}
               </Text>
               <TouchableOpacity 
               style={{
                backgroundColor:'#032e63',
                paddingHorizontal:20,
                paddingVertical:6,
                borderRadius:20,
                width:115,
                alignItems:'center',justifyContent:'center',
                marginTop:15
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>Founder</Text>
               </TouchableOpacity>
               <View style={{flexDirection:'row'}}>
              {selector.Images.map((item)=>
                  item.Type=='Owner Image'?
                   <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'35%',
                    paddingVertical:20
                    }}>
                    <View style={{width:'90%',alignItems:'center'}}>
                        <View style={{height:100,width:'100%',borderWidth:1}}>
                        <Image 
                        style={{height:97,width:'100%'}}
                        resizeMode={'stretch'}
                        source={{
                          uri: `${ImagePath.Path}${item.ImageUrl}`,
                        }}
                        />
                        </View>
                        <Text style={{marginTop:5,color:'#032e63',fontFamily:'Acephimere',fontSize:13}}>{item.OwnerName}</Text>
                    </View> 
                </View>:null
                )}
                </View>
              
              
              {selector.Profile.Address?
              <View>
               <TouchableOpacity 
               style={{
                backgroundColor:'#032e63',
                paddingHorizontal:20,
                paddingVertical:6,
                borderRadius:20,
                width:120,
                alignItems:'center',justifyContent:'center',
                   marginTop:15
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>Showrooms</Text>
               </TouchableOpacity>
              <View style={{paddingHorizontal:20,marginTop:20}}>
                   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:35,width:25}} source={require('../../assets/Image/loc.png')}/>
                     <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>
                       {selector.Profile.Address}
                       </Text>
                   </View> 
               </View>
               </View>
               :null}
               <TouchableOpacity 
               style={{
                backgroundColor:'#032e63',
                paddingHorizontal:20,
                paddingVertical:6,
                borderRadius:20,
                width:115,
                alignItems:'center',justifyContent:'center',
                   marginTop:15,
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>Contact</Text>
               </TouchableOpacity>
               <View style={{paddingHorizontal:20,marginTop:20}}>
                   <View style={{flexDirection:'row'}}>
                     <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/16.png')}/>
                     <View>
                     <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{`Ph:${selector.Profile.MobileNo}`}</Text>
                     {/* <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{'Ph:9876567898 '}</Text>
                     <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{'Ph:9876567898 '}</Text> */}
                     </View>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/msg.png')}/>
                     <View>
                     <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{selector.Profile.EmailId}</Text>
                     
                     </View>
                   </View>
                  
                   {/* <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/facebook.png')}/>
                     <View>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600',fontFamily:'Acephimere'}}>{'fb.com/rcbafna '}</Text>
                     </View>
                   </View>
                   */}
                   <View style={{height:100}}/>
               </View>
           </View>
       </View>
    )
}
export default Profile;