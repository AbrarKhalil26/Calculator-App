let display = document.getElementById("display");
let button = document.querySelectorAll("button");

let prev ;
button.forEach(function(index){
    index.addEventListener('click',evenButtonFun);
}); 
function evenButtonFun(e){
    switch(e.target.innerHTML){
        case 'Reset':
            display.innerHTML = "";
            break;
        case 'del':
            display.innerHTML = display.innerHTML.slice(0,-1);
            break;
        case '=':
            display.innerHTML = eval(display.innerHTML);
            prev = eval(display.innerHTML);
            break;
        case 'x !':
            factorial();
            break;
        case '∑ x':
            sumation();
            break;
        case '√ x':
            sqrt();
            break;
        case 'x <sup>2</sup>':
            pow();
            break;
        case 'sin()':
            sin();
            break;
        case 'cos()':
            cos();
            break;
        case 'tan()':
            tan();
            break;
        // case 'ans':
        //     console.log("true");
        //     ans();
        //     break;
        case 'abs':
            display.innerHTML = Math.abs(eval(display.innerHTML));
            break;
        case 'log':
            log();
            break;
        case 'x <sup>°</sup>':
            deg();
            break;
        default :
            display.innerHTML += e.target.innerHTML;


        prev = display.innerHTML;
        console.log("prev " + prev);
        console.log(e.target.innerHTML)

    }
}

function factorial(){
    let x = display.innerHTML;
    let fac = 1;
    for(let i = x; i > 0 ; i--){
        fac *= i;
    }
    display.innerHTML = fac;
}
function sumation(){
    sumBoolean = true;
    let x = display.innerHTML;
    let sum = 0;
    for(let i = 1; i <= x; i++){
        sum += i;
    }
    display.innerHTML = sum;
}
function sqrt(){
    let x = display.innerHTML;
    display.innerHTML = Math.sqrt(x,2);
}
function pow(){
    let x = display.innerHTML;
    display.innerHTML = Math.pow(x,2);
}
function sin(){
    let x = display.innerHTML;
    display.innerHTML = Math.sin(x);
}
function cos(){
    let x = display.innerHTML;
    display.innerHTML = Math.cos(x);
}
function tan(){
    let x = display.innerHTML;
    display.innerHTML = Math.tan(x);
}
// function ans(){
//     if (prev != ''){ 
//         display.innerHTML = prev;
//     }
// }
function log(){
    let x = display.innerHTML;
    display.innerHTML = Math.log(x);
    
}
function deg(){
    let x = display.innerHTML;
    let pi = Math.PI;
    display.innerHTML = x *(180/pi);
}
