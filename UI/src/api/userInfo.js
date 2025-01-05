import axios from "axios";
import { API_BASE_URL, getHeaders } from "./constant";
import content from '../data/content.json';

export const fetchUserDetails = async ()=>{
    const url = API_BASE_URL + '/api/user/profile';
    try{
        const response = await axios(url,{
            method:"GET",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        const userInfo = content?.userInfo;
        return userInfo;
        // throw new Error(err);
    }
}

export const addAddressAPI = async (data)=>{
    const url = API_BASE_URL + '/api/address';
    try{
        const response = await axios(url,{
            method:"POST",
            data:data,
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        return data;
        // throw new Error(err);
    }
}

export const deleteAddressAPI = async (id)=>{
    const url = API_BASE_URL + `/api/address/${id}`;
    try{
        const response = await axios(url,{
            method:"DELETE",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        const address = content?.userInfo?.addressList.filter((address) => address?.id === id);
        return address;
        // throw new Error(err);
    }
}

export const fetchOrderAPI = async ()=>{
    const url = API_BASE_URL + `/api/order/user`;
    try{
        const response = await axios(url,{
            method:"GET",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        const orders = content?.orders;
        return orders;
        // throw new Error(err);
    }
}

export const cancelOrderAPI = async (id)=>{
    const url = API_BASE_URL + `/api/order/cancel/${id}`;
    try{
        const response = await axios(url,{
            method:"POST",
            headers:getHeaders()
        });
        return response?.data;
    }
    catch(err){
        const order = content?.orders.filter((o) => o?.id === id);    
        return order;
        // throw new Error(err);
    }
}