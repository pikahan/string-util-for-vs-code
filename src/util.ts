export const toLowerCamelCase = (str: string) => {
    if (str.length < 2) {
        return str.toLowerCase();
    }
    const [firstWords, ...otherWords] = str.split('_'); // str.length 必定大于0
    return firstWords.toLowerCase() + otherWords.filter(word => !!word).map(word => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()).join('');
}

export const toUpperCaseEnum = (str: string) => {
    return str.replace(/([A-Z])/g, '_$&').toUpperCase();
}
