import * as vscode from 'vscode';
import {Uri,ExtensionContext,workspace} from 'vscode';
import * as fs from "fs-extra";
import * as FormData from "form-data";
import axios from 'axios';


var FileUploader = {
	apiEndpoint: "https://mysite-tscvl.run.goorm.io/rest_api_test/",
	fileField: "file",
	formData: {	
		__manifest : {},
				__workspace : {} },
  };

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "fileselect" is now active!');

	let disposable = vscode.commands.registerCommand('fileselect.onnxupload', (context: ExtensionContext, items: Uri[]) => {
		
		const data = { ...FileUploader.formData }
		
		const resources = items.map((uri) => uri.path);
		data.__manifest = resources;
		
		const wsFolders = workspace.workspaceFolders;

		if (wsFolders && wsFolders.length) {
			const { uri, name } = wsFolders[0];
			data.__workspace = { path: uri.path, name };
		}

		let www = items[0].path;
		const form = new FormData();
		// form.append('FileUploader.fileField', createReadStream(www));
		form.append('file', fs.createReadStream(www));
		

		const axiosRequestConfig = {
			headers: {...form.getHeaders() },
			timeout: 5000,
		  };

		
		axios.post(FileUploader.apiEndpoint, form, axiosRequestConfig);


	


		// axios
  		// .post('https://mysite-tscvl.run.goorm.io/rest_api_test/', 
		//    form ,
		//   {headers: form.getHeaders()}
		//   )
  		// .then(res => {
    	// 	console.log(`statusCode: ${res.status}`);
    	// 	console.log(res);
  		// })
  		// .catch(error => {
		// 	console.error(error);
		// })



		vscode.window.showInformationMessage('Hello World from Fileselect!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
