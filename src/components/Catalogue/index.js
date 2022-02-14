import React from 'react';
import { View,FlatList,TouchableOpacity,Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Catalogue=()=>{
  const navigation=useNavigation()
    return(
        <View>
             <View style={{backgroundColor:'#fff',alignItems:'center',justifyContent:'center',paddingVertical:14}}>
            <Text style={{fontSize:16,fontWeight:'700'}}>Catagories </Text>
          </View>
            <FlatList
            data={data1}
            numColumns={3}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>navigation.navigate('CategoryDetails',{
                  title:item.title
                })}
              style={{
                width: '33.3%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 160,
                backgroundColor:'#fff',
                borderWidth:0.3
              }}>
                <Text style={{color: 'red', fontSize: 12}}>{item.title}</Text>
                  
              </TouchableOpacity>
            )}
            />
           <View style={{backgroundColor:'#fff'}}>
          <View style={{alignItems:'center',paddingVertical:20}}>
             <Text style={{fontSize:16}}>My Collections</Text>
          </View>
           <View style={{width:'100%',height:180,borderTopWidth:1}}>

           </View>
           <View style={{width:'100%',height:180,borderTopWidth:1}}>

           </View>
           <View style={{width:'100%',height:180,borderWidth:1}}>

           </View>
        </View>
        </View>
    )
}
export default Catalogue;
const data1 = [
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello'},
    {title: 'Hello',type:'add'}
  ];
  
  