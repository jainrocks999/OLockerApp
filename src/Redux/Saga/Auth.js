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
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is response',response);
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
    console.log('this is response',response);
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
    console.log('this is response',response);
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
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByPOST, action.url);
    console.log('this is response',response);
    if (response.success == true) {
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
  try {
    const data={
      partnerSrNo:action.partnerSrNo
    }
    const response = yield call(Api.fetchDataByPOST, action.url);
    console.log('this is response',response);
    if (response.success == true) {
      yield put({
        type: 'Get_Accepted_Success',
        payload: response,
      });
    } else {
      yield put({
        type: 'Get_Accepted_Error',
      });
    }
  } catch (error) {
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
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByPOST, action.url,data);
    console.log('this is response',response);
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
    yield put({
      type: 'Add_Collection_Error',
    });
  }
}

function* addProduct(action) {
  try {
    const data={
      PartnerSrno:action.PartnerSrno
    }
    const response = yield call(Api.fetchDataByPOST, action.url,data);
    console.log('this is response',response);
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
    const response = yield call(Api.fetchDataByGET, action.url,data);
    console.log('this is response',response);
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
    console.log('this is response',response);
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
    console.log('this is response',response);
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
  yield takeEvery('Get_Loyalty_Request',getLoyalty)
  yield takeEvery('Get_Pending_Request',pendingRequest)

}
// navigation.navigate('Feedback')