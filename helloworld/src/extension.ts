import * as vscode from 'vscode';
import {Uri} from 'vscode';
import { request } from 'http';
 
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Extension is now active!');	

	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World');
	});
	context.subscriptions.push(disposable);

	// GET method를 사용해 서버와 통신
	let req = vscode.commands.registerCommand('helloworld.request', () => {
		const req = request(
			{
			  host: 'mysite-xyu.run.goorm.io',
			  port: '80',
			  method: 'GET',
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
		const req = request(
			{
				host : '127.0.0.1',
				port : '8000',
				method : 'POST',
			},
			response => {
				vscode.window.showInformationMessage('POST Request');
			}
		);
		req.end();
	});
	context.subscriptions.push(req2);




	
	let convert = vscode.commands.registerCommand('helloworld.txtconvert', (args : any) => {
    
    });
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}