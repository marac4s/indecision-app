const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(5, 3));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) =>{
            return this.name + ' has lived in ' + city;
        });
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());