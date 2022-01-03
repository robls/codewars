exp = (op, val) => {
    if(op) return op(val);
    return val;
}

zero = (a) => exp(a, 0);
one = (a) => exp(a, 1);
two = (a) => exp(a, 2);
three = (a) => exp(a, 3);
four = (a) => exp(a, 4);
five = (a) => exp(a, 5);
six = (a) => exp(a, 6);
seven = (a) => exp(a, 7);
eight = (a) => exp(a, 8);
nine = (a) => exp(a, 9);

plus = (a) => { return (b) => a + b }
minus = (a) => { return (b) => b - a }
times = (a) => { return (b) => a * b }
dividedBy = (a) => { return (b) => Math.floor(b/a) }