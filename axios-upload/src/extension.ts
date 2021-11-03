import axios from "axios";
import { commands, ExtensionContext, Uri, window } from "vscode";
import { upload } from "./commands/upload";
import * as FormData from 'form-data';
import { appendFile, createReadStream, createWriteStream, WriteStream } from 'fs';

export function activate(context: ExtensionContext) {
	

	let req = commands.registerCommand('axios-upload.upload', () => {
		upload();
	});

	//context.subscriptions.push(uploadByMenu);

	let disposable = commands.registerCommand('axios-upload.helloWorld', () => {
		//const readStream = createReadStream('C://Users//USER//Downloads//model.connx');
		//const form = new FormData();
		//const url = '127.0.0.1:8000/rest_api_test/';
		//form.append('file', readStream);
		const req = axios({
			url: 'http://127.0.0.1:8000/rest_api_test/',
			method:'GET',
		});
		//axios.post('http://127.0.0.1:8000/rest_api_test/',form);

		window.showInformationMessage('Hello World');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
