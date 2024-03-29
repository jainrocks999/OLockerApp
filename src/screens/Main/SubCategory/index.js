import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Keyboard, ScrollView,Image,Share,TextInput} from 'react-native';
import Header from '../../../components/CustomHeader';
import TabView from '../../../components/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from "../../../components/Preview";
import Banner from '../../../components/Banner';
// import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Loader from "../../../components/Loader"
const SubCategory = ({route}) => {
    const navigation=useNavigation()
    const isFetching = useSelector(state=>state.isFetching)
    const selector=useSelector(state=>state.Detail.GetProductModel)
    const selector2 =useSelector(state=>state.Product1Detail.GetProductModel)
    const Details=route.params.Network
    console.log('My product side detail',selector2);
    console.log('partner side Detail',selector);

    const data=[]
  { Details ?  selector.productimages.map((item)=>{
      const url= `${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`
data.push({
  image:url,desc:'abcsd'
})   
    console.log('1vv22',`${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`);

    }):
    selector2.productimages.map((item)=>{
      const url= `${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`
data.push({
  image:url,desc:'abcsd'
})   
    console.log('1vv22',`${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`);

    })
    // selector2.RetailerFavProduct.map((item)=>{
    //   item.ProductDetails.ProductImageList.map((item1)=>{
    //     // console.log('1vv122344444',`${ImagePath.Path}${(item1.ImageLocation).substring(1)}`);
    //     const url=`${ImagePath.Path}${(item1.ImageLocation).substring(1)}`
    //     data.push({
    //       image:url,desc:'abcsd'
    //     }) 
    //   })

    // })
  }
    // console.log('image data areeeapush ....',data);
  //  selector.metaldetails.map((item)=>{
  //    const metal1=item.MetalPurity
  //     console.log('1111vvv12dd0',item.MetalPurity);

  //   })
    const [collection,setCollection]=useState('')
    const [stockNo,setStock]=useState('')
    const [metal,setMetal]=useState('')
    const[gm,setGm]=useState('')
    const[demo ,setDemo]=useState('')
   const [price,setPrice]=useState('')
   const[mg,setMg]=useState('')
   const[metalPurity,setMetalPurity]=useState('')
   const [description,setDescription]=useState('')
    const [editable,setEditable]=useState(false)
    const [editable1,setEditable1]=useState(false)
    const [editable2,setEditable2]=useState(false)
    const [click1,setClick1]=useState(false)
    const[url,setUrl] =useState('')
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    useEffect( ()=>{
     { Details ? setDescription(selector.description): setDescription(selector2.description)
      
    //   selector2.RetailerFavProduct.map((item)=>{
    //   setDescription(item.ProductDetails.Description)
    //  })
    }
     
     {Details? setStock(selector.name):setStock(selector2.name)
    //   selector2.RetailerFavProduct.map((item)=>{
    //   setStock(item.ProductDetails.ProductTypeName)
    //  })
    }
      {Details ? setPrice(selector.price):setPrice(selector2.price)
      //   selector2.RetailerFavProduct.map((item)=>{
      //   setPrice(item.ProductDetails.FullPayment)
      //  })
      }
     {Details ? setCollection(selector.productsku): setCollection(selector2.productsku)
    //   selector2.RetailerFavProduct.map((item)=>{
    //  setCollection(item.ProductDetails.ProductSku)
    //  })
    }
      {Details ? selector.metaldetails.map((item)=>{
        setMetal(item.MetalWt);
        setGm(item.UnitMetalWt);
        setMg(item.MetalType);
        setMetalPurity(item.MetalPurity);
       
      }):selector2.metaldetails.map((item)=>{
        setMetal(item.MetalWt);
        setGm(item.UnitMetalWt);
        setMg(item.MetalType);
        setMetalPurity(item.MetalPurity);
       
      })
      // selector2.RetailerFavProduct.map((item)=>{
      //   item.ProductDetails.metaldetails.map((item1)=>{
      //     setMetal(item1.MetalWt);
      //     setGm(item1.UnitMetalWt);
      //     setMg(item1.MetalType);
      //     setMetalPurity(item1.MetalPurity);

      //   })
      // })
    }
      setDemo(`${mg} ${metalPurity} - ${metal} ${gm}`);

    {Details?  selector.productimages.map((item) => {
        setUrl(`${ImagePath.Path}/${item.ImageLocation.replace(/\\/g, "/") }/${item.ImageName}`)
        
        // console.log('1vv223366', url);

      }):
      selector2.productimages.map((item) => {
        setUrl(`${ImagePath.Path}/${item.ImageLocation.replace(/\\/g, "/") }/${item.ImageName}`)
        
        // console.log('1vv223366', url);

      })
      // selector2.RetailerFavProduct.map((item)=>{
      //   item.ProductDetails.ProductImageList.map((item1)=>{
      //     // console.log('ghghgsdsdgsf',`${ImagePath.Path}${(item1.ImageLocation).substring(1)}`);
      //     setUrl(`${ImagePath.Path}${(item1.ImageLocation).substring(1)}`)
      //     // console.log('1vvfegehge6', url);

      //   })
  
      // })
    }
     },[demo])
     
    //  console.log('xxx157',demo);

     const share=async()=>{
       await Share.share({
         message:`Product Name : ${stockNo} \nProduct Url : ${url}`
       })
     }
 

  const manageEdit=()=>{
      setEditable(true)
      setEditable1(true)
      setEditable2(true)
     // Detail();
  }
  const click =(click1)=>{
    if(click1){
        setClick1(false)
    }
     else {
      setClick1(true)
    }
  }
  return (
    <View style={styles.container}>
      <Header
        source={require('../../../assets/L.png')}
        source1={require('../../../assets/Fo.png')}
        source2={require('../../../assets/Image/dil.png')}
        title={stockNo}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Message')}
        onPress2={()=>navigation.navigate('FavDetails')}
      />
      <ScrollView>
        {isFetching?<Loader/>:null}
        <View
          style={styles.main}>
            <TouchableOpacity  onPress={()=>click(click1)} >
        { Details?  <View>
          <Image style={{width:21,height:18}} tintColor= {click1?'red':'#fff'} source={require('../../../assets/Image/dil.png')}/>
        </View>:
        <View>
            <Image style={{width:21,height:18}} tintColor= {click1?'red':'#fff'} source={require('../../../assets/Image/dil.png')}/>
          </View>}
          </TouchableOpacity>
          <View>
              <TouchableOpacity onPress={()=>share()}
              // {()=>navigation.navigate('Filter')}
              >
              <Image style={styles.img}  source={require('../../../assets/Image/share1.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:10}}>
       {/* { selector.productimages.map((item)=>{
      console.log('1vvvv',item.ImageName);
    */}
         <FlatListSlider
            data={data}
            height={200}
           // timer={5000}
            contentContainerStyle={{paddingHorizontal:30,}}
            indicatorContainerStyle={{position:'absolute', bottom: -20}}
            indicatorActiveColor={'#ffffff'}
            indicatorInActiveColor={'grey'}
            indicatorActiveWidth={5}
            component={<Preview/>}
            separatorWidth={15}
            width={310}
            autoscroll={false}
            loop={false}
        />
      {/* })} */}
      </View>
      
        <View style={styles.view}>
        <Image style={styles.img1} source={require('../../../assets/Image/rupay.png')}/>
        <Text style={styles.text}>{price}</Text>
        <Text style={styles.text1}>( Approximate Price )</Text>
        </View>
        <View style={{padding:20}}>
          <View style={styles.main1}>
          <View style={styles.main1view}>
<View style={styles.main1view1}>
        <Text style={styles.main1view1text}>{description=={description}?{description}:'PRODUCT DESCRIPTION'}</Text>
        </View>
   { Details? <TouchableOpacity onPress={()=>navigation.navigate('Editproduct')}
  //  onPress={()=>manageEdit()} 
   style={{alignItems:'flex-end'}}>
    <Image style={{width:20,height:20}} source={require('../../../assets/Image/edit.png')}/>
    </TouchableOpacity>:null}
        </View>
        <View style={{marginLeft:20,marginTop:8}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
             <Text style={styles.cardtext}>{'Name       :      '}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={stockNo}
             editable={editable1}
            onChangeText={(val)=>setStock(val)}
             />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-15,}}>
             <Text style={styles.cardtext}>{'Stock No :      '}</Text>
             <TextInput
             style={{height:40,color:'#052a47'}}
             value={collection}
            editable={editable}
             onChangeText={(val)=>setCollection(val)}
            
             />
          </View>
         
           
        
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-15}}>
                <Text style={styles.cardtext}>{'Metal        :     '}</Text>
             {/* {selector.metaldetails.map((item)=> */}
            {/* <Text style={{marginTop:10,color:'#052a47'}}>{item.MetalPurity}</Text>  */}
               <TextInput
               style={{height:40,color:'#052a47'}}
               value={demo}
              editable={editable2}
              onChangeText={(val)=>setDemo(val)}
              /> 
             {/* )} */}
          </View>
        </View>
          </View>
          {/* <View style={{
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20,
            flexDirection:'row',
            }}>
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20,
                width:'48%',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ADD TO CATALOGUE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                backgroundColor:'#ea056c',
                paddingHorizontal:20,
                paddingVertical:10,
                borderRadius:20,
                width:'48%',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Text style={{color:'#fff',fontSize:12,fontFamily:'Acephimere'}}>ENQURE NOW</Text>
              </TouchableOpacity>
          </View> */}


      </View>
      <View style={{height:100}}/>
      </ScrollView>
      <View style={{bottom: 0, left: 0, right: 0, position: 'absolute'}}>
        {/* <TabView /> */}
      </View>
    </View>
  );
};
export default SubCategory;

const images = [
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 {
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
 ]





//  const selector2=useSelector(state=>state.categoryDetailData)
//  const deatails=route.params.Network
//  console.log('get Product Deatail .....',selector);
//  console.log('1111120',selector2);

 
// //  {deatails?selector:selector2}
//  const data=[]
// { deatails? selector.productimages.map((item)=>{
//    const url= `${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`
// data.push({
// image:url,desc:'abcsd'
// })   
// console.log('1vv22',`${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`);

//  }):selector2.RetailerFavProduct.map((item)=>{
//    console.log('categories Details  ........',item);
//    console.log('1virenddra22',`${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`);

//    const url= `${ImagePath.Path}${item.ImageLocation}/${item.ImageName}`
//    data.push({
//      image:url,desc:'abcsd'
//    })   
//  })}