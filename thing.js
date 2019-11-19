function palindrome(str) {
    const split = str.split('')
    const reverse = split.reverse().join('')

    return str == reverse
}


console.log(palindrome('howareyou'));

function sum(a, b)