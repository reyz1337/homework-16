document.addEventListener('DOMContentLoaded', () =>{
//minimum
//1 Напиши всі можливі варіанти створення функцій.
    /* function fuction1() { };
    let fuction2 = function () { };
    let function3 = () => { }; */

//2 Створи функцію, яка буде виводити кількість переданих їй аргументів.
    function countArg(){
        alert(`Кількість переданих аргументів: ${arguments.length}`);
    }
    countArg(5,7,10,'p');

//3 Напиши функцію, яка приймає 2 числа і повертає :
    // 1. -1, якщо перше число менше, ніж друге; 
    // 2. 1 - якщо перше число більше, ніж друге; 
    // 3. 0 - якщо числа рівні.
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
    
//4 Напиши функцію, яка обчислює факторіал переданого їй числа.
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

//5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
    function str(a,b,c){
        let numStr = a.toString() + b.toString() + c.toString();
        alert(numStr);
    }
    str(1,4,9);

//6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
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
//1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
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

//2 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
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