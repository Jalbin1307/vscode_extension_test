import { workspace, WorkspaceConfiguration, window, Uri } from "vscode";
import * as fs from "fs-extra";
import axios from "axios";
import * as FormData from "form-data";

export async function sendFormData(items : Uri) {

    const form = new FormData();
    const filePath= items.path;
    const url = 'http://127.0.0.1:8000/rest_api_test/';

    form.append('file',fs.createReadStream(filePath));

    return form;
  }