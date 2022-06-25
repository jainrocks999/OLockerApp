import { StyleSheet } from "react-native";
export default StyleSheet.create({
    rnimg: {
        marginLeft: 2,
        width: 16,
        height: 13,
        marginTop: Platform.OS == 'android' ? 12 : 4,
        //tintColor:'grey'
    },
    blog: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 0.5,
        marginVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        height:45
    },
    img1: {
        width: 25,
        height: 24,
        marginLeft: 10
    },
    
})

