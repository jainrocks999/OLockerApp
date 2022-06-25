import { YellowBox } from 'react-native';
import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
//Login
function* doLogin(action) {
  try {
    const data={
        
    }
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    console.log('this is run time response', response);
    if (response.status == 200) {
      yield put({
        type: 'User_Login_Success',
        payload: response.data,
      });
      action.navigation.replace('Main');
    } else {
      yield put({
        type: 'User_Login_Error',
      });
    }
  } catch (error) {
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
    console.log('this is response100',response);
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


function* getCollection(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is response',response);
    if (response.success == true) {
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
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is response',response);
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
    console.log('this is response',response);
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
    console.log('this is narendra is testing here',response);
    if (response.success==false) {
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
    console.log('this is response',response);
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
    console.log('this is response11111',response);
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
    console.log('wwwwwwwwwww',error);
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
    console.log('this is response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Category_Success',
        payload: response.GetProducts,
      });
      action.navigation.navigate('MyProductDetails')
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
    console.log('this is response',response);
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
    console.log('this is response',response);
    if (response.success == true) {
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
    console.log('vkm',response);
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
    console.log('this is response',response);
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
  console.log('a12229', action);
  try {
    const data={
      Srno: action.SrNo,
      RejectReason: action.RejectReason
    }
    const response = yield call(Api.fetchDataByPOST1, action.url,data);
    console.log('this is11232',response);
    if (response.data.success == true) {
      yield put({
        type: 'Get_Rejected_Success',
        payload: response,
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

function* getAccepted(action) {
  console.log('a122295',action);
  try {
    const data= {
     Srno:action.SrNo,
      IsShowinRetailerApp:action.IsShowinRetailerApp

    }
    console.log('11119',data);
    const response = yield call(Api.fetchDataByPOST1, action.url,data);
    // console.log('this is respo111133',response);
    if (response.data.success == true) {
      console.log('this is respo113', response);
      yield put({
        
        type: 'Get_Accepted_Success',
        payload: response,
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
    console.log('this is response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Profile_Success',
        payload: response,
      });
      action.navigation.navigate('PartnerProfile')
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
    console.log('this is response',response);
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
  console.log('action22222',action);
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByPOST, action.url,data);
    console.log('this is response',response);
    console.log('dataaaaaaaa',data);
    if (response.success == true) {
      yield put({
        type: 'Add_Collection_Success',
      });
      // action.navigation.navigate('Feedback')
    } else {
      yield put({
        type: 'Add_Collection_Error',
      });
    }
  } catch (error) {
    console.log('erreeee',error);
    yield put({
      type: 'Add_Collection_Error12',
    });
  }
}

function* addProduct(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByPOST, action.url,data);
    console.log('this is response5',response);
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
    console.log('this is response111111',response);
    console.log('this is response1111 data',data);
    console.log('this is response1111 data data', action.PartnerId);
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
        payload: response.Notifications,
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
  console.log('wawawa',action);
  try {
    const data = {
      partnerSrno: action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('wawawaa', response);
    if (response.success == true) {
      console.log('wawawaaaa', response);
      yield put({
        type: 'Get_Allnotification_Success',
        payload: response,
      });
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
      PartnerSrNo:action.PartnerSrNo,
      Category:action.Category,
      SupplierSrNo:action.SupplierSrNo
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is user response',response);
    if (response.success == true) {
      yield put({
        type: 'Partner_Catalogue_Success',
        payload: response.GetProducts,
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
function* Allsupplier(action) {

 
  try {
    const data={
      PartnerSrNo:JSON.stringify(action.PartnerSrNo),
     
    }
    console.log("ablc",action.PartnerSrno);
    console.log("ablc data",action.url);
    
    const response = yield call(Api.fetchDataByGET1, action.url,action.PartnerSrno);
    console.log('this is1234',response);
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
    console.log('ggg',action.PartnerSrno);
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
  console.log('abvb',action);
  try {
    const data={
     
      PartnerId:action.PartnerId,
      ProductId:action.ProductId,
    }
    console.log('1130211',data);
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('th wsw',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Detail_Success',
        payload: response,
      });
      action.navigation.navigate('SubCategory')
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



export default function* authSaga() {

  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('Get_Product_Request',getProducts)
  yield takeEvery('Get_Collection_Request',getCollection)
  yield takeEvery('Get_Customer_Request',getCustomer)
  yield takeEvery('Get_Category_Request',getCategory)
  yield takeEvery('Get_Category1_Request',getCategory1)
  yield takeEvery('Get_Network_Request',getNetwork)
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
  yield takeEvery('Get_Allsupplier_Request',Allsupplier)
  yield takeEvery('Get_Catalogcategories_Request',getProdcutCategories)
  yield takeEvery('Get_Detail_Request',getProdcutDetail)
  yield takeEvery('Get_Allnotification_Request',getAllNotification)
}
// navigation.navigate('Feedback')