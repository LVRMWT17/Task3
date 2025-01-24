const args = process.argv.slice(2);

import Dices from './dice.js';
const dice = new Dices('');
const res = dice.create(args);
export default res;

import Tableprop from './table.js';
const tableprop = new Tableprop(res);

const lengths = {
    0: 'Error: no dice here',
    1: 'Error: only one dice here',
    2: 'Error: only two dices here',
};
const length = lengths[res.length];
if(length) {
console.log(length);
process.exit(1);
};


console.log("Let's determine who makes the first move.");
console.log('I selected a random value in the range 0..1');

import Random, { Random2 } from './randomKEY.js';
const random = new Random('');
console.log(`(HMAC:${random.valuehash})`);
console.log('Try to guess my selection:');

import Uservalue from './uservalue.js';
const con = new Uservalue(res);
con.con();

import Actions from './actions.js';
const acts = new Actions(res);
acts.acts;

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
let uservalue = null;

const userActions = [user1, computer1, throwc, throwu];
const compActions = [computer, user, throwc, throwu];
async function start1() {
    for (const action1 of userActions) {
        await action1();
    }
};
async function start2() {
    for (const action2 of compActions) {
        await action2();
    }
    };

import { createInterface } from 'node:readline';
function quest(){
    rl.question("Select a value:", (input) => {uservalue = input;
    const act = acts.acts[input];
    if (act) {
    act();
    console.log(`My selection: ${random.value} (KEY:${random.key})`);
    turn();
    } else {
    console.log("Invalid selection. Please try again.");
    quest();
    }
    })
    };

async function turn(){if (`${random.value}` === `${uservalue}`){
    console.log('Your turn.');
    await start1();
} else {
    console.log('My turn.');
    await start2();
};
}
let ree = [];
async function computer() { 
    if (`${random.value}` !== `${uservalue}`) {
        const randdice = Math.floor(Math.random() * res.length);
        let seldice = res[randdice];
        ree=seldice;
        res.splice(randdice, 1);
        console.log(`I choose the dice ${seldice}`);
       }
    await new Promise(resolve => setTimeout(resolve, 0));
};
let rew = [];
async function user(){
    console.log('Choose your dice:');
          con.con2();
          if (res.length === 4) {
            acts.acts2['3'] = () => console.log('Your selection:', res[3]);
        }
        return new Promise((resolve) => {
        rl.question("Select: ", async (input3) => {
            const act2 = acts.acts2[input3];
            if (act2) {
                act2();
                let randdice = parseInt(input3);
                let seldice = res[randdice];
                rew=seldice;
                res.splice(randdice, 1);
                resolve();
            } else {
                console.log('Invalid selection. Try again.');
               await user();
            }}  
    
         )} );}
async function user1(){
    console.log('Choose your dice:');
          con.con2();
          if (res.length === 4) {
            acts.acts2['3'] = () => console.log('Your selection:', res[3]);
        }
        return new Promise((resolve) => {
        rl.question("Select: ", (input3) => {
            const act2 = acts.acts2[input3];
            if (act2) {
                act2();
                let randdice = parseInt(input3);
                let seldice = res[randdice];
                rew=seldice;
                res.splice(randdice, 1);
                resolve();
            } else {
                console.log('Invalid selection. Try again.');
             user1();
            }}  
)})};

async function computer1() { 
        const randdice = Math.floor(Math.random() * res.length);
        let seldice = res[randdice];
        ree = seldice;
        res.splice(randdice, 1);
        console.log(`I choose the dice ${seldice}`);
    await new Promise(resolve => setTimeout(resolve, 0));
};
let sum = 0;
async function throwc(){
    console.log('It is time for my throw.');
    console.log('I selected a random value in the range 0..5');
    const random1 = new Random2('');
    console.log(`(HMAC:${random1.valuehash2})`);
    console.log('Add your number modulo 6.');
    con.con4();
    return new Promise((resolve) => {
    rl.question("Select:", (input4) => {
        const act3 = acts.acts3[input4];
        if (act3) {
            act3();
        } else {
            console.log('Errror. Try again');
        };
    console.log('My number is:', `${random1.value1}`, `(KEY: ${random1.key})`);
    sum = (Number(random1.value1) + Number(input4)) % 6 ;
    console.log(`The result is: ${random1.value1} + ${input4} = ${random1.value1 + Number(input4)} (modulo 6)`);
    console.log(`My throw is ${ree[sum]}`);
    resolve()});
});
}
let sum2 = 0;
async function throwu() {
    console.log('It is time for your throw.');
    console.log('I selected a random value in the range 0..5');
    const random1 = new Random2('');
    console.log(`(HMAC:${random1.valuehash2})`);
    console.log('Add your number modulo 6.');
    con.con4();
    return new Promise((resolve) => {
    rl.question("Select:", (input5) => {
        const act3 = acts.acts3[input5];
        if (act3) {
            act3();
        } else {
            console.log('Errror. Try again');
        };
    console.log('My number is:', `${random1.value1}`, `(KEY: ${random1.key})`);
    sum2 = (Number(random1.value1) + Number(input5)) % 6 ;
    console.log(`The result is: ${random1.value1} + ${input5} = ${random1.value1 + Number(input5)} (modulo 6)`);
    console.log(`Your throw is ${rew[sum2]}`) ;
    resolve();
    winner();
}) 
})};

async function winner(){
    if (`${ree[sum]}` > `${rew[sum2]}`){
console.log(`You loose (${ree[sum]} > ${rew[sum2]})`);
    } else {
        console.log(`You win! (${ree[sum]} < ${rew[sum2]})`);
    }
    rl.close();
};
quest();