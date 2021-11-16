import * as vscode from 'vscode';
import {Uri,ExtensionContext} from 'vscode';
import { request } from 'http';
import * as FormData from 'form-data';
import { appendFile, createReadStream, createWriteStream, WriteStream } from 'fs';
import { privateEncrypt } from 'crypto';






export function activate(context: vscode.ExtensionContext) {
	

	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', (context: ExtensionContext, items: Uri[]) => {

		//let ww = context.storageUri?.path;
		
		let www = items[0].path;
		const form = new FormData();
		form.append('file', createReadStream(www));
		form.append('test','app');
		if(vscode.workspace.workspaceFolders !== undefined){
			let wf = vscode.workspace.workspaceFolders[0].uri.path;
    		let f = vscode.workspace.workspaceFolders[0].uri.fsPath;
			let ff = vscode.workspace.getConfiguration;

			const message = `YOUR-EXTENSION: folder: ${wf} - ${f} : ${ff}` ;

			vscode.window.showInformationMessage(message);
		const fileStream = createWriteStream(`${wf}/file.txt`);
		
		const req = request({
			host : 'mysite-tscvl.run.goorm.io',
			port : '80',
			method : 'GET',
			path : '/rest_api_test/',
		},
		response => {
			response.pipe(fileStream);
		}
		);
		req.end();
		}

		vscode.window.showInformationMessage('Hello11 World');
	});
	context.subscriptions.push(disposable);

	// GET method를 사용해 서버와 통신
	let req = vscode.commands.registerCommand('helloworld.request', () => {
		const req = request(
			{
			  host: 'mysite-xyu.run.goorm.io',
			  port: '80',
			  method: 'GET'
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
		const readStream = createReadStream('C:\\Users\\USER\\Downloads\\model.connx');
		const form = new FormData();
		form.append('file', readStream);
		form.append('name','test');
	
		const req = request(
				{
					host : 'mysite-tscvl.run.goorm.io',
					port : '80',
					method : 'POST',
					path : '/rest_api_test/',
					headers : form.getHeaders(),		
				},
				response => {
					vscode.window.showInformationMessage("TT : Post");
				}
			);
		req.write(form);
		//form.pipe(req);

		req.end();
	});
	context.subscriptions.push(req2);

	// await axios.post(url, body, {headers});




	
	let convert = vscode.commands.registerCommand('helloworld.txtconvert', (args : any) => {
    
    });
	context.subscriptions.push(convert);
}

// this method is called when your extension is deactivated
export function deactivate() {}