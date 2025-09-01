class Counter {
  private y: number;

  constructor(y: number) {
    this.y = y;
  }

  inc(n: number) {
    for (let i = 0; i < n; i++) {
      this.y += 1;
    }
  }

  dec(n: number) {
    for (let i = 0; i < n; i++) {
      this.y -= 1;
    }
  }

  reset() {
    for (let i = this.y; i > 0; i--) {
      this.y -= 1;
    }
  }

  getValue() {
    return this.y;
  }
}

const c = new Counter(10);

c.inc(5);
console.log(c.getValue()); 

c.dec(3);
console.log(c.getValue());

c.reset();
console.log(c.getValue()); 
