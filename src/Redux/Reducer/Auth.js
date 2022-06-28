import Addproduct from "../../screens/Main/Addproduct";

initialstate = {
  ProductList:[],
  CollectionList:[],
  CustomerList:[],
  Category:[],
  NetworkList:[],
  ProfileData:'',
  SentRequestData:[],
  AcceptedRequestData:[],
  RejectedRequestData:[],
  CategoryDetail:[],
  Feedback:[],
  NetworkList1:[],
  Gold:[],
  SupplierList:[],
  Categories:[],
  User:'',
  Loyalty:[],
  RequestList:[],
  PurchaseHistory:[],
  GraphicalNotification:[],
  Catalogue:[],
  Collection:[],
  Addproduct:[],
  Allsupplier:[],
  Myproduct:[],
  Detail:[],
  PartnerC:[],
  AllNotification:[],
  Products:[],
  SupplierProduct:[],
  PartnerCatalog:[]
};
export default (state = initialstate, action) => {
  switch (action.type) { 
    case 'Get_SupplierProducts_Request':
      return{ ...state,isFetching:true};
    case 'Get_SupplierProducts_Success':
      return { ...state, isFetching: false, SupplierProduct: action.payload };
    case 'Get_SupplierProducts_Error':
      return { ...state, isFetching: false };

    case 'Get_Products_Request':
      return { ...state, isFetching: true };
    case 'Get_Products_Success':
      return { ...state, isFetching: false, Products: action.payload };
    case 'Get_Products_Error':
      return { ...state, isFetching: false };
    case 'Get_Product_Request':
      return { ...state, isFetching: true };
    case 'Get_Product_Success':
      return { ...state, isFetching: false, ProductList: action.payload };
    case 'Get_Product_Error':
      return { ...state, isFetching: false };

    case 'Get_User_Request':
      return { ...state, isFetching: true };
    case 'Get_User_Success':
      return { ...state, isFetching: false, User: action.payload };
    case 'Get_User_Error':
      return { ...state, isFetching: false };
    
    case 'Get_Purchase_Request':
      return { ...state, isFetching: true };
    case 'Get_Purchase_Success':
      return { ...state, isFetching: false, PurchaseHistory: action.payload };
    case 'Get_Purchase_Error':
      return { ...state, isFetching: false };

    case 'Get_Loyalty_Request':
      return { ...state, isFetching: true };
    case 'Get_Loyalty_Success':
      return { ...state, isFetching: false, Loyalty: action.payload };
    case 'Get_Loyalty_Error':
      return { ...state, isFetching: false };
    

    case 'Get_Collection_Request':
      return { ...state, isFetching: true };
    case 'Get_Collection_Success':
      return { ...state, isFetching: false, CollectionList: action.payload };
    case 'Get_Collection_Error':
      return { ...state, isFetching: false };

    case 'Get_Categories_Request':
      return { ...state, isFetching: true };
    case 'Get_Categories_Success':
      return { ...state, isFetching: false, Categories: action.payload };
    case 'Get_Categories_Error':
     return { ...state, isFetching: false };
    
    
    case 'Get_Customer_Request':
      return { ...state, isFetching: true };
    case 'Get_Customer_Success':
      return { ...state, isFetching: false, CustomerList: action.payload };
    case 'Get_Customer_Error':
      return { ...state, isFetching: false };
      
    case 'Get_Category_Request':
      return { ...state, isFetching: true };
    case 'Get_Category_Success':
      return { ...state, isFetching: false, Category: action.payload };
    case 'Get_Category_Error':
      return { ...state, isFetching: false };

    case 'Get_Category1_Request':
      return { ...state, isFetching: true };
    case 'Get_Category1_Success':
      return { ...state, isFetching: false, CategoryDetail: action.payload };
    case 'Get_Category1_Error':
     return { ...state, isFetching: false };

    // case 'Get_Network_Request':
    //   return { ...state, isFetching: true };
    // case 'Get_Network_Success':
    //   return { ...state, isFetching: false, NetworkList: action.payload };
    // case 'Get_Network_Error':
    //  return { ...state, isFetching: false };
    
     case 'Get_Network1_Request':
      return { ...state, isFetching: true };
    case 'Get_Network1_Success':
      return { ...state, isFetching: false, NetworkList1: action.payload };
    case 'Get_Network1_Error':
     return { ...state, isFetching: false };
    

    case 'Get_Profile_Request':
      return { ...state, isFetching: true };
    case 'Get_Profile_Success':
      return { ...state, isFetching: false, ProfileData: action.payload };
    case 'Get_Profile_Error':
      return { ...state, isFetching: false };
    
    case 'Get_Sent_Request':
      return { ...state, isFetching: true };
    case 'Get_Sent_Success':
      return { ...state, isFetching: false, SentRequestData: action.payload };
    case 'Get_Sent_Error':
    return { ...state, isFetching: false };
    
    case 'Get_Accepted_Request':
      return { ...state, isFetching: true };
    case 'Get_Accepted_Success':
      return { ...state, isFetching: false, AcceptedRequestData: action.payload };
    case 'Get_Accepted_Error':
    return { ...state, isFetching: false };

    case 'Get_Rejected_Request':
      return { ...state, isFetching: true };
    case 'Get_Rejected_Success':
      return { ...state, isFetching: false, RejectedRequestData: action.payload };
    case 'Get_Rejected_Error':
    return { ...state, isFetching: false };

    case 'Get_Feedback_Request':
      return { ...state, isFetching: true };
    case 'Get_Feedback_Success':
      return { ...state, isFetching: false, Feedback: action.payload };
    case 'Get_Feedback_Error':
      return { ...state, isFetching: false };
    
    case 'Add_Collection_Request':
      return { ...state, isFetching: true };
    case 'Add_Collection_Success':
      return { ...state, isFetching: false ,Collection: action.payload};
    case 'Add_Collection_Error':
      return { ...state, isFetching: false };
    
    case 'Add_Product_Request':
      return { ...state, isFetching: true };
    case 'Add_Product_Success':
      return { ...state, isFetching: false ,Addproduct: action.payload};
    case 'Add_Product_Error':
      return { ...state, isFetching: false };

    case 'Get_Gold_Request':
      return { ...state, isFetching: true };
    case 'Get_Gold_Success':
      return { ...state, isFetching: false, Gold: action.payload };
    case 'Get_Gold_Error':
      return { ...state, isFetching: false };
     
    case 'Search_Jewellers_Request':
      return { ...state, isFetching: true };
    case 'Search_Jewellers_Success':
      return { ...state, isFetching: false,};
    case 'Search_Jewellers_Error':
      return { ...state, isFetching: false };

    case 'Get_Supplier_Request':
      return { ...state, isFetching: true };
    case 'Get_Supplier_Success':
      return { ...state, isFetching: false, SupplierList: action.payload };
    case 'Get_Supplier_Error':
      return { ...state, isFetching: false };
    
    case 'Get_Pending_Request':
      return { ...state, isFetching: true };
    case 'Get_Pending_Success':
      return { ...state, isFetching: false, RequestList: action.payload };
    case 'Get_Pending_Error':
      return { ...state, isFetching: false };

    case 'Get_Graphical_Request':
      return { ...state, isFetching: true };
    case 'Get_Graphical_Success':
      return { ...state, isFetching: false, GraphicalNotification: action.payload };
    case 'Get_Graphical_Error':
      return { ...state, isFetching: false };

    case 'Get_Allnotification_Request':
      return { ...state, isFetching: true };
    case 'Get_Allnotification_Success':
      return { ...state, isFetching: false, AllNotification: action.payload };
    case 'Get_Allnotification_Error':
      return { ...state, isFetching: false };
    case 'GetPartners_Catalogue_Request':
      return { ...state, isFetching: true };
    case 'GetPartners_Catalogue_Success':
      return { ...state, isFetching: false, PartnerCatalog: action.payload };
    case 'GetPartners_Catalogue_Error':
      return { ...state, isFetching: false };

    case 'Partner_Catalogue_Request':
      return { ...state, isFetching: true };
    case 'Partner_Catalogue_Success':
      return { ...state, isFetching: false, Catalogue: action.payload };
    case 'Partner_Catalogue_Error':
    return { ...state, isFetching: false };
    
    case 'Get_Allsupplier_Request':
      return { ...state, isFetching: true };
    case 'Get_Allsupplier_Success':
      return { ...state, isFetching: false, Allsupplier: action.payload };
    case 'Get_Allsupplier_Error':
    return { ...state, isFetching: false };

    case 'Get_Catalogcategories_Request':
      return { ...state, isFetching: true };
    case 'Get_Catalogcategories_Success':
      return { ...state, isFetching: false, Myproduct: action.payload };
    case 'Get_Catalogcategories_Error':
      return { ...state, isFetching: false };

      case 'Get_Detail_Request':
      return { ...state, isFetching: true };
    case 'Get_Detail_Success':
      return { ...state, isFetching: false, Detail: action.payload };
    case 'Get_Detail_Error':
      return { ...state, isFetching: false };
      
      case 'Get_PartnerC_Request':
      return { ...state, isFetching: true };
    case 'Get_PartnerC_Success':
      return { ...state, isFetching: false, PartnerC: action.payload };
    case 'Get_PartnerC_Error':
      return { ...state, isFetching: false };
     
    default:
      return state;
  }
};
