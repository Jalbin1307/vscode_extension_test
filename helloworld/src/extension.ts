// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// vscode.languages.registerHoverProvider('onnx',{
// 	provideHover(document,position,token){
// 		return new vscode.Hover("I am onnx");
// 	}
// });

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "helloworld" is now active!');
	


	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from HelloWorld!');
	});
	context.subscriptions.push(disposable);

	let convert = vscode.commands.registerCommand('helloworld.txtconvert', () => {
        vscode.window.showInformationMessage('txt convert!');
    });
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}