import { workspace, WorkspaceConfiguration, window, Uri } from "vscode";
import * as fs from "fs-extra";
import axios from "axios";
import * as FormData from "form-data";
import { axiospost } from "./axiosPost";

export async function sendFormData(filePath: string, resources: string[]) {

    const form = new FormData();

    var stream = fs.createReadStream(filePath);
    form.append("file",stream);
    const axiosRequestConfig = {
      headers: {...form.getHeaders() },
      //timeout: 5000,
    };
    stream.resume();
    console.log('RESUME');
    stream.on('end',()=>{
      console.log('form');
      axiospost(url, form);
      console.log("axiospost 호출 끝");
      //return stream;
      //console.log(form);
      //axios.post(url, form, axiosRequestConfig);
    });
    
    //console.log(stream);
    // let stream = fs.createReadStream(filePath)
    // .on('data', function(chunk){
    //   console.log(stream);
    // })
    // .on('open', function (row){
    //   console.log(stream);
    //   let data = stream;
    //   console.log("Data = ");
    //   console.log(data);
    //   form.append('file',data);
    //   console.log(form);
      
    // })//end call 안되는 이유
    // .on('end', function (){
    //   console.log(stream);
    //   // form.append('file',stream);
    //   // axios.post(url, form, axiosRequestConfig);
    // })

    //readable
    // stream.on('readable', ()=>{
		// 	console.log('readable:'+stream)
    //   //return stream;
    //   // return axios.post(url, form, axiosRequestConfig);
		// });
		// stream.on('end', () => {
		// 	console.log('end')
		// });

    const url = 'http://127.0.0.1:8000/rest_api_test/';

    // form.append('file',stream);

    

    // return axios.post(url, form, axiosRequestConfig);

  }