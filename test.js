class MyClass {
    value = 10;
    constructor() {
        
    }

    instanceMethod() {
        console.log(this.value);
    }
}

const instance = new MyClass();
instance.instanceMethod(); // Outputs: 42
