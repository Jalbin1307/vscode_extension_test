import { window, workspace, ExtensionContext, Uri } from "vscode";
import * as fs from "fs-extra";
import { sendFormData } from "../utils/sendFormData";

export async function upload(context: ExtensionContext, items: Uri[], opts: any = {}) {
    let axiosRes;

    const wsConfig = workspace.getConfiguration("axios-upload");
    
    const resources = items.map((uri) => uri.path);
    
    let filePath = items[0].path;

    // axiosRes = await sendFormData(filePath,resources);
    const stream = await sendFormData(filePath, resources);
    console.log(stream);
    console.log('123');
}