import { readFile, difference } from "./uses/usages.js";
const genDiff = (filepath1, filepath2) => {
    const file1 = JSON.parse(readFile(filepath1));
    const file2 = JSON.parse(readFile(filepath2));
    const differences = difference(file1, file2);
    const space = '  ';
    const result = differences.map((obj) => {
        
        switch (obj.action) {
            case 'deleted':
                return `${space}- ${obj.key}: ${obj.oldValue}`;
            case 'none':
                return `${space}  ${obj.key}: ${obj.oldValue}`;
            case 'change':
                return `${space}- ${obj.key}: ${obj.oldValue}\n${space}+ ${obj.key}: ${obj.newValue}`;
                
            case 'add':
                return `${space}+ ${obj.key}: ${obj.newValue}`;
        }

    })
    return `{
${result.join('\n')}
}`
}
export default genDiff;