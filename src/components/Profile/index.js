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
           {selector.Profile.SupplierIntroduction?
            <TouchableOpacity 
               style={{
                   backgroundColor:'#032e63',
                   paddingHorizontal:20,
                   paddingVertical:8,
                   borderRadius:20,
                   width:100,
                   alignItems:'center',justifyContent:'center'
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>About us</Text>
               </TouchableOpacity>  :null}
               <Text style={{fontSize:16,textAlign:'center',marginTop:20,color:'#535353',fontFamily:'Acephimere'}}>
               {selector.Profile.SupplierIntroduction}
               </Text>
             
               {/* {selector.Images.map((item)=>
               item.Type == 'Owner Image' ? */}
               <TouchableOpacity 
               style={{
                backgroundColor:'#032e63',
                paddingHorizontal:20,
                paddingVertical:8,
                borderRadius:20,
                width:100,
                alignItems:'center',justifyContent:'center',
                marginTop:15
                   }}>
                     {/* {console.log('bire', `${ImagePath.Path}/${item.ImageUrl}`)} */}

                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>Founders</Text>
               </TouchableOpacity>
                {/* :null)} */}

               <View style={{flexDirection:'row'}}>
              {selector.Images.map((item)=>
               item.Type == 'Owner Image' ?
                   <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'35%',
                    paddingVertical:15
                    }}>
                    {console.log('bire', `${ImagePath.Path}/${item.ImageUrl}`)}

                    <View style={{width:'80%',alignItems:'center'}}>
                        <View style={{height:90,width:'100%',borderWidth:1}}>
                        <Image 
                        style={{height:'100%',width:'100%'}}
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
                paddingHorizontal:15,
                paddingVertical:8,
                borderRadius:20,
                width:110,
                alignItems:'center',justifyContent:'center',
                   marginTop:15
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere',width:'90%'}}>Showrooms</Text>
               </TouchableOpacity>
              <View style={{paddingHorizontal:20,marginTop:20}}>
                   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                     <Image style={{height:30,width:22}} source={require('../../assets/Image/loc.png')}/>
                     <Text style={{marginLeft:20,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>
                       {selector.Profile.Address}
                       </Text>
                   </View> 
               </View>
               </View>
               :null}
               {selector.Profile.MobileNo!=null||selector.Profile.EmailId!=null?
               <View>
               <TouchableOpacity 
               style={{
                backgroundColor:'#032e63',
                paddingHorizontal:20,
                paddingVertical:8,
                borderRadius:20,
                width:100,
                alignItems:'center',justifyContent:'center',
                   marginTop:15,
                   }}>
                   <Text style={{color:'#fff',fontSize:14,fontFamily:'Acephimere'}}>Contact</Text>
               </TouchableOpacity>
               <View style={{paddingHorizontal:20,marginTop:20}}>
                   <View style={{flexDirection:'row'}}>
                     <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/16.png')}/>
                     <View>
                     <Text style={{marginLeft:20,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{`+91${selector.Profile.MobileNo}`}</Text>
                     {/* <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{'Ph:9876567898 '}</Text>
                     <Text style={{marginLeft:30,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{'Ph:9876567898 '}</Text> */}
                     </View>
                   </View>
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/msg.png')}/>
                     <View>
                     <Text style={{marginLeft:20,fontSize:14,fontFamily:'Acephimere',color:'#424242'}}>{selector.Profile.EmailId}</Text>
                     {console.log('mlskaaf',selector.Profile)}
                     </View>
                   </View>
              
                   <View style={{flexDirection:'row',marginTop:20}}>
                   <Image style={{height:28,width:28}} source={require('../../assets/PartnerImage/facebook.png')}/>
                     <View>
                     <Text style={{marginLeft:20,fontSize:14,fontWeight:'600',fontFamily:'Acephimere'}}>{'fb.com/rcbafna '}</Text>
                     </View>
                   </View>
                  
                   <View style={{height:100}}/>
               </View>
               </View>
               :null}
           </View>
       </View>
    )
}
export default Profile;