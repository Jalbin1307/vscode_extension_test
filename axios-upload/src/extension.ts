// import axios from "axios";
import { commands, ExtensionContext, Uri} from "vscode";
import { upload } from "./commands/upload";

export function activate(context: ExtensionContext) {
	
	const uploadByMenu = commands.registerCommand('axios-upload.ajax',  (uri : Uri, items: Uri[]) => upload(context, items || [uri])); 
	console.log("EXTENSION");
	context.subscriptions.push(uploadByMenu);
}
export function deactivate() {}
	//{
		

		// let www = items[0].path;
		// const data = new FormData();
		// let axiosRes = sendFormData(items[0]);

		

		//const stream = fs.createReadStream(www);
		
		// const DT = sendFormData(items[0]);
		// console.log(DT);
		
		// stream.on('readable', ()=>{
		// 	console.log('readable:')
		// 	data.append('file', stream);
		// 	console.log('123');
		// });
		// stream.on('end', () => {
		// 	console.log('end')
		// });

		



		//console.log(stream)


		//stack overflow code
		// var config = {
		// 	method: 'post',
		// 	//url: 'https://mysite-tscvl.run.goorm.io/rest_api_test/',
		// 	url : 'http://127.0.0.1:8000/rest_api_test/',
		// 	headers: { 
		// 	  'content-type': 'multipart/form-data', 
		// 	  ...data.getHeaders()
		// 	},
		// 	data : await sendFormData(items[0]),

		//   };

		// await axios(config)
		// .then(function (response: { data: any; }) {
		// 	console.log(JSON.stringify(response.data));
		//   })
		//   .catch(function (error: any) {
		// 	console.log(error);
		//   });;


		// 기존 코드
		// axios
  		// .post('https://mysite-tscvl.run.goorm.io/rest_api_test/', 
		//    form ,
		//   {headers: form.getHeaders()}
		//   )
  		// .then(res => {
    	// 	console.log(`statusCode: ${res.status}`);
    	// 	console.log(res);
  		// })
  		// .catch(error => {
		// 	console.error(error);
		// })
		// window.showInformationMessage('Hello World areq');

	// });

// 	context.subscriptions.push(uploadByMenu);

// 	let req = commands.registerCommand('axios-upload.upload', () => {
// 		const article = fs.createReadStream('C://Users//USER//Downloads//mnist-8.onnx','utf-8');
// 		const writeStream = fs.createWriteStream('C://Users//USER//Downloads//file1.txt');
// 		var form = new FormData();
// 		// form.append('foo', '123');
// 		form.append('file', article);
// 		form.pipe(writeStream);

// 		const formHeaders = form.getHeaders();
// 		formHeaders["Content-Length"] = form.getLengthSync();

// 		const config = {headers: formHeaders};

// 		// var fdata = {
// 		// 	form			
// 		// };
// 		window.showInformationMessage('ONNX UPLOAD TEST');
// 		// axios({
// 		// 	method:"post",
// 		// 	url:'https://mysite-tscvl.run.goorm.io/rest_api_test/',
// 		// 	data :form,
// 		// 	headers: form.getHeaders()
// 		// })
// 		// .then(function (response){
// 		// 	console.log(response);
// 		// })
// 		// .catch(function (response){
// 		// 	console.log(response);
// 		// });
// 	});

// 	//context.subscriptions.push(uploadByMenu);

// 	let disposable = commands.registerCommand('axios-upload.helloWorld', () => {
// 		//const readStream = createReadStream('C://Users//USER//Downloads//model.connx');
// 		const mac = fs.createReadStream('/Users/hongjin-u/mnist-8.onnx');
// 		const article = fs.createReadStream('C://Users//USER//Downloads//mnist-8.onnx','utf-8');
// 		const exampleFile = fs.createReadStream(path.join(__filename, "C://Users//USER//mnist-8.onnx"));

// 		const formData = new FormData();

// 		formData.append('file', article, {filepath:'C:/Users/USER/Downloads', filename:'mnist-8.onnx'});

		
// 		// var data = {
// 		// 	'content':form
// 		// };
		
// 		// axios.post(
// 		// 	'http://mysite-tscvl.run.goorm.io/rest_api_test/',
// 		// 	formData,
// 		// 	{headers: formData.getHeaders()},
			
// 		// 	);

// 		window.showInformationMessage('Hello World');
// 	});

// 	context.subscriptions.push(disposable);
// }


