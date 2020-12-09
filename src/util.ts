import { camelCase, snakeCase } from 'lodash';
import { Range, TextEditor } from 'vscode';

export const getTextInfoFromSelection = (textEditor: TextEditor) => {
    const textRange = new Range(textEditor.selection.start, textEditor.selection.end);
    return {
        text: textEditor.document.getText(textRange),
        textRange
    }
}
export const toLowerCamelCase = (str: string) => camelCase(str);
export const toUpperSnakeCase = (str: string) => snakeCase(str).toUpperCase();
