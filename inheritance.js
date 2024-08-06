class A {
    greet() {
        console.log('Hello from class A.');
    }
}

class B extends A {
    greet() {
        super.greet(); // Call the parent class's greet method
        console.log('Hello from class B.');
    }
}

const objB = new B();
objB.greet();
