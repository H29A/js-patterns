class Old {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class New {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class Adapter {
    constructor() {
        this.new = new New()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.new.add(t1, t2)
            case 'sub': return this.new.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new Old()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new New()
console.log(newCalc.add(10, 5))

const adapter = new Adapter()
console.log(adapter.operations(25, 10, 'sub')) // Оld interface, but new logic