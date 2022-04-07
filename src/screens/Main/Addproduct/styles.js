import { StyleSheet,Platform } from "react-native";
export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#032e63',
        //alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        paddingVertical: 20,
    },
    container1: {
        flex: 1,

        backgroundColor: '#f0eeee'
    },


    Text1:
    {
        fontWeight: '500',
        color: '#949494',
        marginTop: 15,
        fontSize: 17,
        fontFamily:'Acephimere'
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10
    },
    main1:{
        borderWidth: 1, 
        borderRadius: 30, 
        height: 40, 
        width: '59%', 
        marginTop: 10, 
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderColor: 'grey',
      },

    img: {
        height: 25,
        width: 25,
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 25,
        marginTop: 17,
        fontWeight:'600'
    },
    card:
    {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 0,
        paddingHorizontal: 5,
        paddingBottom: 20,

    },

    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 30
    },
    btview: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5
    },
    textview: {
        fontSize: 23,
        color: 'grey',
        fontWeight: '500',
        marginTop: 10
    },
    textview1: {
        fontSize: 14,
        color: 'grey',
        marginTop: 3
    },
    button: {
        backgroundColor: '#e9056b',
        paddingVertical: 8,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:40
    },
    bttext: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        fontFamily:'Acephimere'
    },
    rn:{
        inputAndroid: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
        inputIOS: { color: '#474747', width: '100%', fontSize: 14, marginBottom: -1,fontFamily:'Acephimere' },
        placeholder: { color: '#474747', width: '100%', alignSelf: 'center',fontFamily:'Acephimere' },
      },
      rnimg:{
        marginLeft: 2,
        width: 16,
        height: 13,
        marginTop: Platform.OS == 'android' ? 12 : 4,
      }
})

