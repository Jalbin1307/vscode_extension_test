import axios from "axios";
import { commands, ExtensionContext, Uri, window } from "vscode";
import { upload } from "./commands/upload";
import * as FormData from 'form-data';
import { appendFile, createReadStream, createWriteStream, WriteStream } from 'fs';
import * as fs from "fs-extra";
import * as path from 'path';
import { Http2ServerRequest } from "http2";


// const multer = require("multer");
// const up = multer({ dest: 'C://Users//USER//Downloads//file.txt' });
// axios.defaults.headers.common['X-CSRF-TOKEN'] = "6ccgtjclyMiAYMQpblICoweJrnfvPUYCArGwWynQfomk8JJM4gN3TR49mSkwr3si";


export function activate(context: ExtensionContext) {
	
	let areq = commands.registerCommand('axios-upload.ajax', () => {
		// $.ajax({
		// 	url:'https://mysite-tscvl.run.goorm.io/rest_api_test/',
		// 	method:"GET"
		// });
		window.showInformationMessage('Hello World areq');

	});

	let req = commands.registerCommand('axios-upload.upload', () => {
		const article = createReadStream('C://Users//USER//Downloads//mnist-8.onnx','utf-8');
		const writeStream = createWriteStream('C://Users//USER//Downloads//file1.txt');
		var form = new FormData();
		// form.append('foo', '123');
		form.append('file', article);
		form.pipe(writeStream);

		const formHeaders = form.getHeaders();
		formHeaders["Content-Length"] = form.getLengthSync();

		const config = {headers: formHeaders};

		// var fdata = {
		// 	form			
		// };
		window.showInformationMessage('ONNX UPLOAD TEST');
		axios({
			method:"post",
			url:'https://mysite-tscvl.run.goorm.io/rest_api_test/',
			data :form,
			headers: form.getHeaders()
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
		const mac = createReadStream('/Users/hongjin-u/mnist-8.onnx');
		const article = createReadStream('C://Users//USER//Downloads//mnist-8.onnx','utf-8');
		const exampleFile = fs.createReadStream(path.join(__filename, "C://Users//USER//mnist-8.onnx"));

		const formData = new FormData();

		formData.append('file', article, {filepath:'C:/Users/USER/Downloads', filename:'mnist-8.onnx'});

		
		// var data = {
		// 	'content':form
		// };
		
		axios.post(
			'http://mysite-tscvl.run.goorm.io/rest_api_test/',
			formData,
			{headers: formData.getHeaders()},
			
			);

		window.showInformationMessage('Hello World');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
