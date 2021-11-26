import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "sendformdata" is now active!');

	let disposable = vscode.commands.registerCommand('sendformdata.helloWorld', () => {		
		vscode.window.showInformationMessage('Hello World from SendFormData!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
