import res from './ee.js'
import Tableprop from './table.js';

class Action {constructor() {
    this.tableprop = new Tableprop();
}
acts = {
    '0': () => console.log('Your selection: 0'),
    '1': () => console.log('Your selection: 1'),
    'x': () => {
    console.log('Exit');
    process.exit();
    },
    '?': () => console.log(this.tableprop.gen()),
    };
    acts2 = {
    '0': () => console.log('Your selection:', res[0]),
    '1': () => console.log('Your selection:', res[1]),
    '2': () => console.log('Your selection:', res[2]),
    'x': () => {
    console.log('Exit');
    process.exit(); },
    '?': () => console.log(this.tableprop.gen()),
    };
    acts3 = {
    '0': () => console.log('Your selection:', 0),
    '1': () => console.log('Your selection:', 1),
    '2': () => console.log('Your selection:', 2),
    '3': () => console.log('Your selection:', 3),
    '4': () => console.log('Your selection:', 4),
    '5': () => console.log('Your selection:', 5),
    'x': () => {
    console.log('Exit');
    process.exit();
    },
    '?': () => console.log(this.tableprop.gen()),
    };}

export default Action;