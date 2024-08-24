list = readInput()
displayStats(list)

function readInput() {
    let array = new Array()
    while (true) {
        let inputnumber = prompt("Enter an integer (a negative integer to quit):")
        inputnumber = parseInt(inputnumber)
        if (inputnumber >= 0) {
            array.push(inputnumber)
        }
        if (inputnumber < 0) {
            break
        }
        else {
            continue
        }
    }
    return array
}

function displayStats(input) {
    if (input === undefined || input.length == 0) {
        alert(" For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0.")
    }
    else {
        let sum = 0
        for (let i = 0; i < input.length; i++) {
            sum += input[i]
        }
        let avg = sum / input.length
        avg = avg.toFixed(2)
        let min = Math.min.apply(Math, input);
        let max = Math.max.apply(Math, input);
        alert(" For the list " + input + ", the average is " + avg + ", the minimum is " + min + ", and the maximum is " + max + ".")
    }

}