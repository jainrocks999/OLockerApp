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
      <View style={{alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[styles.videoPreview, 
            active ? {height:240,width:240,borderRadius:120} : 
            {height: 120,width:120,borderRadius:60}
        ]}
          source={{uri: item[imageKey]}}
        />
      </View>
      {/* <Text style={styles.desc}>{item.desc}</Text> */}
    </TouchableOpacity>
    </View>
  );
};
export default Preview
const styles = StyleSheet.create({
  videoContainer: {
    // width: 275,
    // paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    // borderWidth:1,borderColor:'red'
  },
  videoPreview: {
    width: 275,
    // height: 0,
    borderRadius: 8,
    // resizeMode: 'cover',
  },
  desc: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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