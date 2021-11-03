import { workspace, WorkspaceConfiguration } from "vscode";
import * as fs from "fs-extra";
import axios from "axios";
import * as FormData from "form-data";

export async function sendFormData() {
    const form = new FormData();
    const filePath= 'C://Users//USER//Downloads//file.txt';
    const url = '127.0.0.1/rest_api_test/';
    form.append('file',fs.createReadStream(filePath));

    return axios.post(url, form);
  }