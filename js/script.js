document.addEventListener('DOMContentLoaded', () =>{
//minimum
//1
    /* function fuction1() { };
    let fuction2 = function () { };
    let function3 = () => { }; */

//2
    function countArg(){
        alert(`Кількість переданих аргументів: ${arguments.length}`);
    }
    countArg(5,7,10,'p');

//3
    function ret(a, b){
        if(a < b){
            return -1;
        }
        else if(a > b){
            return 1;
        }
        else if(a == b){
            return 0;
        }
        else{
            return 'error';
        }
    }
    alert(ret(5,7));
    
//4
    function factorial(n){
        let fact = 1;
        if (n == 0 || n == 1){
            return fact;
          }else{
            for(let i = n; i >= 1; i--){
              fact *= i;
            }
            return fact;
          }  
    }
    let n = 5;
    alert(`Факторіал числа ${n} = ${factorial(n)}`);

//5
    function str(){
        let a = '2';
        let b = '3';
        let c = '5';
        let numStr = a+b+c;
        alert(numStr);
    }
    str();

//6
    function square(a, b){
        if((typeof b) == 'undefined'){
            return a*a;
        }
        else{
            return a*b;
        }
    }
    alert(square(5));

//normal
//1
    function perfect_number(num){
        if (isNaN(num)) {
            return 'введіть число';
        } else if (!Number.isInteger(num)) {
            return 'введіть ціле число';
        } else {
            let temp = 0;
            for(let i = 1; i < num; i++){
                if(num % i == 0){
                    temp += i 
                }
            }
            if(temp == num){
                return `${num} - досконале число`;
            }
            else{
                return `${num} - не досконале число`;
            }
        }
    }
    alert(perfect_number(6));
    alert(perfect_number(28));
    alert(perfect_number(1));

//2

    function perfect_num(num){
        if (isNaN(num)) {
            return 'введіть число';
        } else if (!Number.isInteger(num)) {
            return 'введіть ціле число';
        } else {
            let temp = 0;
            for(let i = 1; i < num; i++){
                if(num % i == 0){
                    temp += i 
                }
            }
            if(temp == num){
                return true;
            }
            else{
                return false;
            }
        }
    }

    function ArangePerfect_number(min, max){
        let list = '';
        if (isNaN(min) || isNaN(max)) {
            return 'Обидва значення мають бути числами. Будь ласка, перевірте вказані дані.';
        } else {
            for (let i = min; i <= max; i++) {
                if (perfect_num(i)) list += `${i}, `
            }
        }
        if (list) {
            return `Досконалі числа у діапазоні (${min}; ${max}): ${list}.`;
            } else {
            return `У цьому діапазоні відсутні досконалі числа`;
        }
    }
    alert(ArangePerfect_number(1,30));
});