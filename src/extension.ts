import { CommandHelper } from './commandHelper';
import * as vscode from 'vscode';
import { getTextInfoFromSelection, toLowerCamelCase } from './util';

export function activate(context: vscode.ExtensionContext) {
	const helper = new CommandHelper(context);
	helper.replaceText('toLowerCamelCase', toLowerCamelCase);
}

export function deactivate() {}
