import * as vscode from 'vscode';
// import fetch, { Headers, RequestInit } from "node-fetch";
import FormData = require("form-data");
import * as fs from 'fs';
import * as path from 'path';
import { Meteor } from 'meteor/meteor';
import { fetch } from "meteor/fetch";
import { AbortController, AbortSignal } from 'abort-controller';

// import { Meteor } from 'meteor/meteor';
import { Headers, RequestInit } from "node-fetch";

export function activate(context: vscode.ExtensionContext) {
	
	
	console.log('Congratulations, your extension "agu" is now active!');

	let disposable = vscode.commands.registerCommand('agu.helloWorld', () => {
		const exampleFile = fs.createReadStream(path.join(__filename, "C://Users//USER//mnist-8.onnx"));
		
		const form = new FormData();
		form.append("file", exampleFile);

		var options = {content:form};

		const controller = new AbortController();

		const requestOptions: RequestInit = {
    		method: "POST",
    		body: form,
			port:80,
  		};

		fetch('https://mysite-tscvl.run.goorm.io/rest_api_test/',{ signal: controller.signal, ...options });

		

		// const data = await fetch('https://mysite-tscvl.run.goorm.io/rest_api_test/', requestOptions)
		// .then(response => response)
		// .then(result => console.log(result))
		// .catch(error => console.log("error", error));  

		vscode.window.showInformationMessage(exampleFile+'Hello World from Agu!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
