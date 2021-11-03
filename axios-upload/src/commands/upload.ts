import { window, workspace, ExtensionContext, Uri } from "vscode";
import * as fs from "fs-extra";
import { sendFormData } from "../utils/sendFormData";

export async function upload(opts:any={}) {
    let axiosRes;
    const wsConfig = workspace.getConfiguration("axios-upload");
    
    axiosRes = await sendFormData({
        ...wsConfig,
        ...opts,
      });
    
    window.showInformationMessage("뭐야");
    return axiosRes;

}