import { ToastAndroid, YellowBox } from 'react-native';
import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

//Login
function* doLogin(action) {
  // console.log('login action,,...',action);
  try {
    const data={
      email:action.email,
      password:action.password
    }
    const response = yield call(Api.fetchDataByGET, action.url, data);
    console.log('Login Details.........',response);
   

    if (response.success==true) {
      yield put({
        type: 'User_Login_Success',
       payload: response.data,
       
      });
      console.log("00000000", JSON.stringify(response.LoginDetail.BranchSrNo));
      console.log('Login time ............',data);
      AsyncStorage.setItem('email',JSON.stringify(data.email));
      AsyncStorage.setItem('password',JSON.stringify(data.password));

      AsyncStorage.setItem('Partnersrno',JSON.stringify(response.LoginDetail.PartnerSrNo));
      AsyncStorage.setItem('BranchNo', JSON.stringify(response.LoginDetail.BranchSrNo));
      action.navigation.replace('Home')
      Toast.show('Login successful')
      // action.navigation.replace('Main');
    } else {
      console.log('error messages......',response.error_info.description);

      Toast.show(response.error_info.description)
      yield put({
        type: 'User_Login_Error',
      });
    }
  } catch (error) {
    console.log('error223',error);
    yield put({
      type: 'User_Login_Error',
    });
  }
}


function* getProducts(action) {
  try {
    const data={
      SupplierSrNo:action.SupplierSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('Product ,,,,......Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Product_Success',
        payload: response.Categories,
      });
    } else {
      yield put({
        type: 'Get_Product_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Product_Error',
    });
  }
}
function* getProduct(action) {
  try {
    const data = {
      partnerSrNo: action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url, data);
    if (response.success == true) {
      console.log('GetProducts....Response',response);
      yield put({
        type: 'Get_Products_Success',
        payload: response.Products,
      });
    } else {
      yield put({
        type: 'Get_Products_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Products_Error',
    });
  }
}
function* getSupplierProduct(action) {
  // console.log('GetSupplierProducts...Action',action);
  try {
    const data = {
      partnerSrno: action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url, data);
    if (response.success == true) {
      console.log('GetSupplierProducts ........Response', response);
      yield put({
        type: 'Get_SupplierProducts_Success',
        payload: response,
      });
    } else {
      yield put({
        type: 'Get_SupplierProducts_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_SupplierProducts_Error',
    });
  }
}


function* getCollection(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    if (response.success == true) {
      console.log('GetCollections .....Response',response);
      yield put({
        type: 'Get_Collection_Success',
        payload: response.PartnerCollection,
      });
    } else {
      yield put({
        type: 'Get_Collection_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Collection_Error',
    });
  }
}

function* getCategories(action) {
  // console.log('GetCatalogueCategories.....Action',action);
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('GetCatalogueCategories... Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Categories_Success',
        payload: response.Categories,
      });
    } else {
      yield put({
        type: 'Get_Categories_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Categories_Error',
    });
  }
}

function* getUser(action) {
  try {
    const data={
      customerId:action.customerId
    }
    const response = yield call(Api.fetchDataByGET2, action.url,data);
    console.log('GetUserProfile .....Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_User_Success',
        payload: response.CustomerProfile,
      });
      action.navigation.navigate('MyCustomerDetail')
    } else {
      yield put({
        type: 'Get_User_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_User_Error',
    });
  }
}

function* getPurchase(action) {
  try {
    const data={
      CustomerId:action.CustomerId,
      PartnerId:action.PartnerId
    }
    const response = yield call(Api.fetchDataByGET2, action.url,data);
    console.log('Purchase History ....Response',response);
    if (response.success==true) {
      yield put({
        type: 'Get_Purchase_Success',
        payload: response.PurchaseHistoryItems,
      });
    } else {
      yield put({
        type: 'Get_Purchase_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Purchase_Error',
    });
  }
}



function* getLoyalty(action) {
  try {
    const data={
      customerId:action.customerId
    }
    const response = yield call(Api.fetchDataByGET2, action.url,data);
    console.log('Loyalty Get Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Loyalty_Success',
        payload: response.PartnerPoint,
      });
      action.navigation.navigate('Loyalty1')
    } else {
      yield put({
        type: 'Get_Loyalty_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Loyalty_Error',
    });
  }
}




function* getCustomer(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('GetCustomersByPartnerId,,,,...Customer List Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Customer_Success',
        payload: response.CustomersList,
      });
      action.navigation.navigate('Mycustomer')
    } else {
      yield put({
        type: 'Get_Customer_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Customer_Error',
    });
  }
}

function* getCategory(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno,
      Category:action.Category
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('GetPartnerProductsByCatalogueCategory....Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Category_Success',
        payload: response.GetProducts,
      });
      action.navigation.navigate('MyProductDetails', { PartnerProductlist: false })
    } else {
      yield put({
        type: 'Get_Category_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Category_Error',
    });
  }
}

function* getCategory1(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno,
      Category:action.Category
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('category Response......',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Category1_Success',
        payload: response.GetProducts,
      });
      action.navigation.navigate('CategoryDetails')
    } else {
      yield put({
        type: 'Get_Category1_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Category1_Error',
    });
  }
}


function* getNetwork(action) {
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    if (response.success == true) {
      console.log('my Supplier List on My Network .....',response);
      yield put({
        type: 'Get_Network_Success',
        payload: response.MyNetworkSuppliers,
      });
      action.navigation.navigate('MyNetworks')
    } else {
      yield put({
        type: 'Get_Network_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Network_Error',
    });
  }
}

function* getNetwork1(action) {
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('My Supplier Network .....Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Network1_Success',
        payload: response.MyNetworkSuppliers,
      });
      // action.navigation.navigate('MyNetworks')
    } else {
      yield put({
        type: 'Get_Network1_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Network1_Error',
    });
  }
}


function* getSent(action) {
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('GetSupplierSentRequests......Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Sent_Success',
        payload: response.Suppliers,
      });
      action.navigation.navigate('SentRequest')
    } else {
      yield put({
        type: 'Get_Sent_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Sent_Error',
    });
  }
}

function* getRejected(action) {
  try {
    const data={
      Srno: action.SrNo,
      RejectReason: action.RejectReason
    }
    const response = yield call(Api.fetchDataByPOST1, action.url,data);
    if (response.data.success == true) {
      console.log('Rejected  data are ..Rejected time',response.data);
      yield put({
        type: 'Get_Rejected_Success',
        payload: response.data,
      });
    } else {
      console.log('this is working');
      yield put({
        type: 'Get_Rejected_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Rejected_Error',
    });
  }
}


function* getRemoveSentRequst(action) {
  // console.log('virend000098',action);
  try {
    const data={
      Srno: action.srno,
      RejectReason: action.RejectReason
    }
    const response = yield call(Api.fetchDataByPOST1, action.url,data);

    // console.log('',response);
    if (response.data.success == true) {

       console.log('GetRemoveSentRequst.....Response',response);

      yield put({
        type: 'get_RemoveSupplierFromNetwork_Success',
        payload: response.data,
      });
      action.navigation.navigate('MyNetwork1',{screen:'MyNetworks'})
      // action.navigation.navigate('MyNetworks')
    } else {
      console.log('this is working');
      yield put({
        type: 'Get_Rejected_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'get_RemoveSupplierFromNetwork_Success',
    });
  }
}



function* getAccepted(action) {
  try {
    const data= {
     Srno:action.SrNo,
      IsShowinRetailerApp:action.IsShowinRetailerApp

    }
    const response = yield call(Api.fetchDataByPOST1, action.url,data);
    if (response.data.success == true) {
      console.log('accepted data are ...accepted time',response.data);
      yield put({
        
        type: 'Get_Accepted_Success',
        payload: response.data,
      });
    } else {
      console.log('gdgg');
      yield put({
        type: 'Get_Accepted_Error',
      });
    }
  } catch (error) {
    console.log('dggg',error);
    yield put({
      type: 'Get_Accepted_Error',
    });
  }
}

function* getProfile(action) {
  try {
    const data={
      supplierSrno:action.supplierSrno
    }
    const response = yield call(Api.fetchDataByGET1, action.url,data);
    console.log('Partner Profile ............Response',response);
     if (response.success == true) {
      yield put({
        type: 'Get_Profile_Success',
        payload: response,
      });

      action.navigation.navigate('MyNetwork1',{screen:'PartnerProfile'})
    } else {
      yield put({
        type: 'Get_Profile_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Profile_Error',
    });
  }
}

function* getFeedback(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('FeedBack.......Response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Feedback_Success',
        payload: response.Feedback,
      });
      action.navigation.navigate('Feedback')
    } else {
      yield put({
        type: 'Get_Feedback_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Feedback_Error',
    });
  }
}

function* addCollection(action) {
 console.log('collection Adding',action);
  try {
    const data={
      PartnerSrno:action.PartnerSrno,
      Tagline:action.Tagline,
      Description:action.Description,
      IsActive:action.IsActive,
      BranchSrNo:action.BranchSrNo,
      CollectionId:action.CollectionId,
      Name:action.Name,
      CollectionImage:action.CollectionImage


    }
    const response = yield call(Api.fetchDataByPOST1, action.url,data);
    console.log("collection not condicton check bt given all response ",response);
    if (response.data.success == true) {
      console.log('collection we added ...then give response succes',response);
      Toast.show('collection added successfully ')
      yield put({
        type: 'Add_Collection_Success',
        // payload:response.data
      });
     
      action.navigation.navigate( "Home1" , { screen:'MyCatalogue'
        })
    } else {
      Toast.show('collection Not Added ')
      yield put({
        type: 'Add_Collection_Error',
      });
    }
  } catch (error) {
    console.log('erreeee',error);
    yield put({
      type: 'Add_Collection_Error',
    });
  }
}

function* addProduct(action) {
console.log('Added Product ....by action ',action);
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByPOST, action.url,data);
    console.log('Added product Response Given....',response);
    if (response.success == true) {
      yield put({
        type: 'Add_Product_Success',
      });
      // action.navigation.navigate('Feedback')
    } else {
      yield put({
        type: 'Add_Product_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Add_Product_Error',
    });
  }
}

function* getGold(action) {
  try {
    const data={
      PartnerId:action.PartnerId
    }
    const response = yield call(Api.fetchDataByGET, action.url,action.PartnerId);
    if (response.success == true) {
      yield put({
        type: 'Get_Gold_Success',
        payload: response.IBJAratesList,
      });
      // action.navigation.navigate('Feedback')
    } else {
      yield put({
        type: 'Get_Gold_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Gold_Error',
    });
  }
}

function* searchJeweller(action) {
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByPOST, action.url,data);
    console.log('this is response',response);
    if (response.success == true) {
      yield put({
        type: 'Search_Jewellers_Success',
        payload: response,
      });
    } else {
      console.log('this is working');
      yield put({
        type: 'Search_Jewellers_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Search_Jewellers_Error',
    });
  }
}

function* getSupplier(action) {
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is  aaaa',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Supplier_Success',
        payload: response.SupplierRequestList,
      });
    } else {
      yield put({
        type: 'Get_Supplier_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Supplier_Error',
    });
  }
}

function* pendingRequest(action) {
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is responserrrrr',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Pending_Success',
        payload: response.SupplierRequestList,
      });
      action.navigation.navigate('PendingRequest')

    } else {
      yield put({
        type: 'Get_Pending_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Pending_Error',
    });
  }
}


function* getGraphicalNotification(action) {
  try {
    const response = yield call(Api.fetchDataByGET, action.url);
    if (response.success == true) {
      yield put({
        type: 'Get_Graphical_Success',
        payload: response,
      });
    } else {
      yield put({
        type: 'Get_Graphical_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Graphical_Error',
    });
  }
}
function* getAllNotification(action) {
  try {
    const data = {
      partnerSrno: action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('notification................12',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Allnotification_Success',
        payload: response,
      });
      // action.navigation.navigate('PendingRequest')
    } else {
      yield put({
        type: 'Get_Allnotification_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Graphical_Error',
    });
  }
}

function* PartnerCatalogue(action) {
  try {
    const data={
      SupplierSrNo:action.SupplierSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is user respons22',response,data);
    if (response.success == true) {
      yield put({
        type: 'Partner_Catalogue_Success',
        payload: response,
      });
    } else {
      yield put({
        type: 'Partner_Catalogue_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Partner_Catalogue_Error',
    });
  }
}

function* PartnersCatalogue(action) {
  try {
    const data = {
      PartnerSrno: action.PartnerSrno,
      SupplierSrNo: action.supplierId,
      Category: action.Category
    }
    const response = yield call(Api.fetchDataByGET, action.url, data);
    if (response.success == true) {

      yield put({
        type: 'GetPartners_Catalogue_Success',
        payload: response,
      });
      action.navigation.navigate('MyProductDetails',{PartnerProductlist:true})
    } else {
      yield put({
        type: 'GetPartners_Catalogue_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'GetPartners_Catalogue_Error',
    });
  }
}
function* Allsupplier(action) {
  console.log('virenda252', action);
 
  try {
    const data={
      PartnerSrno:action.PartnerSrno,
     
    }
       
    const response = yield call(Api.fetchDataByGET1, action.url,data);
    console.log('virenda252', response);
    if (response.success == true) {
      yield put({
        type: 'Get_Allsupplier_Success',
        payload: response.data,
      });
    } else {
      yield put({
        type: 'Get_Allsupplier_Error',
      });
    }
  } catch (error) {
    console.log("errrrrr",error);
    yield put({
      type: 'Get_Allsupplier_Error',
    });
  }
}

function* getProdcutCategories(action) {
  console.log('acvbx',action)
  try {
    const data={
      PartnerSrno:action.PartnerSrno,
    }
   
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is 0000',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Catalogcategories_Success',
        payload: response.Categories,
      });
    } else {
      yield put({
        type: 'Get_Catalogcategories_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_Catalogcategories_Error',
    });
  }
}
function* getProdcutDetail(action) {
 
  try {
    const data={
     
      PartnerId:action.PartnerId,
      ProductId:action.ProductId,
    }
  
    const response = yield call(Api.fetchDataByGET, action.url,data);
   
    if (response.success == true) {
      yield put({
        type: 'Get_Detail_Success',
        payload: response,
      });
      action.navigation.navigate('SubCategory',{Network:true})
    } else {
      yield put({
        type: 'Get_Detail_Error',
      });
    }
  } catch (error) {
    console.log('edd',error);
    yield put({
      type: 'Get_Detail_Error',
    });
  }
}

function* getProdcut1Detail(action) {
 console.log('here is get details log',action);
  try {
    const data={

      ProductId:action.ProductId,
    }
  
    const response = yield call(Api.fetchDataByGET, action.url,data);
  
    if (response.success == true) {
     
      console.log('here is get details log12',response);
      yield put({
        type: 'Get_GetProductDetail_Success',
        payload: response,
      });
       action.navigation.navigate('SubCategory',{Network:false})
    } else {
      yield put({
        type: 'Get_GetProductDetail_Error',
      });
    }
  } catch (error) {
    console.log('edd',error);
    yield put({
      type: 'Get_Detail_Error',
    });
  }
}

function* getStates(action) {
  //console.log('vkm.',action)
  try {
   
    const response = yield call(Api.fetchDataByGET3, action.url);
   // console.log('vkm...',response);

    if (response.data.success == true) {
    //  console.log('vkm...',response);
      yield put({
        type: 'Get_State_Success',
        payload: response.data,
      });
    } else {
      yield put({
        type: 'Get_State_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_State_Error',
    });
  }
}
function* getCitys(action) {
 // console.log('vkm.11',action)
  try {
    const data={
     stateId:action.stateId 
    }
    const response = yield call(Api.fetchDataByGET4, action.url,data);
  //console.log('vkm...',response.data.success);

    if (response.data.success === true) {
     // console.log('vkm...',response);
      yield put({
        type: 'Get_CitiesByState_Success',
        payload: response.data,
      });
    } else {
      yield put({
        type: 'Get_CitiesByState_Error',
       
      });
    }
  } catch (error) {
    console.log('vkm',error);
    yield put({
      type: 'Get_State_Error',
    });
  }
  
}

function* getMetals(action) {
   console.log('vkm.11',action)
   try {
     const data={
      GroupName:action.GroupName
     }
     const response = yield call(Api.fetchDataByGET4, action.url,data);
   //console.log('vkm...',response.data.success);
 
     if (response.data.success === true) {
       console.log('vkm...',response.data);
       yield put({
         type: 'Get_LookupData_Success',
         payload: response.data,
       });
     } else {
       yield put({
         type: 'Get_LookupData_Error',
        
       });
     }
   } catch (error) {
     console.log('vkm',error);
     yield put({
       type: 'Get_LookupData_Error',
     });
   }
   
 }

 function* getcategoryDataDetail(action) {
  try {
    const data={
     
      PartnerId:action.PartnerId,
     
    }
  
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('get Fav Product detail,,,,',response);

    if (response.success == true) {
      // console.log('category detail data .....    .  . ',response.RetailerFavProduct.map((item)=>{
      //    console.log('category detail data ..... 333232',item.ProductDetails.Description)
      //   //  ProductDetails.ProductImageList.map((item1)=>{
      //   //   console.log('category detail data ..... viru...',`${'https://devappapi.olocker.in/'}${item1.ImageLocation}`);
      //   // }));
      // }));
      yield put({
        type: 'Get_PartnerFavProduct_Success',
        payload: response,
      });
        // action.navigation.navigate('SubCategory',{Network:false})
    } else {
      yield put({
        type: 'Get_PartnerFavProduct_Error',
      });
    }
  } catch (error) {
    console.log('edd',error);
    yield put({
      type: 'Get_PartnerFavProduct_Error',
    });
  }
}
function* getDownloadByData(action) {
  console.log('downloaddd getDownloadByData ',action);
  try {
    const data={
      PartnerSrNo:action.PartnerSrNo,
      FromDate:action.FromDate,
      ToDate:action.ToDate
    }
    console.log('download by Data Get Report',data);
    const response = yield call(Api.fetchDataByGET6, action.url,data);

    if (response.success == true) {
      console.log('download by Data Get Report',response);

      yield put({
        type: 'Get_GetReportForAppDownload_Success',
        payload: response,
      });
       
    } else {
      console.log('jxjcjz');
      yield put({
        type: 'Get_GetReportForAppDownload_Error',
      });
    }
  } catch (error) {
    console.log('error by',error);
    yield put({
      type: 'Get_GetReportForAppDownload_Error',
    });
  }
}
function* getDownloadByData1(action) {
  console.log('downloaddd getDownloadByData ',action);
  try {
    const data={
      PartnerSrNo:action.PartnerSrNo,
      FromDate:action.FromDate,
      ToDate:action.ToDate
    }
    console.log('download by Data Get Report',data);
    const response = yield call(Api.fetchDataByGET6, action.url,data);

    if (response.success == true) {
      console.log('download by Data Get Report',response);

      yield put({
        type: 'Get_GetReportForAppDownload1_Success',
        payload: response,
      });
       
    } else {
      console.log('jxjcjz');
      yield put({
        type: 'Get_GetReportForAppDownload1_Error',
      });
    }
  } catch (error) {
    console.log('error by',error);
    yield put({
      type: 'Get_GetReportForAppDownload1_Error',
    });
  }
}



function* getAddLoyalty(action) {
  console.log('Loyalty Adding',action);
   try {
     const data={
      PlanTypeId:action.PlanTypeId,
      PartnerId:action.PartnerId,
      Points:action.Points,
      StartDate:action.StartDate,
      EndDate:action.EndDate,
      PlanName:action.PlanName
 
     }
    //  console.log('data........',data);
     const response = yield call(Api.fetchDataByPOST1, action.url,data);
     console.log("Loyalty added Response",response);
     if (response.data.success == true) {
       Toast.show('Loyalty added successfully ')
       yield put({
         type: 'Get_AddUpdatePlanDetails_Success',
       });
       action.navigation.navigate('Loyalty1')

     } else {
      Toast.show('Loyalty Not AddUpdatePlanDetails ')
       yield put({
         type: 'Get_AddUpdatePlanDetails_Error',
       });
     }
   } catch (error) {
     console.log('erreeee',error);
     yield put({
       type: 'Get_AddUpdatePlanDetails_Error',
     });
   }
 }
 

 function* getLoyaltyType(action) {
  try {
    const response = yield call(Api.fetchDataByGET, action.url);
    if (response.success == true) {
      yield put({
        type: 'Get_GetLoyalityTypes_Success',
        payload: response,
      });
    } else {
      yield put({
        type: 'Get_GetLoyalityTypes_Error',
      });
    }
  } catch (error) {
    yield put({
      type: 'Get_GetLoyalityTypes_Error',
    });
  }
}


function* updateProduct(action) {
  console.log('updated Product ....by action ',action);
    try {
      const data={
        PartnerSrno:action.PartnerSrno
      }
      const response = yield call(Api.fetchDataByPOST, action.url,data);
      console.log('updated product Response Given....',response);
      if (response.success == true) {
        yield put({
          type: 'Update_Product_Success',
        });
        // action.navigation.navigate('Feedback')
      } else {
        yield put({
          type: 'Update_Product_Error',
        });
      }
    } catch (error) {
      yield put({
        type: 'Update_Product_Error',
      });
    }
  }

export default function* authSaga() {
  yield takeEvery('Update_Product_Request',updateProduct)
  yield takeEvery('User_Login_Request',doLogin)
  yield takeEvery('Get_GetLoyalityTypes_Request',getLoyaltyType)
  yield takeEvery('Get_Request_AddUpdatePlanDetails',getAddLoyalty)
  yield takeEvery('Get_Request_GetReportForAppDownload1',getDownloadByData1)
  yield takeEvery('Get_Request_GetReportForAppDownload',getDownloadByData)
  yield takeEvery('Get_PartnerFavProduct_Request',getcategoryDataDetail)
 yield takeEvery('Get_LookupData_Request',getMetals)
  // yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('Get_Product_Request',getProducts)
  yield takeEvery('Get_Products_Request', getProduct)
  yield takeEvery('Get_SupplierProducts_Request',getSupplierProduct)
  yield takeEvery('Get_Collection_Request',getCollection)
  yield takeEvery('Get_Customer_Request',getCustomer)
  yield takeEvery('Get_Category_Request',getCategory)
  yield takeEvery('Get_Category1_Request',getCategory1)
  // yield takeEvery('Get_Network_Request',getNetwork)
  yield takeEvery('Get_Network1_Request',getNetwork1)
  yield takeEvery('Get_Sent_Request',getSent)
  yield takeEvery('Get_Accepted_Request',getAccepted)
  yield takeEvery('Get_Rejected_Request',getRejected)
  yield takeEvery('Get_Profile_Request',getProfile)
  yield takeEvery('Get_Feedback_Request',getFeedback)
  yield takeEvery('Add_Collection_Request',addCollection)
  yield takeEvery('Add_Product_Request',addProduct)
  yield takeEvery('Get_Gold_Request',getGold)
  yield takeEvery('Search_Jewellers_Request',searchJeweller)
  yield takeEvery('Get_Supplier_Request',getSupplier)
  yield takeEvery('Get_Categories_Request',getCategories)
  yield takeEvery('Get_User_Request',getUser)
  yield takeEvery('Get_Purchase_Request',getPurchase)
  yield takeEvery('Get_Loyalty_Request',getLoyalty)
  yield takeEvery('Get_Pending_Request',pendingRequest)
  yield takeEvery('Get_Graphical_Request',getGraphicalNotification)
  yield takeEvery('Partner_Catalogue_Request',PartnerCatalogue)
  yield takeEvery('GetPartners_Catalogue_Request', PartnersCatalogue)
  yield takeEvery('Get_Allsupplier_Request',Allsupplier)
  yield takeEvery('Get_Catalogcategories_Request',getProdcutCategories)
  yield takeEvery('Get_Detail_Request',getProdcutDetail)
  yield takeEvery('Get_GetProductDetail_Request',getProdcut1Detail)
  yield takeEvery('Get_Allnotification_Request',getAllNotification)
  yield takeEvery('Get_State_Request',getStates)
  yield takeEvery('Get_CitiesByState_Request',getCitys)
  yield takeEvery('get_RemoveSupplierFromNetwork_Request',getRemoveSentRequst)

}
// navigation.navigate('Feedback')