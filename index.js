function cube(num) {
    return Math.pow(num, 3);
    }
 console.log(cube(2) + cube(3)); 

 
function calcSalary(salary) {
    const tax = salary * 0.13;
    const netSalary = salary - tax;
    console.log(Размер заработной платы за вычетом налогов равен ${netSalary});