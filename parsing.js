import { readFile } from "./uses/usages.js";
const genDiff = (filepath1, filepath2) => {
    const file1 = readFile(filepath1);
    const file2 = readFile(filepath2);
    console.log(file1, file2);
}
export default genDiff;