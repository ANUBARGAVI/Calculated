// document.getElementById("btn").addEventListener("click",function(){
//   let num1 = document.querySelector(".num1").value;
//   let num2 = document.querySelector(".num2").value;
//   let result = document.querySelector(".result");
//   let operator = document.getElementById("selectOp").value;

//   switch (operator){
//     case "plus":
//         result.innerHTML = number(num1) +  number(num2) ;
//         break;
//         case "minus":
//         result.innerHTML = number(num1) - number(num2) ;
//         break;
//         case "division":
//         result.innerHTML = number(num1) / number(num2) ;
//         break;
//         case "multi":
//         result.innerHTML = number(num1) *  number(num2) ;
//         break;
//   }
// });

document.getElementById('btn').addEventListener('click', function() {
    const num1 = parseFloat(document.querySelector('.num1').value);
    const num2 = parseFloat(document.querySelector('.num2').value);
    const operation = document.getElementById('selectOp').value;
    let result;

    switch (operation) {
        case "plus":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "division":
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        case "multi":
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('output').innerText = result;
});
