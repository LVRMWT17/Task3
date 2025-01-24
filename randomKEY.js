import { randomBytes, createHmac } from 'crypto';
class Random{
    constructor(name) {
        this.name = name;
        this.key = this.randomKey();
        this.value = this.randomval(0, 1);
        this.valuehash = this.createHash();
    }
    randomKey() {
        const buf = randomBytes(32);
        return buf.toString('hex')
    };
    
    randomval(min, max) {return Math.floor(Math.random() * (max - min + 1))};
    createHash(){ 
       return createHmac("sha3-256", this.key).update(this.value.toString()).digest("hex");
    };
}
class Random2{  constructor(name) {
    this.name = name;
    this.key = this.randomKey();
    this.value1 = this.randomval2(0, 5);
    this.valuehash2 = this.createHash2();}
    randomKey() {
        const buf = randomBytes(32);
        return buf.toString('hex')
    };
    randomval2(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min};
    createHash2(){ 
       return createHmac("sha3-256", this.key).update(this.value1.toString()).digest("hex");
    }}
    export default Random;
    export { Random2 };