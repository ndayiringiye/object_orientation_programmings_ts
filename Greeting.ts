class Greeting {
  constructor(public name: string) {}

  hello() {
    return `Hello, ${this.name}!!`; 
  }
}

const relationships = new Greeting("David");
console.log(relationships.hello()); 
