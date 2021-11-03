import { window, workspace, ExtensionContext, Uri } from "vscode";
import * as fs from "fs-extra";
import { sendFormData } from "../utils/sendFormData";

export async function upload(context: ExtensionContext, items: Uri[], opts: any = {}) {
    let axiosRes;

    axiosRes = await sendFormData();

}