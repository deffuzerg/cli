import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';

const readFile = (filepath) => {
    const dirName = process.cwd();
    const fullpath = path.resolve(dirName, filepath);
    const result = readFileSync(fullpath, 'utf8');
    return result;
}

const difference = (obj1, obj2) => {
    const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2))).map((key) => {
        const oldValue = obj1[key];
        const newValue = obj2[key];
        if (!Object.hasOwn(obj2, key)) {
            return {
                action: 'deleted',
                key,
                oldValue,
            };
        }
        if (!Object.hasOwn(obj1, key)) {
            return {
                action: 'add',
                key,
                newValue,
            };
        }
        if (_.isObject(oldValue) && _.isObject(newValue)) {
            return {
                action: 'nestedValue',
                key,
                children: difference(oldValue, newValue),
            };
        }
        if (oldValue !== newValue) {
            return {
                action: 'change',
                key,
                oldValue,
                newValue,
            };
        }
        return {
            action: 'none',
            key,
            oldValue,
        };
    });
    return keys;
}
export {readFile, difference};