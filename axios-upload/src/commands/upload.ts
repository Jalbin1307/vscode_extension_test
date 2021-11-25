import { window, workspace, ExtensionContext, Uri } from "vscode";
import * as fs from "fs-extra";
import { sendFormData } from "../utils/sendFormData";
import { Stream } from "stream";
import * as FormData from "form-data";
import axios from "axios";
import { axiospost } from "../utils/axiosPost";

export function upload(context: ExtensionContext, items: Uri[], opts: any = {}) {
    let axiosRes;
    const wsConfig = workspace.getConfiguration("axios-upload");
    
    let filePath = items[0].path;

    const url = 'http://127.0.0.1:8000/rest_api_test/';

    const form = new FormData();
    const resources = items.map((uri) => uri.path);
    
    // const st = async ()=>{
    //     return fs.createReadStream(filePath);
    // };
    const stReturn = async () => {
        const stream = await sendFormData(filePath,resources);
        // return await sendFormData(filePath,resources);
        console.log("STREAM 받아옴");
        console.log(stream);
        form.append('file',stream);
        console.log(form);
        return stream;
    };

    // let stream = await sendFormData(filePath, resources);
    // const stream : Stream  = fs.createReadStream(filePath);
    stReturn().then(value=>{
        console.log(value);
        form.append('file',value);
        console.log("return");
        console.log(form);
        return value;
        
        // console.log(value);
        const axiosRequestConfig = {
            // headers: {...form.getHeaders() },
            //timeout: 5000,
          };
        //const res = axios.post(url, value, axiosRequestConfig);
        // console.log(form);
        //axios.post(url, form, axiosRequestConfig);
        //const res2 = axios.post(url, value, axiosRequestConfig);
    });

    console.log("123");
}

export async function select(context:ExtensionContext, items: Uri[]) {
    try{
        const stream = await upload(context,items);
        console.log("select stream");
        console.log(stream);

    }catch(e){
        console.log("ERROR");
    }
    
}