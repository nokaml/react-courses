let a = Math.floor(Math.random() * 100);
console.log("a = ", a);

(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log(a);

if (a > 10) {
    console.log(a);
} else {
    a *= 2;
    if (a > 5) {
        console.log(2 * a + 1);
    } else {
        if (a < 3) {
            console.log(1);
        } else {
            a = 2 * (a - 2);
            if (a > 4) {
                console.log(5);
            } else {
                if (a % 2 == 0) {
                    console.log(6);
                } else {
                    console.log(7);
                }
            }
        }
    }
}

switch (a > 10) {
    case true: 
        console.log(a);
        break;
    case false:
        a *= 2;
        switch (a > 5) {
            case true:
                console.log(2 * a + 1);
                break;
            case false:
                switch (a < 3) {
                    case true:
                        console.log(1);
                        break;
                    case false:
                        a = 2 * (a - 2);
                        switch (a > 4) {
                            case true:
                                console.log(5);
                                break;
                            case false:
                                switch (a % 2 == 0) {
                                    case true:
                                        console.log(6);
                                        break;
                                    case false:
                                        console.log(7);
                                        break;
                                }
                        }
                }
        }
    default:
        console.log('bruh');
}
