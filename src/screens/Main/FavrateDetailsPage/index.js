import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image,Dimensions,Share} from 'react-native';
import Header from '../../../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch} from 'react-redux';
import ImagePath from '../../../components/ImagePath';
import styles from './styles';
import Loader from '../../../components/Loader'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyProducts = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFatching =useSelector(state=>state.isFetching)
    const selector=useSelector(state=>state.categoryDetailData1.RetailerFavProduct)
  const win = Dimensions.get('window');
console.log('favoritee ....',selector);
  const manageCategory1= async(SrNo)=>{
       
    dispatch({
      type: 'Get_GetProductDetail_Request',
      url:'GetProductDetail',
    
     ProductId:SrNo,
      navigation
    })
  }
  const [click1,setClick1]=useState(false)
  
  const click =(click1)=>{
    if(click1){
        setClick1(false)
    }
     else {
      setClick1(true)
    }
  }
  const share=async(id)=>{
    let pr =id.ProductDetails.FullPayment;
    let name =id.ProductDetails.ProductTypeName;
    let Description =id.ProductDetails.Description
   await Share.share({
     message:`Product Name : ${name} \nProduct Price : ${pr} \n Product Description : ${Description}`
   })
 }
  return (
    <View style={styles.container}>
      <Header
        source={require('../../../assets/L.png')}
        source2={require('../../../assets/Fo.png')}
        //  source2={require('../../../assets/Image/dil.png')}
        title={'Favourite List'}
        onPress={() => navigation.goBack()}
        onPress2={() => navigation.navigate('Message')}
      />
      <ScrollView>
        {isFatching?<Loader/>:null}
        <View style={styles.main}>
          
          <View>
           { selector.length===1? <Text style={styles.text}>{selector.length} Item</Text>:<Text style={styles.text}>{selector?.length} Items</Text>}
          </View>
         
        </View>
        <View style={styles.card}>
          <FlatList
            data={selector}
            numColumns={2}
            renderItem={({item,index}) => (
              <View
             
                // navigation.navigate('SubCategory')}
              
                style={styles.cardview}>
              <View style={{height: hp('100%'),width:wp('45%'), maxHeight:hp('25%'),borderWidth:0, borderColor:'red'}}>
                 <View style={{height: hp('7%'), width: '100%',borderWidth:0}}>
                   <View style={{padding:0,height: hp('5%'), width: '18%',borderWidth:0,marginTop:0}}>
                     <TouchableOpacity onPress={()=>click(click1)} >
                      
                      <Image style={{height:hp('2.4%'),width:wp('5.8%'),marginLeft:5,marginTop:2,tintColor:click1?'red':'grey'}}  source={require('../../../assets/Image/dil.png')}/>
                     </TouchableOpacity>
                     {console.log('log item   ,,',item)}
                      <TouchableOpacity onPress={()=>share(item)}>
                        <Image style={{height:hp('2.1%'),width:wp('6%'),marginTop:5,marginLeft:8}} source={require('../../../assets/Image/share1.png')}/>
                      </TouchableOpacity>
                   </View>
                   <View style={{ borderTopRightRadius: 10,borderBottomLeftRadius: 10,//  paddingHorizontal: 10,
                           backgroundColor: '#24a31e', marginTop:Platform.OS=='android'?-37:-50,
                           alignSelf: 'flex-end', height: hp('2.4%'),width: '45%', // paddingVertical: 3
                         }}>
                         <Text style={styles.cardview2text}>{`${item.ProductDetails?.Weight} GM`}</Text>
                    </View>
                  </View>
                   <TouchableOpacity  onPress={()=>manageCategory1(item.Product)}
                      style={{height: hp('13%'), width: wp('33%'),marginLeft:19, maxHeight: hp('14%'),borderWidth:0}}>
                          {item.ProductDetails?.ProductImageList.map((item1)=>
                            <Image style={{ width: win.width * 0.35,
                               height: '100%',
                            resizeMode: 'contain',
                           alignSelf: 'center',
                          // borderWidth: 5,
                           }}
                           source={{uri:`${ImagePath.Path}${(item1?.ImageLocation)?.substring(1)}`}} /> )}
                  </TouchableOpacity>
                 <View style={{height: hp('3%'), width: '100%',marginLeft:20}}>
                       <Text style={styles.cardbottomtext}>
                          {`ID# ${item.ProductDetails?.ProductSku}`}
                        </Text>
                     <View style={styles.cardbottom1}>
                         <Image style={{width:16,height:20}} source={require('../../../assets/Image/rupay.png')}/>
                         <Text style={styles.cardbottom1text}>
                          {item.ProductDetails?.FullPayment}</Text>
                     </View>
                  </View>
                </View>
          </View>
            )}
          />
        </View>
        <View style={{height: 70}} />
      </ScrollView>
    </View>
  );
};
export default MyProducts;


