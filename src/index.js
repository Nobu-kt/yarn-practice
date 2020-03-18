// 問１
const fibo = (n) => {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibo(n - 2) + fibo(n - 1)
    }
}

// for (let i = 0; i < 11; i++) {
//     console.log(fibo(i))
// }


// 問２

const count = (n) => {
    let count = 0
    while (n >= 1) {
        n = n / 10
        count = count + 1
    }
    return count
}

const reverse = (n) => {
    let wordCount = count(n)
    let res = 0
    for (let i = 0; i < wordCount; i++) {
        let x = n % 10
        n = (n - x) / 10
        res = res * 10 + x
    }
    return res
}

// console.log(reverse(192837))
// console.log(reverse(834727612184657))
// console.log(reverse(5674583))


// 問３

const primeSearch = (n) => {
    const primes = [2]
    for (let i = 3; i < n + 1; i++) {
        for (let j = 0; j < primes.length; j++) {
            //このif文がおかしい　直った
            if (primes.every(primeValue => i % primeValue !== 0)) {
                primes.push(i)
            }
        }
    }
    return primes
}

const primeSum = (n) => {
    if (n < 2) {
        return 0
    } else if (n === 2) {
        return 2
    } else {
        const primes = primeSearch(n)
        let sum = 0
        for (let i = 0; i < primes.length; i++) {
            sum = sum + primes[i]
        }
        // console.log(primes)
        //素数調べたいときは上をコメントインすればいい
        return sum
    }
}

// console.log(primeSum(0))
// console.log(primeSum(1))
// console.log(primeSum(2))
// console.log(primeSum(3))
// console.log(primeSum(4))
// console.log(primeSum(100))