gcd = (a,b) =>  b == 0 ? a : gcd(b, a % b);
lcmm = (a,b) => ((a*b)/gcd(a,b));
lcm = (...args) => { 
    if (args.length === 0) return 1;
    if (args.length === 1) return args[0];
    while(args.length > 2){
        let a = lcmm(args[args.length - 1], args[args.length -2]);
        args.pop(); args.pop(); args.push(a);
    }
    return lcmm(args[0], args[1]);
}