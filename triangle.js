const readline = require('readline');

// Create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter side a: ", (a) => {
    rl.question("Enter side b: ", (b) => {
        rl.question("Enter side c: ", (c) => {

            // Convert inputs
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            // Check valid triangle
            if (a + b > c && a + c > b && b + c > a) {

                // Type by sides
                if (a === b && b === c) {
                    console.log("Triangle is Equilateral.");
                } else if (a === b || b === c || a === c) {
                    console.log("Triangle is Isosceles.");
                } else {
                    console.log("Triangle is Scalene.");
                }

                // Check right-angled
                const x = a * a, y = b * b, z = c * c;

                if (x + y === z || x + z === y || y + z === x) {
                    console.log("Triangle is also Right-Angled.");
                }

            } else {
                console.log("Not a valid triangle.");
            }

            rl.close();
        });
    });
});
