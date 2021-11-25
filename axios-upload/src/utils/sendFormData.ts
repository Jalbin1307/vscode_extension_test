import { workspace, WorkspaceConfiguration, window, Uri, Position } from "vscode";
import * as fs from "fs-extra";
import * as FormData from "form-data";
import { Stream } from "stream";

export async function sendFormData(filePath: string, resources: string[]) {

    const form = new FormData();

    const results = [];
    const url = 'http://127.0.0.1:8000/rest_api_test/';

    
    const axiosRequestConfig = {
      headers: {...form.getHeaders() },
      //timeout: 5000,
    };
    console.log("CREATE READ STREAM");
    // console.log(stream);
    // form.append('file',fs.createReadStream(filePath));
    const stream = fs.createReadStream(filePath);
    return stream;
    


    // return new Promise((resolve, reject)=>{
    //   stream.on('error', function(err){
    //     console.log('File read ERROR');
    //     resolve(reject);
    //   });
    //   stream.on('end', function(){
    //     console.log('ReadStream END');
    //     resolve(stream);
    //   });
    // });
  }