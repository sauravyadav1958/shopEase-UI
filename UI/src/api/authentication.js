import axios from "axios";
import { API_BASE_URL } from "./constant"

// async: function will be executed without blocking the main program flow
export const loginAPI = async (body)=>{
    const url = API_BASE_URL + '/api/auth/login';
    try{

        //await: pause the execution of async function until a Promise is resolved or rejected
        // promise: represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const registerAPI = async (body)=>{
    const url = API_BASE_URL + '/api/auth/register';
    try{
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const verifyAPI = async (body)=>{
    const url = API_BASE_URL + '/api/auth/verify';
    try{
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}