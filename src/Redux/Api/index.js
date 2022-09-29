import axios from 'axios';
import Constants from '../Constants';

export default class Api {
  static fetchDataByPOST1 = async (url, data) => {
    try {
      // console.log('ssaaaaa',Constants.MainUrl + url);
      const response = await axios({
        method: 'POST',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl + url,
        data:data,
      });
      return response;
    } catch (error) {
      // console.log('ffsfsf',error);
      throw error;
    }
  };


  static fetchDataByPOST = async (url, data) => {
    // console.log('Login detail',Constants.MainUrl + url);
    try {
      const response = await axios({
        method: 'POST',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl + url,
        params:data,
      });
      // console.log('response.....',params);
      return response;
    } catch (error) {
      console.log('why eorror fatch by login',error);
      throw error;
    }
  };

  static fetchDataByGET = async (url,data) => {

    try {
      // console.log('virendra',data,Constants.MainUrl + url);
      const response = await axios({
        method: 'GET',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl + url,
        params:data        
      });
      // console.log('data downloadby data',response.data);
      return response.data;
    } catch (error) {
      console.log('error123',error);
      throw error;
    }
  };
  static fetchDataByGET6 = async (url,data) => {

    try {
      console.log('fetchDataByGET6 data',data);
      const response = await axios({
        method: 'GET',
        headers: {
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5',
          'Content-Type': 'application/json'
        },
        url: Constants.MainUrl + url,
        params:data        
      });
      console.log('data downloadby data GetReportForAppDownload',response.data);
      return response.data;
    } catch (error) {
      console.log('GetReportForAppDownload error',error);
      throw error;
    }
  };
  static fetchDataByGET2 = async (url,data) => {
    try {
      const response = await axios({
        method: 'GET',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl2 + url,
        params:data        
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByGET1 = async (url,data) => {
    console.log("bbbb",url,data);
    console.log('aaaaa',Constants.MainUrl1 + url);
    try {
      const response = await axios({
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json', 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl1 + url,
        params:data 
               
      });
      return response.data;
      
    } 
    catch (error) {
      // console.log('vvvvv',error);
      throw error;
    }
  };
  static fetchDataByGET3 = async (url) => {
    // console.log("vkm",url);
    // console.log('vkm12300',Constants.MainUrl3 + url);
    try {
      const response = await axios({
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json', 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl3 + url,
               
      });
      return response;
      
    } 
    catch (error) {
      console.log('vvvvv',error);
      throw error;
    }
  };
  static fetchDataByGET4 = async (url,data) => {
    // console.log("vkm2211",url,data);
    // console.log('vkm00',Constants.MainUrl3 + url);
    try {
      const response = await axios({
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json', 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl3 + url,
        params:data     
      });
      console.log('virendra',response.data);
      return response;
      
    } 
    catch (error) {
      console.log('vvvvv',error);
      throw error;
    }
  };
 
}
