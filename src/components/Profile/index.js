import React from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';

const Profile=()=>{
    return(
       <View style={{flex:1,backgroundColor:'#fff',paddingVertical:20}}>
           <View style={{paddingHorizontal:20,alignItems:'flex-start'}}>
               <TouchableOpacity 
               style={{
                   backgroundColor:'#032e63',
                   paddingHorizontal:20,
                   paddingVertical:6,
                   borderRadius:20
                   }}>
                   <Text style={{color:'#fff',fontSize:16}}>About us</Text>
               </TouchableOpacity>
               <Text style={{fontSize:16,textAlign:'left',marginTop:20}}>
                   {'This is not a typical story, this journey started with a vision of serving the people of jalgoan and near by areas by creating place of trust and building relationship in 1974. The Founder Mr. Ratanlal C Bafna just did his primary education but his business mantras were a good an MBA from the leading business school.He started his journey in the era when Gold Jewellery business was yet under licence raj.From that time till today,one value remain constant and that is Transparency on our way of doing business'}
               </Text>
               <TouchableOpacity 
               style={{
                   backgroundColor:'#032e63',
                   paddingHorizontal:20,
                   paddingVertical:6,
                   borderRadius:20,
                   marginTop:15
                   }}>
                   <Text style={{color:'#fff',fontSize:16}}>Founder</Text>
               </TouchableOpacity>
               <View style={{
                   flexDirection:'row',
                   justifyContent:'space-between',
                   alignItems:'center',
                   width:'100%',
                   paddingVertical:20
                   }}>
                   <View style={{width:'30%',alignItems:'center'}}>
                       <View style={{height:100,width:'100%',borderWidth:1}}>

                       </View>
                       <Text style={{marginTop:5}}>Sunil Bafna</Text>
                   </View> 
                   <View style={{width:'30%',alignItems:'center'}}>
                       <View style={{height:100,width:'100%',borderWidth:1}}>

                       </View>
                       <Text style={{marginTop:5}}>Sunil Bafna</Text>
                   </View>
                   <View style={{width:'30%',alignItems:'center'}}>
                       <View style={{height:100,width:'100%',borderWidth:1}}>

                       </View>
                       <Text style={{marginTop:5}}>Sunil Bafna</Text>
                   </View>
               </View>
               <TouchableOpacity 
               style={{
                   backgroundColor:'#032e63',
                   paddingHorizontal:20,
                   paddingVertical:6,
                   borderRadius:20,
                   marginTop:15
                   }}>
                   <Text style={{color:'#fff',fontSize:16}}>Showrooms</Text>
               </TouchableOpacity>
               <View style={{paddingHorizontal:20,marginTop:20}}>
                   <View style={{flexDirection:'row'}}>
                     <Image style={{height:35,width:25}} source={require('../../assets/Image/loc.png')}/>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'123/2B SB Street\nNavi Mumbai\nPh:9876567898 '}</Text>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:35,width:25}} source={require('../../assets/Image/loc.png')}/>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'123/2B SB Street\nNavi Mumbai\nPh:9876567898 '}</Text>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:35,width:25}} source={require('../../assets/Image/loc.png')}/>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'123/2B SB Street\nNavi Mumbai\nPh:9876567898 '}</Text>
                   </View>
                   
               </View>
               <TouchableOpacity 
               style={{
                   backgroundColor:'#032e63',
                   paddingHorizontal:20,
                   paddingVertical:6,
                   borderRadius:20,
                   marginTop:15
                   }}>
                   <Text style={{color:'#fff',fontSize:16}}>Showrooms</Text>
               </TouchableOpacity>
               <View style={{paddingHorizontal:20,marginTop:20}}>
                   <View style={{flexDirection:'row'}}>
                     <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/16.png')}/>
                     <View>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'Ph:9876567898 '}</Text>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'Ph:9876567898 '}</Text>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'Ph:9876567898 '}</Text>
                     </View>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/msg.png')}/>
                     <View>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'support@rcbafna.com '}</Text>
                     
                     </View>
                   </View>
                  
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/facebook.png')}/>
                     <View>
                     <Text style={{marginLeft:30,fontSize:17,fontWeight:'600'}}>{'fb.com/rcbafna '}</Text>
                     </View>
                   </View>
                  
                   <View style={{height:100}}/>
               </View>
           </View>
       </View>
    )
}
export default Profile;