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

