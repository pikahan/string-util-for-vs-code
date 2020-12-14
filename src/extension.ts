import { CommandHelper } from './commandHelper';
import * as vscode from 'vscode';
import { runCustomFunctionInJsonStringMode, runCustomFunctionInNormalMode, toLowerCamelCase, toUpperSnakeCase } from './util';



export function activate(context: vscode.ExtensionContext) {
	const helper = new CommandHelper(context);
	helper.replaceText('toLowerCamelCase', toLowerCamelCase);
	helper.replaceText('toUpperSnakeCase', toUpperSnakeCase);
	helper.registerTextEditorCommand('runCustomFunctionInNormalMode', runCustomFunctionInNormalMode)
	helper.registerTextEditorCommand('runCustomFunctionInJsonStringMode', runCustomFunctionInJsonStringMode)
}

export function deactivate() {}
