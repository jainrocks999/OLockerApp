import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox, Button } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigation';
import StatusBar from './src/components/StatusBar';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App = () => {
 
  
  return (
    <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
      <StatusBar/>
      <Provider store={Store}>
        <RootApp />
      </Provider>
    </View>
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