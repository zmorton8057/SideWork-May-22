var greaterNum = prompt("List a number between one and ten");

if (greaterNum >= 5) {
    document.write(" Greater than five ");
} else {
    document.write(" Less than Five ");
}
//answer
function greatNum(num1, num2) {
    if (num1 > num2) {
        return " " + num1 + " ";
    } else {
        return " " + num2 + " ";
    }
}
console.log(greatNum(5, 7));

//way off initially and didn't know where to begin. Ask myself what is the question asking
function helloWorld(lang) {
    if (lang == 'fr') {
      return 'Bonjour'  
    } else if (lang == 'es') {
        return 'Hola, Mundo!'
    } else {
        return 'Hello, World';
    }
}
console.log(helloWorld('fr'));

//Why doesn't this work?
function assignGrade(score) {
    if (score <= 59) {
      document.write(' F ')  
    } else if (score >= 60 && score <= 69){
        document.write(' D ')
    } else if (score >= 70 && score <= 79){
        document.write(' C ')
    } else if (score >= 80 && score <= 89){
        document.write(' B ') 
    } else(score >= 90 && score <= 100)
        document.write(' A ')
        }
console.log(assignGrade(80));
//answer
function assignGrades(score) {
    if (score >= 90) {
        return ' A ';
    } else if (score >= 80) {
        return ' B ';
    } else if (score >= 70) {
        return ' C ';
    } else if (score >= 60) {
        return ' D ';
    } else {
        return ' F ';
    }
} 
console.log(assignGrades(80));

//successfully made what i wanted however, did not understand the directions
var num = [1, 2, 3, 4, 5]
let noun = ['dog', 'cow', 'sheep', 'goat']
function pluralize(num, noun) {
    document.write(" " + num +" " + noun + " ")
}

console.log(pluralize(num[2], noun[1]))
//answer
function pluralizer (noun, number){
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
    return number + ' ' + noun + 's';
 } else { 
    return number + ' ' + noun;
    }
}
console.log('I have ' + pluralizer('cat', 0));
console.log('I have ' + pluralizer('cat', 1));
console.log('I have ' + pluralizer('cat', 2));