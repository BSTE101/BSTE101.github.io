let array = new Array()
function read() {
    let listprime = "";
    while (true) {
        let inputnumber = prompt("Enter a positive integer");
        if (inputnumber > 0) {
            showPrimes(inputnumber)
            alert('For n = ' + inputnumber + ' prime number is ' + array);
            break
        }
    }
}

function showPrimes(n) {
    let listprime = ""
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