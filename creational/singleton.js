class Singleton {
    constructor(data) {
        if (Singleton.exist) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        Singleton.exist = true;
        this.data = data;
    }

    getData() {
        return console.log(this.data);
    }
}

new Singleton('First data').getData(); // return 'First data'
new Singleton('Second data').getData(); // always return 'First data'