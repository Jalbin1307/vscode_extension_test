import { workspace, WorkspaceConfiguration, window, Uri } from "vscode";
import * as fs from "fs-extra";
import axios from "axios";
import * as FormData from "form-data";

export async function sendFormData(filePath: string, resources: string[]) {

    const form = new FormData();

    const stream = fs.createReadStream(filePath)
    .on('open', function (row){
      console.log(stream);
      
    })//end call 안되는 이유
    .on('end', function (){
      console.log(stream);
      // form.append('file',stream);
      // axios.post(url, form, axiosRequestConfig);
    })

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

    const axiosRequestConfig = {
      headers: {...form.getHeaders() },
      timeout: 5000,
    };

    // return axios.post(url, form, axiosRequestConfig);

  }