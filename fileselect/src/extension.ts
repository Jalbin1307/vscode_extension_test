import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "fileselect" is now active!');

	let disposable = vscode.commands.registerCommand('fileselect.helloWorld', () => {
		vscode.workspace.workspaceFile
		vscode.window.showInformationMessage('Hello World from Fileselect!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
