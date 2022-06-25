import { Platform, StyleSheet } from "react-native";
export default StyleSheet.create({
container:{
flex:1,
backgroundColor:'#f7f7f7'

},
view:{
  paddingVertical:10,
  borderWidth:1,
  justifyContent:'center',
  borderTopLeftRadius:5,
  borderTopRightRadius:200,
},
main:{
  marginTop:0,
  marginLeft:13,
  paddingHorizontal:-5,   
},
text:{
    fontSize:20,
   // marginTop:-100,
   

},
card: {
   // shadowColor: 'black',
     shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 0 },
     elevation: 2,
   // borderRadius: 10,
    //backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    //marginTop: 10,
    //borderWidth: 1,
  },
  image: {
    width: 28,
    height: 28,
    marginLeft:-10
  },
  input1: {
    
    marginLeft: 0,
    paddingVertical: 10,
    
    //color: colors.textColor,
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth:1,
    width:'67%',
    marginLeft:20,
    
    
  },
  error:
    {
        width:'90%',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:22,
        marginTop:6
    },
    warn:
    {
        fontSize:12,
        color:'red'
    },
})