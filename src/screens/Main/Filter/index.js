import React,{useState,useCallback} from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import RangeSlider from 'rn-range-slider';

const Filter=()=>{
    const [city,setCity]=useState()

// const renderThumb = useCallback(() => <Thumb/>, []);
// const renderRail = useCallback(() => <Rail/>, []);
// const renderRailSelected = useCallback(() => <RailSelected/>, []);
// const renderLabel = useCallback(value => <Label text={value}/>, []);
// const renderNotch = useCallback(() => <Notch/>, []);
// const handleValueChange = useCallback((low, high) => {
//   setLow(low);
//   setHigh(high);
// }, []);
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:15,
                paddingVertical:20,
                alignItems:'center'
                }}>
                <Text style={{fontSize:20}}>x</Text>
                <Text>Filters</Text>
                <View></View>
            </View>
            <View style={{paddingHorizontal:25,marginTop:20}}>
                <Text style={{fontWeight:'700',fontSize:16}}>City</Text>
                <View style={{borderWidth: 1,
        borderRadius: 30,
        height: 40,
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderColor: 'grey',}}>
              <RNPickerSelect
                items={Data}
                onValueChange={val =>setCity(val)}
                style={ {
                  inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
                  placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
              }}
                value={city}
                useNativeAndroidPickerStyle={false}
                placeholder={{ label: 'Active', value: '' }}
                Icon={() => (
                  <Image style={{ marginLeft: 2,
                    width: 16,
                    height: 13,
                    marginTop: Platform.OS == 'android' ? 12 : 4,
                   }}
                  source={require('../../../assets/F.png')}
                />
                )}
              />
            </View>
            <Text style={{fontWeight:'700',fontSize:16,marginTop:30}}>Metal Type</Text>
                <View style={{
                    marginTop:20,
                    paddingHorizontal:15,
                    flexDirection:'row',
                    alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:80,width:80,borderWidth:1,borderRadius:40}}></View>
                        <Text>Gold</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:80,width:80,borderWidth:1,borderRadius:40}}></View>
                        <Text>Gold</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <View style={{height:80,width:80,borderWidth:1,borderRadius:40}}></View>
                        <Text>Gold</Text>
                    </View>
                </View>
                <Text style={{fontWeight:'700',fontSize:16,marginTop:30}}>Value</Text>
                <RangeSlider
                    style={{width: 160, height: 80}}
                    gravity={'center'}
                    min={200}
                    max={1000}
                    step={20}
                    selectionColor="#3df"
                    blankColor="#f618"
                    onValueChanged={(low, high, fromUser) => {
        // this.setState({rangeLow: low, rangeHigh: high})
    }}/>
            </View>


        </View>
    )
}
export default Filter;
const Data = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ];