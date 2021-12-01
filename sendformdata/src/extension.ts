import * as vscode from 'vscode';
import { Uri } from 'vscode';
import FormData = require('form-data');
const fs = require('fs');

// var XMLHttpRequest = require('xhr2');
var request = require('request');

export function activate(context: vscode.ExtensionContext) {
	
	
	console.log('Congratulations, your extension "sendformdata" is now active!');

	let disposable = vscode.commands.registerCommand('sendformdata.helloWorld', (uri: Uri, items : Uri[]) => {

		// fs.createWriteStream("/Users/hongjin-u/onnx_test_f/test.zip");

		var formData = new FormData();
		// formData.append("foo","123");
		// formData.append("acount",123456);
		formData.append("file",fs.createReadStream(items[0].path));
		console.log(formData);

		//http://127.0.0.1:8000/
		//https://mysite-tscvl.run.goorm.io/
		formData.submit('http://127.0.0.1:8000/rest_api_test/', function(err, res){
			if(err) throw err;
			if(res){
				
				console.log(res);
				console.log("RES 받음");
				var wstream = fs.createWriteStream("/Users/hongjin-u/onnx_test_f/test.zip");
				// fs.writeFile("/Users/hongjin-u/onnx_test_f/connx.zip", res);
				res.on('data',function(data){
					wstream.write(data);
				});
				res.on('end',function(){
					wstream.end();
				});
				res.on('error',function(err){
					console.log('something is wrong');
					wstream.close();
				});

				console.log("RES 성공");
				
				
			}

			console.log('Done');
		});


		// var request = new XMLHttpRequest();
		// request.open("POST", "http://127.0.0.1:8000/rest_api_test/");
		// request.send(formData);


		
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
