import React from "react";
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

const Stack = createNativeStackNavigator();
function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Message" component={MessageList}/>
        <Stack.Screen name="Login" component ={Login}/>
        <Stack.Screen name="RegisterPage" component={RegisterPage}/>
        <Stack.Screen name="Addcategory" component ={Addcategory}/>
        <Stack.Screen name="Addproduct" component ={Addproduct}/>
        <Stack.Screen name="Addcollection" component ={Addcollection}/>
        <Stack.Screen name="Mycustomer" component ={Mycustomer}/>
        <Stack.Screen name="Feedback" component ={Feedback}/>
        <Stack.Screen name="Messagebox" component ={Messagebox}/>
        <Stack.Screen name="Editprofile" component ={Edit}/>
        <Stack.Screen name="Loyalty" component ={Loyalty}/>
        <Stack.Screen name="Loyalty1"  component ={LoyaltyPage}/>
        <Stack.Screen name="Purchase" component={Purchase}/>
        <Stack.Screen name="Chat" component ={Chat}/>
        <Stack.Screen name="MyCatalogue" component={MyCatalogue}/>
        <Stack.Screen name="MyProducts" component={MyProducts}/>
        <Stack.Screen name="MyProductDetails" component={MyProductDetails}/>
        <Stack.Screen name="SelectOption" component={SelectOption}/>
        <Stack.Screen name="Customers" component={Customers}/>
        <Stack.Screen name="MyNetwork" component={MyNetwork}/>
        <Stack.Screen name="PendingRequest" component={PendingRequest}/>
        <Stack.Screen name="SentRequest" component={SentRequest}/>
        <Stack.Screen name="MyNetworks" component={MyNetworks}/>
        <Stack.Screen name="PartnerProfile" component={PartnerProfile}/>
        <Stack.Screen name="MyCustomerDetail" component={MyCustomerDetail}/>
        <Stack.Screen name="CategoryDetails" component={CategoryDetails}/>
        <Stack.Screen name="SubCategory" component={SubCategory}/>
        <Stack.Screen name="Filter" component={Filter}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
