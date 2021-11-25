import { on } from "events";
import { commands, ExtensionContext, Uri} from "vscode";
import { select, upload } from "./commands/upload";
export function activate(context: ExtensionContext) {
	
	const uploadByMenu = commands.registerCommand('axios-upload.ajax',  (uri : Uri, items: Uri[]) => upload(context, items || [uri]));
	const uploadByMenuSelect = commands.registerCommand('axios-upload.ajaxx',  (uri : Uri, items: Uri[]) => select(context, items || [uri])); 
	console.log("EXTENSION");
	context.subscriptions.push(uploadByMenu,uploadByMenuSelect);
}
export function deactivate() {}

