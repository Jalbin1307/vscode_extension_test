import * as vscode from 'vscode';
import * as FormData from 'form-data';
import { createReadStream} from 'fs';
import axios from 'axios';


export function activate(context: vscode.ExtensionContext) {
	
	
	console.log('Congratulations, your extension "fileupload" is now active!');

	
	let disposable = vscode.commands.registerCommand('fileupload.helloWorld', async () => {
		// const url = "127.0.0.1:8000/rest_api_test/";
		// axios.get("url")
    	// .then(function (response) {
		// 	vscode.window.showInformationMessage('Hello World from Fileupload!');
        //  // response  
    	// }).catch(function (error) {
		// 	vscode.window.showInformationMessage('Error');
        // // 오류발생시 실행
    	// }).then(function() {
        // // 항상 실행
    	// });

		// try {
		// 	const data = await axios.get("url");
		// } catch {
		// 	// 오류 발생시 실행
		// 	vscode.window.showInformationMessage('Error2');
		// }

		vscode.window.showInformationMessage('Hello World from Fileupload!');
	});
	context.subscriptions.push(disposable);


	let req = vscode.commands.registerCommand('fileupload.req', () => {
		// const headers = {'userID':'1234'};
		// var bodyFromData = new FormData();
		// //await bodyFromData.append('processID':'1234');
		// bodyFromData.append('foo','123');
		// // bodyFromData.append('file', createReadStream("/Users/hongjin-u/Documents/libe.xlsx"), "libe.xlsx");
		// const url = "https://mysite-tscvl.run.goorm.io/";

		// axios.post(url,
		// 	 bodyFromData,
		// 	 {headers:{'Content-Type': 'multipart/form-data'}});

		// console.log(req);


		vscode.window.showInformationMessage('Request!');
	});

	context.subscriptions.push(req);
}


export function deactivate() {}
