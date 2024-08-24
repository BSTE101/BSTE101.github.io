let array = new Array()
function read() {
    while (true) {
        let inputnumber = prompt("Enter a positive integer");
        if (inputnumber > 0) {
            showPrimes(inputnumber)
            if (array.length === 1) {
                alert('For n = ' + inputnumber + ' prime number is ' + array);
            }
            else if (array.length === 0){
                alert('For n = ' + inputnumber + ' is not have prime number.');
            }
            else {
                alert('For n = ' + inputnumber + ' prime number are ' + array);
            }

            break
        }
    }
}

function showPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        array.push(i)
    }

}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


read()