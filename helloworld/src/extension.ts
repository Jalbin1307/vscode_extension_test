// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { request } from 'http';
import { createWriteStream } from 'fs';
 
const fileStream = createWriteStream('..\\test\\request2.txt');


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';


// @NgModule({
// 	imports:[
// 		BrowserModule,
// 		HttpClientModule,
// 	],
// 	declarations:[
// 		AppComponent,
// 	],
// 	bootstrap: [AppComponent]
// })
// export class AppModule{}


export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "helloworld123" is now active!');	


	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from 123HelloWorld456!');
	});
	context.subscriptions.push(disposable);

	let jinreq = vscode.commands.registerCommand('helloworld.request', () => {
		const req = request(
			{
			  host: 'jsonplaceholder.typicode.com',
			  path: '/todos/1',
			  method: 'GET',
			},
			response => {
			  response.pipe(fileStream);
			  vscode.window.showInformationMessage('HTTP Request!');
			}
		  );
		  req.end();
	});
	context.subscriptions.push(jinreq);

	let convert = vscode.commands.registerCommand('helloworld.txtconvert', () => {
		vscode.window.showInformationMessage('1231 convert!');
    
    });
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}