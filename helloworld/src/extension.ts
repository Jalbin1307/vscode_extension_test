// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {Uri} from 'vscode';
import { request } from 'http';
import { createWriteStream } from 'fs';
 
const fileStream = createWriteStream('.\request2.txt');   // Extension 사용자의 폴더에 저장할 수 있는 방법 찾아봐야함 +현재는 절대 경로로만 가능



export function activate(context: vscode.ExtensionContext) {
	
	console.log('Extension is now active!');	


	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World');
	});
	context.subscriptions.push(disposable);

	// GET method를 사용해 서버와 통신
	let filereq = vscode.commands.registerCommand('helloworld.request', () => {
		const req = request(
			{
			  host: 'mysite-xyu.run.goorm.io',
			  port: '80',
			  method: 'GET',
			},
			response => {
			  response.pipe(fileStream);
			  vscode.window.showInformationMessage('HTTP Request!');
			}
		  );
		  req.end();
	});
	context.subscriptions.push(filereq);

	
	let convert = vscode.commands.registerCommand('helloworld.txtconvert', (args : any) => {
		const filePath: string | undefined = args.filePath;
		const file = filePath ? Uri.file(filePath) : undefined;
		vscode.window.showInformationMessage('File Path : '+args);
		//const fileStream = createWriteStream(filePath+"\\request.txt");

		// vscode.window.showInformationMessage(fileP);
    
    });
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}