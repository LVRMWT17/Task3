import Table from 'ascii-table'
import res from './ee.js'
class Tableprop {
calculate() {
    const probabilities = Array.from({length: res.length }, () => Array(res.length).fill(0));
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (i !== j) {
                const totalWins = res[j].reduce((sum, val) => sum + (val > res[i][0] ? 1 : 0), 0);
                probabilities[i][j] = totalWins / res[j].length;
            }
        }
    }
    return probabilities;
}
gen() {
const probabilities = this.calculate();
    const table = new Table();
    const headers = ['User  dice v', ...res.map(arr => arr.join(', '))];
    table.setHeading(...headers);

    for (let i = 0; i < probabilities.length; i++) {
        const row = [res[i].join(', ')];
        for (let j = 0; j < probabilities[i].length; j++) {
            if (i === j) {
                row.push(`- (${(0.3333).toFixed(4)})`);
            } else {
                row.push(probabilities[i][j].toFixed(4));
            }
        }
        table.addRow(...row);
    }
    return table.toString();
}
}
export default Tableprop;