class Greeting {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello(x: string = "Hello"): string {
    return `${x}, ${this.name}!`;
  }
}

const cheers = new Greeting("David");

console.log(cheers.hello());        
console.log(cheers.hello("Hi")); 
