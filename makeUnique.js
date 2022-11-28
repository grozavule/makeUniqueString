/**
 * Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. 
 * The string will not contain spaces.
 */

const makeUnique1 = word => {
    let uniqueLetters = [];
    for(let i = 0; i < word.length; i++)
    {
        if(!uniqueLetters.includes(word[i]))
        {
            uniqueLetters.push(word[i]);
        }
    }
    return uniqueLetters.join('');
}

const makeUnique2 = word => {
    let uniqueLetters = [];
    word.split('').forEach(letter => {
        if(!uniqueLetters.includes(letter))
        {
            uniqueLetters.push(letter)
        }
    });
    return uniqueLetters.join('');
}

console.log(makeUnique('helloworld'));
console.log(makeUnique('iwanttoclimbamountain'));
