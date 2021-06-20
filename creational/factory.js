const FACTORY_TYPES = {
    ONE: 'FACTORY_TYPE_ONE',
    TWO: 'FACTORY_TYPE_TWO',
    THREE: 'FACTORY_TYPE_THREE'
}

class FactoryElementOne {
    constructor(data) {
        this.data = data;
        this.specialData = 'SPECIAL_DATA';
    }
}

class FactoryElementTwo {
    constructor(data) {
        this.data = data;
        this.specialData = 'SPECIAL_DATA';
    }
}

class FactoryElementThree {
    constructor(data) {
        this.data = data;
        this.specialData = 'SPECIAL_DATA';
    }
}

class Factory {
    static associations = {
        [FACTORY_TYPES.ONE]: FactoryElementOne,
        [FACTORY_TYPES.TWO]: FactoryElementTwo,
        [FACTORY_TYPES.THREE]: FactoryElementThree
    }

    create(data, type) {
        try {
            const factoryElementPointer = Factory.associations[type];
            const element = new factoryElementPointer(data);
            // TODO: you can implement some methods and variables with metadata to the factory element here...
            return element;
        } catch (error) {
            throw new Error(error);
        }
    }
}

const factory = new Factory();
const list = [
    factory.create('specialData', FACTORY_TYPES.ONE),
    factory.create('specialData', FACTORY_TYPES.TWO),
    factory.create('specialData', FACTORY_TYPES.THREE)
];
console.log(list);

