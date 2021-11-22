import axios from "axios";
import * as FormData from "form-data";

export async function axiospost(url:string, form:FormData){
    const axiosRequestConfig = {
        headers: {...form.getHeaders() },
        //timeout: 5000,
      };

    console.log("post 했다");
    console.log(form);
    axios.post(url,form,axiosRequestConfig);
    console.log("???");
}