import { camelCase, snakeCase } from 'lodash';
import { Range, TextEditor, TextEditorEdit, window } from 'vscode';
import * as _ from 'lodash';

export const getTextInfoFromSelection = (textEditor: TextEditor) => {
    const textRange = new Range(textEditor.selection.start, textEditor.selection.end);
    return {
        text: textEditor.document.getText(textRange),
        textRange
    }
}

const getFunctionInfo = (str: string) => {
	const [name, ...args] = str.split(/(?<!\\)@/g).map(s => s.replace('\\@', '@'));
	const formattedArgs = args.map(arg => {
		let parseResult = parseFloat(arg);
		return isNaN(parseResult) ? arg : parseResult
	})
	return {
		name,
		args: formattedArgs,
	}
}

export const toLowerCamelCase = (str: string) => camelCase(str);
export const toUpperSnakeCase = (str: string) => snakeCase(str).toUpperCase();

enum Mode {
    JSON_STRING,
    NORMAL
}

export const runCustomFunction = _.curry((type: Mode, textEditor: TextEditor, edit: TextEditorEdit) => {
    const { text, textRange } = getTextInfoFromSelection(textEditor);
    const res = /(.+):(.+)\s*$/g.exec(text); // 通过正则得到函数名和参数
    if (!res || res.length !== 3) {
        return;
    }
    const prevText = res[1]; // 待处理字符串
    const functionWithArgs = res[2];
    const { name, args } = getFunctionInfo(functionWithArgs);
    const argsStr = args.reduce((prev, curr) => {
        return prev + ', ' +  curr;
    }, '');
    try {
        const functionResult = eval(`_.${name}('${prevText}'${argsStr})`);
        let finalText = type === Mode.JSON_STRING ? JSON.stringify(functionResult) : functionResult.toString();
        edit.replace(textRange, finalText);
    } catch (e) {
        window.showErrorMessage('格式错误');
    }
});

export const runCustomFunctionInNormalMode = runCustomFunction(Mode.NORMAL);
export const runCustomFunctionInJsonStringMode = runCustomFunction(Mode.JSON_STRING);
