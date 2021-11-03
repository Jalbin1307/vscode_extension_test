import axios from "axios";
import { commands, ExtensionContext, Uri, window } from "vscode";
import { upload } from "./commands/upload";
import * as FormData from 'form-data';
import * as fs from "fs-extra";
import { appendFile, createReadStream, createWriteStream, WriteStream } from 'fs';

// const multer = require("multer");
// const up = multer({ dest: 'C://Users//USER//Downloads//file.txt' });
// axios.defaults.headers.common['X-CSRF-TOKEN'] = "6ccgtjclyMiAYMQpblICoweJrnfvPUYCArGwWynQfomk8JJM4gN3TR49mSkwr3si";


export function activate(context: ExtensionContext) {
	

	let req = commands.registerCommand('axios-upload.upload', () => {
		const article = createReadStream('C://Users//USER//Downloads//file.txt','utf-8');
		const form = new FormData();
		form.append('file', article);
		axios({
			method:"post",
			url:'mysite-tscvl.run.goorm.io/rest_api_test/',
			data:form,
			// eslint-disable-next-line @typescript-eslint/naming-convention
			headers:{"Content-Type":"multipart/form-data"},
		})
		.then(function (response){
			console.log(response);
		})
		.catch(function (response){
			console.log(response);
		});
	});

	//context.subscriptions.push(uploadByMenu);

	let disposable = commands.registerCommand('axios-upload.helloWorld', () => {
		//const readStream = createReadStream('C://Users//USER//Downloads//model.connx');
		const article = createReadStream('C://Users//USER//Downloads//file.txt','utf-8');
		const form = new FormData();
		form.append('file', article);
		
		// const req = axios({
		// 	url: 'http://127.0.0.1:8000/rest_api_test/',
		// 	method:'GET',
		// });
		axios.post(
			'mysite-tscvl.run.goorm.io/rest_api_test/',
			form,
			{headers: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"Content-Type" : "form-data"} 
	   });

		window.showInformationMessage('Hello World');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
