import { window, workspace, ExtensionContext, Uri } from "vscode";
import * as fs from "fs-extra";
import { sendFormData } from "../utils/sendFormData";
import { Stream } from "stream";
import * as FormData from "form-data";
import axios from "axios";
import { axiospost } from "../utils/axiosPost";
import { ReadStream } from "fs";

export async function upload(context: ExtensionContext, items: Uri[], opts: any = {}) {
    let axiosRes;
    const wsConfig = workspace.getConfiguration("axios-upload");
    
    let filePath = items[0].path;

    const url = 'http://127.0.0.1:8000/rest_api_test/';

    const form = new FormData();
    const resources = items.map((uri) => uri.path);


    // const st = async ()=>{
    //     return fs.createReadStream(filePath);
    // };

    // const stReturn = async () => {
    //     const stream = await st();
    //     console.log(stream);
    //     return stream;
    // };
    
    const stream : ReadStream  = fs.createReadStream(filePath);


    setTimeout(()=>{
        console.log(stream.bytesRead);
        if (stream.bytesRead > 0){
            form.append('file',fs.createReadStream(filePath));
            
            //axios.post(url, form, axiosRequestConfig);
            console.log(form);
        }
        console.log("stream");
        console.log(form);
    },3000);
    setTimeout(()=>{
        const axiosRequestConfig = {
            headers: {...form.getHeaders() },
            setTimeout : 6000
          };
        // axios.post(url, form, axiosRequestConfig);
    },5000);
    console.log("1243");


    // stReturn().then(value=>{
    //     // console.log(value);
    //     // form.append('file',value);
        
    //     // const res = axios.post(url, value, axiosRequestConfig);
    //     // console.log(form);
    //     // const res2 = axios.post(url, value, axiosRequestConfig);
    // });


    // async function appendfile(stream : ReadStream) {
    //     form.append('file',stream);
    //     console.log("appendfile called");
    //     console.log(stream.bytesRead);
    //     return form;
    // }

    // async function getfile() {
    //     const87\] stm = fs.createReadStream(filePath);
    //     con98sole.log("getfile called");
    //     return stm;        
    // }

    // async function pickFile() {
    //     const stream = await getfile();
    //     console.log(stream);
    //     console.log(stream.bytesRead);
    //     const form = await appendfile(stream);
    //     console.log(form);

    //     // await form.append('file', stream);
    //     // console.log(form);

    //     // if (stream.bytesRead > 0){
    //     //     const form = await appendfile(stream);
    //     // }
    //     // else{
    //     //     console.log(stream.bytesRead);
    //     // }

    //     const axiosRequestConfig = {
    //         headers: {...form.getHeaders() },
    //         // timeout: 5000,
    //       };
    //     // setTimeout(()=>axios.post(url, form, axiosRequestConfig),5000);
    //     return stream;
    // }
    // pickFile();
    // .then(appendfile)
    // .then(console.log);

    

    // console.log("123");
}

    


export async function select(context:ExtensionContext, items: Uri[]) {
    
    let filePath = items[0].path;

    const url = 'http://127.0.0.1:8000/rest_api_test/';

    async function getfile() {
        const stm = fs.createReadStream(filePath,{emitClose:false});
        return stm;        
    }

    async function pickFile() {
        const stream = await getfile();
        console.log(stream);
        await axiospost(url, stream);
    }

    pickFile();
 
}