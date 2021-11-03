import { commands, ExtensionContext, Uri, window } from "vscode";
import { upload } from "./commands/upload";

export function activate(context: ExtensionContext) {
	
	const uploadByMenu = commands.registerCommand('axios-upload.upload',(uri: Uri, items: Uri[])=>upload(context,items || [uri]));

	context.subscriptions.push(uploadByMenu);

	let disposable = commands.registerCommand('axios-upload.helloWorld', () => {
		window.showInformationMessage('Hello World from Axios_upload!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
