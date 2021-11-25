import axios from "axios";
import * as FormData from "form-data";
import { Stream } from "stream";

export async function axiospost(url:string, form:FormData, stream : Stream){
    const axiosRequestConfig = {
        headers: {...form.getHeaders() },
        //timeout: 5000,
      };

    

    console.log("post 했다");
    console.log(stream);
}