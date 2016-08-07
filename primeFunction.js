var optimusPrime = function(x) {
    for (var i = 2; i < x; i++) {
        if (i % x === 0 && i % 1 === 0) {
            return "This is a prime number";
        } else {
            return "This is not prime";
        }
    }
}

}

optimusPrime(3);
