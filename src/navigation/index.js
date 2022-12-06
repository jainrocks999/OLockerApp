import React from "react";
import {Image} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/Auth/SplashPage";
import HomeScreen from '../screens/Main/HomeScreen';
import MessageList from '../screens/Main/MessageList';
import Login from "../screens/Auth/LoginPage";
import RegisterPage from '../screens/Auth/RegisterPage';
import Addcategory from "../screens/Main/Addcategory";
import Addproduct from "../screens/Main/Addproduct";
import Addcollection from "../screens/Main/Addcollection";
import Mycustomer from "../screens/Main/Mycustomers";
import Feedback from "../screens/Main/Feedback";
import Messagebox from "../screens/Main/Messagebox";
import Edit from "../screens/Main/Editprofile";
import Loyalty from "../screens/Main/Loyalty";
import LoyaltyPage from "../screens/Main/Loyaltypage";
import Purchase from "../screens/Main/Purchasehistory";
import Chat from "../screens/Main/MessageboxChat"
import MyCatalogue from '../screens/Main/MyCatalogue';
import MyProducts from '../screens/Main/MyProducts';
import MyProductDetails from '../screens/Main/MyProductDetails';
import SelectOption from '../screens/Main/SelectOption';
import Customers from '../screens/Main/Customers';
import MyNetwork from '../screens/Main/MyNetwork';
import PendingRequest from '../screens/Main/PendingRequest';
import SentRequest from '../screens/Main/SentRequest';
import MyNetworks from '../screens/Main/MyNetworks';
import PartnerProfile from '../screens/Main/PartnerProfile';
import MyCustomerDetail from '../screens/Main/MyCustomerDetail';
import CategoryDetails from '../screens/Main/CategoryDetails';
import SubCategory from '../screens/Main/SubCategory';
import Filter from '../screens/Main/Filter';
import DetailsFav from '../screens/Main/FavrateDetailsPage'
import editProduct from "../screens/Main/EditProductDetails"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 const Stack1= createNativeStackNavigator();
 function HomeScreen1(){
  return (
  <Stack1.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack1.Screen name="Home" component={HomeScreen} />
      <Stack1.Screen name="SelectOption" component={SelectOption} />
      <Stack1.Screen name="Addcategory" component={Addcategory} />
      <Stack1.Screen name="Addproduct" component={Addproduct} />
      <Stack1.Screen name ="Addcollection" component={Addcollection}/>
      <Stack1.Screen name="MyCatalogue" component={MyCatalogue} />
      <Stack1.Screen name="MyProductDetails" component={MyProductDetails} />
      <Stack1.Screen name="SubCategory" component={SubCategory} /> 
      <Stack1.Screen name="MyProducts" component={MyProducts} />
      <Stack1.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack1.Screen name="Filter" component={Filter} />
      <Stack1.Screen name="FavDetails" component={DetailsFav}/>
      <Stack1.Screen name="Editproduct" component ={editProduct}/>
  </Stack1.Navigator>
  )
 }
 const Stack3=createNativeStackNavigator();
 function Customer1(){
   return(
     <Stack3.Navigator initialRouteName="Customers" screenOptions={{headerShown:false}}>
        <Stack3.Screen name="Customers" component={Customers} />
        <Stack3.Screen name="Mycustomer" component={Mycustomer} />
        <Stack3.Screen name="Feedback" component={Feedback} />
        <Stack3.Screen name="MyCustomerDetail" component={MyCustomerDetail} />
        <Stack3.Screen name="Messagebox" component={Messagebox} />
        <Stack3.Screen name="Purchase" component={Purchase} />
        <Stack3.Screen name="Editprofile" component={Edit} />
      <Stack3.Screen name="Loyalty" component={Loyalty} />
      <Stack3.Screen name="Loyalty1" component={LoyaltyPage} />
      <Stack3.Screen name="Chat" component={Chat} />

     </Stack3.Navigator>
   )
 }
const Stack2=createNativeStackNavigator();
function MyNetwork1(){
  return(
    <Stack2.Navigator initialRouteName="MyNetwork" screenOptions={{headerShown:false}}>
      <Stack2.Screen name="MyNetwork" component={MyNetwork} />
      <Stack2.Screen name="MyNetworks" component={MyNetworks} />
      <Stack2.Screen name="PartnerProfile" component={PartnerProfile} />
      <Stack2.Screen name="PendingRequest" component={PendingRequest} />
      <Stack2.Screen name="SentRequest" component={SentRequest} />
    </Stack2.Navigator>
  )
}
const Tab = createBottomTabNavigator();
function Bottom(){
return(
 
  <Tab.Navigator 
  screenOptions={{
    headerShown:false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#01377d',paddingTop:5,paddingBottom:5,
      }
  
  }}>
    <Tab.Screen name="Home1" component={HomeScreen1} options={{  
      tabBarIcon: ({ focused }) => {
        return <Image style={{ tintColor: focused ? '#fff' : 'grey',height:26,width:24 }} source={require('../assets/For.png')} />;
       },
      }} />
    <Tab.Screen name="MyNetwork1" component={MyNetwork1} options={{
      tabBarIcon: ({ focused }) => {
        return <Image style={{ tintColor: focused ? '#fff' : 'grey', height: 26, width: 26 }} source={require('../assets/Lay.png')} />;
      },
     }} />
    <Tab.Screen name="Message" component={MessageList} options={{
      tabBarIcon: ({ focused }) => {
        return <Image style={{ tintColor: focused ? '#fff' : 'grey', height: 28, width: 28 }} source={require('../assets/noti.png')} />;
      },
      }} />
    <Tab.Screen name="Customer1" component={Customer1} options={{
      tabBarIcon: ({ focused }) => {
        return <Image style={{ tintColor: focused ? '#fff' : 'grey', height: 25, width: 22 }} source={require('../assets/Sh.png')} />;
      },
     }} />
    
  </Tab.Navigator>
)}

const Stack = createNativeStackNavigator();
function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Home" component={Bottom}/>
        <Stack.Screen name="Login" component ={Login}/>
        <Stack.Screen name="RegisterPage" component={RegisterPage}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
