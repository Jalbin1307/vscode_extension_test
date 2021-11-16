import * as vscode from 'vscode';
import {Uri,ExtensionContext} from 'vscode';
import FormData = require('form-data');
import { createReadStream } from 'fs';
import axios from 'axios';
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "fileselect" is now active!');

	let disposable = vscode.commands.registerCommand('fileselect.onnxupload', (context: ExtensionContext, items: Uri[]) => {
		let www = items[0].path;
		const form = new FormData();
		form.append('file', createReadStream(www));

		axios
  		.post('https://mysite-tscvl.run.goorm.io/rest_api_test/', 
		   form ,
		  {headers: form.getHeaders()}
		  )
  		.then(res => {
    		console.log(`statusCode: ${res.status}`);
    		console.log(res);
  		})
  		.catch(error => {
			console.error(error);
		})



		vscode.window.showInformationMessage('Hello World from Fileselect!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
