import { workspace, WorkspaceConfiguration, window } from "vscode";
import * as fs from "fs-extra";
import axios from "axios";
import * as FormData from "form-data";

export async function sendFormData(wsConfig: WorkspaceConfiguration) {
    const { apiEndpoint, httpHeaders, fileField, userDefinedData = {} } = wsConfig;
    const data = { ...userDefinedData };

    const form = new FormData();
    const filePath= 'C://Users//USER//Downloads//file.txt';
    const url = '127.0.0.1:8000/rest_api_test/';
    form.append('file',fs.createReadStream(filePath));

    const axiosRequestConfig = {
        headers: { ...httpHeaders, ...form.getHeaders() },
        timeout: 5000,
      };

    return axios.post(url, form, axiosRequestConfig);
  }