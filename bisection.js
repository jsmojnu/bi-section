document.getElementById('calculate').addEventListener('click', function(){
    const a = +document.getElementById('a').value;
    const b = +document.getElementById('b').value;
    const x3 = +document.getElementById('x3').value;
    const x2 = +document.getElementById('x2').value;
    const x1 = +document.getElementById('x1').value;
    const xMukto = +document.getElementById('xMukto').value;
    console.log(bisection(a, b, x3, x2, x1, xMukto));
})


const epsilon = 0.0005;
let c = 0;

function equation(x , x3 , x2 , x1 , xMukto){
  
    return x3 * x * x * x + x2 * x * x + x1 * x + xMukto;

}
function bisection(a, b, x3, x2, x1, xMukto) {
    if (equation(a, x3, x2, x1, xMukto) * equation(b, x3, x2, x1, xMukto) >= 0) {
        return "Sorry, change the value of a and b";
    }
    
   else{
    while ((b - a) >= epsilon) {
        c = (a + b)/2;
        if (equation(c, x3, x2, x1, xMukto) === 0.0) {
            break;
        }
        else if (equation(c, x3, x2, x1, xMukto) > 0) {
            b = c;
        }
        else {
            a = c;
        }
    }
    showUI(c.toFixed(4));
    return c.toFixed(4);
   }
}

function showUI(root) {
    const showResult = document.querySelector('.show-result');
    clearResult(showResult);
    showResult.innerHTML = `<p>Root is ${root}</p>`;
}
function clearResult(showResult) {
    showResult.innerHTML = '';
}