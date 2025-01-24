class Dices{
    constructor(name) {
        this.name = name;
    }
    xo(arg) {return arg.split(',').map(Number)};
    create(args) {const dice = [];
        args.forEach(arg => {const numbers = this.xo(arg);
            if (numbers.length === 6) {
                dice.push(numbers);
            } else {
                console.error(`Error: Invalid number of sides in dice "${arg}" `)}});
            return dice};
}
export default Dices;