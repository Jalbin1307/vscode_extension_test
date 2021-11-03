import * as vscode from 'vscode';
import {Uri} from 'vscode';
import { request } from 'https';
//import { request } from 'http';
import * as FormData from 'form-data';
import { appendFile, createReadStream, createWriteStream, WriteStream } from 'fs';
import { privateEncrypt } from 'crypto';


const multer = require('multer');


const fileStream = createWriteStream('C://Users//USER//Downloads//file.txt');



export function activate(context: vscode.ExtensionContext) {
	
	console.log('Extension is now active!');	

	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		const req = request({
			host : 'mysite-tscvl.run.goorm.io',
			port : '80',
			method : 'GET',
			path : '/rest_api_test/',
		},
		response => {
			response.pipe(fileStream);
		}
		);
		req.end();
		

		vscode.window.showInformationMessage('Hello11 World');
	});
	context.subscriptions.push(disposable);

	// GET method를 사용해 서버와 통신
	let req = vscode.commands.registerCommand('helloworld.request', () => {
		const req = request(
			{
			  host: 'mysite-xyu.run.goorm.io',
			  port: '80',
			  method: 'GET'
			},
			response => {

			  // response.pipe(fileStream);
			  vscode.window.showInformationMessage('HTTP Request!');
			}
		  );
		  req.end();
	});
	context.subscriptions.push(req);
	// POST method를 사용해 서버와 통신
	let req2 = vscode.commands.registerCommand('helloworld.request2', () =>{
		const readStream = createReadStream('C:\\Users\\USER\\Downloads\\model.connx');
		const form = new FormData();
		form.append('file', readStream);
		// form.append('name','test');
		const req = request(
				{
					host : 'mysite-tscvl.run.goorm.io',
					port : '80',
					method : 'POST',
					path : '/rest_api_test/',
					// eslint-disable-next-line @typescript-eslint/naming-convention
					headers : {"Content-Type" : "multipart/form-data"}			
				},
				response => {
					vscode.window.showInformationMessage("Test");
				}
			);



		//기존 사용
		// const req = request(
		// 	{
		// 		host : 'mysite-tscvl.run.goorm.io',
		// 		port : '80',
		// 		method : 'POST',
		// 		path : '/rest_api_test/',
		// 		headers : {"Content-Type" : "form-data"}			
		// 	},
		// 	response => {
		// 		vscode.window.showInformationMessage("Test");
		// 	}
		// );
		form.pipe(fileStream);
		req.end();
	});
	context.subscriptions.push(req2);

	// await axios.post(url, body, {headers});




	
	let convert = vscode.commands.registerCommand('helloworld.txtconvert', (args : any) => {
    
    });
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}