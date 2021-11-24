import { commands, ExtensionContext, Uri} from "vscode";
import { upload } from "./commands/upload";

export function activate(context: ExtensionContext) {
	
	const uploadByMenu = commands.registerCommand('axios-upload.ajax',  (uri : Uri, items: Uri[]) => upload(context, items || [uri])); 
	console.log("EXTENSION");
	context.subscriptions.push(uploadByMenu);
}
export function deactivate() {}
