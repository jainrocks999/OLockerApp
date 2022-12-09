import {StyleSheet} from 'react-native';
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
    // backgroundColor: '#f0eeee',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  input: {
    width: '90%',
    marginLeft: 0,
    color: '#474747',
  },
  bottom1: {
    alignItems: 'center',alignSelf:'center',
    marginBottom: 30,
    marginTop: -10,width:'90%'
  },
  bottom1t: {
    fontSize: 12,
    color: '#757575',
    fontFamily: 'Acephimere',textAlign:'center'
  },
  bottom2: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {height: 93, width: 90},
  Text1: {
    fontWeight: '500',
    color: '#949494',
    marginTop: 15,
    fontSize: 17,
    fontFamily: 'Acephimere',
  },
  card: {
    // shadowColor: 'black',
    // shadowOpacity: 0.25,
    // shadowRadius: 8,
    // shadowOffset: {height: 2, width: 0},
    // elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 0,
    paddingHorizontal: 5,
    paddingVertical: 10,paddingBottom:50,borderWidth:1,borderColor:'#ccc'

  },
  card1: {
    // shadowColor: 'black',
    // shadowOpacity: 0.25,
    // shadowRadius: 8,
    // shadowOffset: {height: 2, width: 0},
    // elevation: 5,
    borderRadius: 6,
    backgroundColor: '#E5E5E5E6',
    marginBottom: 0,
    paddingHorizontal: 35,
    paddingVertical: 25,
    marginHorizontal: 11,
    marginBottom: 20,
  },
  img: {
    height: 25,
    width: 25,
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginTop: 17,
    fontWeight: '600',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 5,
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
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',paddingHorizontal:7
  },
  bottomV: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  textB: {
    fontSize: 23,
    color: 'grey',
    fontWeight: '500',
    marginTop: 15,
  },
  textC: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500',
    marginTop: 3,
  },
  button: {
    backgroundColor: '#e9056b',
    paddingVertical: 8,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  textbt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Acephimere',
  },
  rnimg: {
    marginLeft: 2,
    width: 16,
    height: 13,
    marginTop: Platform.OS == 'android' ? 12 : 4,
  },
});
