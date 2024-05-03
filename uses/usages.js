import { readFileSync } from 'fs';
import path from 'path';
const readFile = (filepath) => {
    const dirName = process.cwd();
    const fullpath = path.resolve(dirName, filepath);
    const result = readFileSync(fullpath, 'utf8');
    return result;
}
export {readFile};