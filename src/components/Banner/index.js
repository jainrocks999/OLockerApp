import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

const Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
  return (
      <View style={{alignItems:'center',justifyContent:'center',borderRadius:15}}>
    <TouchableOpacity
      // onPress={() => onPress(item)}
      >
      <View style={[styles.imageContainer]}>
        <Image
          style={{height:180,width:300,borderRadius:15}}
          source={{uri: item[imageKey]}}
        />
      </View>
    </TouchableOpacity>
    </View>
  );
};
export default Preview
const styles = StyleSheet.create({
  
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:15
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});