import axios from 'axios';
import Constants from '../Constants';

export default class Api {
  static fetchDataByPOST = async (url, data) => {
    try {
      const response = await axios({
        method: 'POST',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl + url,
        params:data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByGET = async (url,data) => {
    try {
      const response = await axios({
        method: 'GET',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl + url,
        params:data        
      });
      return response.data;
    } catch (error) {
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
    try {
      const response = await axios({
        method: 'GET',
        headers: { 
          'MobileAppKey': 'EED26D5A-711D-49BD-8999-38D8A60329C5'
        },
        url: Constants.MainUrl1 + url,
        params:data        
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
 
}
