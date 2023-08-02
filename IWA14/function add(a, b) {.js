function add(a, b) {
    return a + b;
  }
  // Correct multiplication sign
  function multiply(a, b) {
    return a * b; 
  }
  
  function internal() {
    const added = this.add(this.internal.a, this.internal.b); // Corrected reference to internal properties
    const multiplied = this.multiply(this.internal.a, this.internal.b); // Calculate the multiplication
    return multiplied; // Return the result of the multiplication
  }
  
  // Not allowed to change below this
  
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  console.log(example1.calculate()); 
  console.log(example2.calculate()); 
  