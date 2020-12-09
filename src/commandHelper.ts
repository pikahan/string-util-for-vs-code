import { TextEditor, TextEditorEdit } from "vscode";
import * as vscode from 'vscode';
import { EXTENSION_NAME } from "./constant";
import { getTextInfoFromSelection } from "./util";

export class CommandHelper {
    private context: vscode.ExtensionContext;
    constructor(ctx: vscode.ExtensionContext) {
        this.context = ctx;
    }
    registerTextEditorCommand(command: string, callback: (textEditor: TextEditor, edit: TextEditorEdit, ...args: any[]) => void) {
        this.context.subscriptions.push(vscode.commands.registerTextEditorCommand(`${EXTENSION_NAME}.${command}`, callback))
    }

    replaceText(command: string, textProcessor: (text: string) => string) {
        this.registerTextEditorCommand(command, (textEditor, edit) => {
            if (textEditor.selection.isEmpty) { // 未选中文本直接返回
                return;
            }
            const { text, textRange } = getTextInfoFromSelection(textEditor);
            edit.replace(textRange, textProcessor(text));
        })
    }

}

