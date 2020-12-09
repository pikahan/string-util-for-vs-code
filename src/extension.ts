import * as vscode from 'vscode';
import { toLowerCamelCase } from './util';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerTextEditorCommand('faster-enum.toLowerCamelCase', (textEditor, edit) => {
			if (textEditor.selection.isEmpty) { // 未选中文本直接返回
				return;
			}
			const textRange = new vscode.Range(textEditor.selection.start, textEditor.selection.end);
			const text = textEditor.document.getText(textRange);
			edit.replace(textRange, toLowerCamelCase(text));
		})
	)
}

export function deactivate() {}
