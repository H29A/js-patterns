const object = {
    metadata: 'some metadata',

    initialize() {
        console.log(`Metadata: ${this.metadata}, prototyped data: ${this.prototypedData}`);
    }
}

const prototyped = Object.create(object, {
    prototypedData: {
        value: 'some prototyped data'
    }
});

console.log(prototyped.__proto__ === object); // true
prototyped.initialize();