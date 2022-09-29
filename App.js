// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


// const CheckBox = ({ isChecked, onPress, size = 15 }) => {
//   return (
//     <TouchableOpacity style={{ width: size, height: size }} onPress={onPress}>
//       {isChecked ? (
//         <Image
//           style={{ width: size, height: size,tintColor:isChecked?'red':'black' }}
//           source={require('./src/assets/Image/eye.png')}
//         />
//       ) :null}
//     </TouchableOpacity>
//   );
// };

// const CheckBoxWithoutSquare = ({ isChecked, onPress, size = 20 }) => {
//   return (
//     <TouchableOpacity style={[styles.container]} onPress={onPress}>
//       {isChecked ? (
//       <View style={{height:size,width:size ,backgroundColor:isChecked?'red':'#000',borderWidth:1,borderColor:'red'}}>
         
//       </View>
//       ) :null
     
//       }
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     marginTop: 100,
//   },

//   checkContainer: {
//     marginHorizontal: 15,
//   },
//   checkBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkText: {
//     marginLeft: 10,
//     fontSize: 13,
//     fontWeight: 'normal',
//     color: 'black',
//   },
//   underline: {
//     textDecorationLine: 'underline',
//     fontSize: 13,
//     fontWeight: 'normal',
//     color: 'black',
//   },
// });

// const agreements = [
//   {
//     content: 'test1',
//     checked: false,
//   },
//   {
//     content: 'test2',
//     checked: false,
//   },
// ];

// const AuthJoin = (props) => {
//   const [data, setData] = useState(agreements);
//   const [isChecked, setIsChecked] = useState(true);
//   // const [selectAll, setSelectAll] = useState(
//   //   data.filter((item) => item.checked).length === data.length
//   // );
//   // const checkAll = () => {
//   //   let newValue = data.filter((item) => item.checked).length === data.length;
//   //   let temp = data.map((item) => {
//   //     return { ...item, checked: !newValue };
//   //   });
//   //   setData(temp);

//   //   console.log(temp);
//   // };
//   const checkOne = (newValue, index) => {
//     let temp = data.map((item, i) => {
//       return index === i ? { ...item, checked: newValue } : item;
//     });
//     setData(temp);
//     setIsChecked(!isChecked);
//   };

//   return (
//     <>
//       <View style={[styles.container]}>
//         <View style={[styles.checkContainer]}>
//           {/* <View style={[styles.checkBox, { marginBottom: 20 }]}>
//             <CheckBox
//               isChecked={
//                 data.filter((item) => item.checked).length === data.length
//               }
//               onPress={checkAll}
//               size={20}
//             />
//             <Text style={[styles.checkText]}>Select All</Text>
//           </View> */}

//           {data.map((item, index) => (
//             <View
//               style={[styles.checkBox, { justifyContent: 'space-between' }]}>
//               <View style={[styles.checkBox, { marginBottom: 10 }]}>
//                 <CheckBoxWithoutSquare
//                   isChecked={item.checked}
//                   onPress={() => checkOne(!item.checked, index)}
//                 />
//                 <Text style={[styles.checkText]}>{item.content}</Text>
//               </View>
//               <TouchableOpacity>
//                 {/* <Text style={[styles.underline]}>text temp</Text> */}
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </View>
//     </>
//   );
// };

// export default AuthJoin;


import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox, Button, Platform,SafeAreaView, } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigation';
import StatusBar from './src/components/StatusBar';


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App = () => {
 
  
  return (
    <Fragment>
    {/* <SafeAreaView style={{backgroundColor:Platform.OS=='ios'?'#032e63':'#fff'}}/> */}
    <SafeAreaView style={{flex:1,backgroundColor:Platform.OS=='ios'?'#052a47':'#fff'}}>
    <StatusBar/>
     <Provider store={Store}>
        <RootApp />
      </Provider>
    </SafeAreaView>
    </Fragment>
  )
}
export default App;

// import React ,{useState}from 'react';
// import { StyleSheet, Dimensions, View ,Platform,Text,Image,LogBox,TouchableOpacity,PermissionsAndroid, Alert} from 'react-native';
// // import Pdf from 'react-native-pdf';
// import RNFetchBlob from 'rn-fetch-blob'

// LogBox.ignoreLogs(['Warning: ...']);
//  LogBox.ignoreAllLogs();


// const app =()=> {
//     // render() {
//       const [page,setPage]=useState('')
//           const [total,setTotal]=useState('')
//           const [value,setValue]=useState(pageNo)
//           const [pageNo,setPageNo]=useState(1)
//           //const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
      
//           const source = Platform.OS === 'android' ? { uri: "bundle-assets://pdf/terapanth_ka_itihaas_part_1.pdf" ,} : { uri: "bundle-assets://terapanth_ka_itihaas_part_1.pdf" }
//         // const source = { uri: "bundle-assets://pdf/thereactnativebook_sample.pdf" };
//         //const source = require('./test.pdf');  // ios only
//         //const source = {uri:'bundle-assets://test.pdf' };
//         //const source = {uri:'file:///sdcard/test.pdf'};
//         //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
//         //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
//         //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
    
//         const actualDownload = () => {
//             const { dirs } = RNFetchBlob.fs;
//             const date=new Date()
//                const configOptions = Platform.select({
//                    android: {
//                      fileCache: true,
//                      addAndroidDownloads: {
//                      useDownloadManager: true,
//                      notification: true,
//                      mediaScannable: true,
//                        title: `Data.pdf`,
//                         path:  `${dirs.DownloadDir+"/me_" +Math.floor(date.getTime() + date.getSeconds() / 2)}.pdf`

//                       // path: `${dirs.DownloadDir }/Data.pdf`,
//                      },
//                    },
//                });
//                console.log('dld',configOptions);
//                try {
//                RNFetchBlob.config(configOptions)
//                .fetch('GET', `http://samples.leanpub.com/thereactnativebook-sample.pdf`, {})
//               //  .fetch('GET', `https:\/\/ekyatraterapanth.com\/adminpanel\/assets\/doc\/terapanth_ka_itihaas_part_1.pdf`, {})
//                    .then((res) => {
//                    console.log('hhh',res.path())})
                
//                   } catch(error) {
//                     console.log('eee',error)
//                   }
//                   //  console.log('Rnfetchblob', RNFetchBlob.config(configOptions)
//                   //  .fetch('GET', source));
//            }
//         const downloadFile = async() => {
//           if (Platform.OS=='ios') {
//             console.log('true');
//             actualDownload();
//           } else {
//             try {
             
//               const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
//               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//               actualDownload();
//               console.log('granted download',PermissionsAndroid.RESULTS.GRANTED);
//               } else {
//                 Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
//               }
//             } catch (err) {
//               console.warn(err);
//             } 
//           }
//        }
//         return (
//             <View style={styles.container}>
//               <View style={{marginTop:90,borderWidth:1}}>
//               <TouchableOpacity onPress={()=>downloadFile()}
//               >
//               <Image
//                   style={{height: 100, width: 100}}
//                   source={require('./src/assets/Image/services.png')}
//                 />
//               </TouchableOpacity>
//               </View>
//                 {/* <Pdf
//                 //  trustAllCerts={false}
//                     source={source}
//                     // onLoadComplete={(numberOfPages,filePath) => {
//                     //     console.log(`Number of pages: ${numberOfPages}`);
//                     // }}
//                     // onPageChanged={(page,numberOfPages) => {
//                     //     console.log(`Current page: ${page}`);
//                     // }}
//                     // onError={(error) => {
//                     //     console.log(error);
//                     // }}
//                     // onPressLink={(uri) => {
//                     //     console.log(`Link pressed: ${uri}`);
//                     // }}
//                     onLoadComplete={(numberOfPages, filePath) => {
                    
//                     }}
//                     onPageChanged={(page,numberOfPages) => {
//                      setPage(page)



//                      setTotal(numberOfPages)
//                     }}
//                     onError={(error) => {
                     
//                     }}
//                     style={styles.pdf}
//                     enablePaging={true}
//                     page={pageNo}
//                    horizontal={true}
//                     /> */}
//             </View>
//         )
//     }
// export default app;

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 0,
//   },
//   pdf: {
//       //flex:1,
//       width:Dimensions.get('window').width,
//       height:"100%",
//       backgroundColor:'red'
//   }
// });