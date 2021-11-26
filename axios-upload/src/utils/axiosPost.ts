import axios from "axios";
import * as FormData from "form-data";
import { Stream } from "stream";

export async function axiospost(url:string, stream : Stream){
 
  const form = new FormData();
  console.log(stream);

  form.append('file', stream);
  
  const axiosRequestConfig = {
        headers: {...form.getHeaders() },
        //timeout: 5000,
      };
    
  console.log(form);
      
  axios.post(url, form, axiosRequestConfig);

  console.log("post 했다");
  //console.log(stream);
}