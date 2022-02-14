import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
//Login
function* doLogin(action) {
  console.log('this is action', action.pin,action.mobile);
  try {
    const data = new FormData();
    if (action.email) {
      data.append('email', action.email);
    } else if (action.mobile) {
      data.append('mobile', action.mobile);
    }
    data.append('pin', action.pin);
    data.append('device_token', action.device_token);
    data.append('device_type', action.device_type);
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    console.log('this is run time response', response);
    if (response.status == 200) {
      yield put({
        type: 'User_Login_Success',
        payload: response.data,
      });
         
      // Toast.show(response.messages);
      action.navigation.replace('Main');
    } else {
      // Toast.show(response.messages);
      yield put({
        type: 'User_Login_Error',
      });
    }
  } catch (error) {
    // Toast.show(error.messages);
    yield put({
      type: 'User_Login_Error',
    });
  }
}

//mLogin



export default function* authSaga() {

  yield takeEvery('User_Login_Request', doLogin);
  
}
