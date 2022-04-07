import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#032e63',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        paddingVertical: 20,
    },
    container1: {
        flex: 1,
        backgroundColor: '#f0eeee'
    }, 
    img: {
        height: 25,
        width: 25,
        marginTop: 20
    },

    Text1:
    {
        fontWeight: '500',
        color: '#949494',
        marginTop: 15,
        fontSize: 17,
        fontFamily:'Acephimere'
    },
    card:
    {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 0,
        paddingHorizontal: 5,
        paddingVertical: 20,
        // borderWidth: 0.2

    },

    text: {
        color: 'white',
        fontSize: 25,
        marginTop: 17,
        fontWeight:'600'
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20
    },
    main1: {
        borderWidth: 1,
        borderRadius: 30,
        height: 40,
        width: '59%',
        marginTop: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderColor: 'grey',
    },
    rn: {
        inputAndroid: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
        inputIOS: { color: 'black', width: '100%', fontSize: 14, marginBottom: -1, },
        placeholder: { color: 'black', width: '100%', alignSelf: 'center', },
    },
    rnimg: {
        marginLeft: 2,
        width: 16,
        height: 13,
        marginTop: Platform.OS == 'android' ? 12 : 4,
        //tintColor:'grey'
    },
    button: {

        backgroundColor: '#e9056b',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // width:'30%',
        paddingHorizontal:40,
        paddingVertical:8


    },
    bttext: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        fontFamily:'Acephimere'
        // color: 'white',
        // fontSize: 20,
        // fontWeight: '500'
    }
})

